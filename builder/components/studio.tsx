"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  briefSchema,
  initialBrief,
  siteSchema,
  workspaceSchema,
  type Brief,
  type Project,
  type Site,
  type Version,
} from "../lib/schema";
import {
  createSite,
  editLocally,
  interpretBrief,
  updateSiteBrief,
} from "../lib/engine";
import {
  addVersion,
  newProject,
  readProjects,
  saveProjects,
  STORAGE_KEY,
} from "../lib/projects";
import { renderPage } from "../lib/render";
import { exportZip } from "../lib/export";
import { checkQuality } from "../lib/quality";
import { designs } from "../lib/design";
import { BriefForm } from "./brief-form";
import { PublishPanel } from "./publish-panel";
import { PageEditor } from "./page-editor";

type Tab =
  "chat" | "page" | "data" | "design" | "history" | "quality" | "publish";
type Capabilities = { ai: boolean; publish: boolean; github: boolean };
type Message = { role: "user" | "assistant"; text: string };
function download(content: BlobPart, filename: string, type: string) {
  const url = URL.createObjectURL(new Blob([content], { type }));
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  anchor.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
export default function Studio() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [storageBroken, setStorageBroken] = useState(false);
  const [view, setView] = useState<
    "create" | "projects" | "editor" | "settings"
  >("create");
  const [brief, setBrief] = useState<Brief>(initialBrief);
  const [prompt, setPrompt] = useState("");
  const [instruction, setInstruction] = useState("");
  const [messages, setMessages] = useState<Record<string, Message[]>>({});
  const [tab, setTab] = useState<Tab>("chat");
  const [mobile, setMobile] = useState(false);
  const [page, setPage] = useState("index");
  const [previewUrl, setPreviewUrl] = useState("");
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [capabilities, setCapabilities] = useState<Capabilities>({
    ai: false,
    publish: false,
    github: false,
  });
  const [aiMode, setAiMode] = useState(false);
  const [operatorToken, setOperatorToken] = useState("");
  const [paintMs, setPaintMs] = useState<number | null>(null);
  const previewStarted = useRef<number | null>(null);
  const importing = useRef<HTMLInputElement>(null);
  const previewFrame = useRef<HTMLIFrameElement>(null);
  const active = projects.find((p) => p.id === activeId);
  const version = active?.versions[active.versions.length - 1];
  const site = version?.site;
  const selectedPage =
    site?.pages.find((item) => item.slug === page) || site?.pages[0];
  const html = useMemo(
    () => (site ? renderPage(site, page, "preview") : ""),
    [site, page],
  );
  useEffect(() => {
    if (!html) {
      setPreviewUrl("");
      return;
    }
    const url = URL.createObjectURL(
      new Blob([html], { type: "text/html;charset=utf-8" }),
    );
    setPreviewUrl(url);
    return () => URL.revokeObjectURL(url);
  }, [html]);
  const quality = useMemo(() => (site ? checkQuality(site) : []), [site]);

  useEffect(() => {
    const navigate = (event: MessageEvent) => {
      if (
        event.source !== previewFrame.current?.contentWindow ||
        event.origin !== "null"
      )
        return;
      if (
        event.data?.type !== "human-webs:page" ||
        typeof event.data.slug !== "string"
      )
        return;
      if (site?.pages.some((item) => item.slug === event.data.slug))
        setPage(event.data.slug);
    };
    window.addEventListener("message", navigate);
    return () => window.removeEventListener("message", navigate);
  }, [site]);

  useEffect(() => {
    if (site && !site.pages.some((item) => item.slug === page))
      setPage("index");
  }, [site, page]);

  useEffect(() => {
    try {
      setProjects(readProjects(localStorage));
    } catch {
      setError(
        "No se pudieron leer los proyectos guardados. No sobrescribiremos esos datos. Exporta una copia antes de restablecer el almacenamiento.",
      );
      setStorageBroken(true);
    }
    setLoaded(true);
    fetch("/api/capabilities")
      .then((r) => r.json())
      .then(setCapabilities)
      .catch(() =>
        setStatus("Conexiones no disponibles; puedes usar el motor local."),
      );
  }, []);

  const persist = (next: Project[]) => {
    if (!storageBroken) {
      try {
        saveProjects(localStorage, next);
        setStatus("Guardado en este navegador.");
      } catch {
        setStorageBroken(true);
        setError(
          "El navegador no pudo guardar el proyecto. Sigue disponible en esta sesión: descarga una copia JSON ahora.",
        );
      }
    }
    setProjects(next);
  };
  const commit = (
    nextSite: Site,
    label: string,
    source: Version["source"],
    durationMs = 0,
  ) => {
    if (!active) return;
    if (
      JSON.stringify(nextSite) ===
      JSON.stringify(active.versions[active.versions.length - 1].site)
    ) {
      setStatus("No hay cambios que guardar.");
      return;
    }
    const next = addVersion(active, nextSite, label, source, durationMs);
    previewStarted.current = performance.now();
    setPaintMs(null);
    persist(projects.map((p) => (p.id === active.id ? next : p)));
    setBrief(nextSite.brief);
  };
  const callAi = async (
    site: Site,
    instruction: string,
    pageSlug?: string,
  ): Promise<Site> => {
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${operatorToken}`,
      },
      body: JSON.stringify({
        site,
        instruction,
        mode: pageSlug ? "edit" : "generate",
        ...(pageSlug ? { pageSlug } : {}),
      }),
      signal: AbortSignal.timeout(55000),
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error);
    return siteSchema.parse(data.site);
  };
  const generate = async () => {
    if (!loaded || busy) return;
    if (projects.length >= 40) {
      setError(
        "Este navegador admite hasta 40 proyectos. Exporta una copia para conservarlos.",
      );
      return;
    }
    const started = performance.now();
    setBusy(true);
    setError("");
    try {
      const interpreted = prompt.trim()
        ? interpretBrief(prompt, brief)
        : briefSchema.parse(brief);
      let nextSite = createSite(interpreted);
      let source: Version["source"] = "local";
      if (aiMode) {
        try {
          nextSite = await callAi(
            nextSite,
            prompt || "Redacta una web usando solo los datos confirmados.",
          );
          source = "ai";
        } catch (e) {
          setError(
            `${e instanceof Error ? e.message : "No se pudo usar IA."} Se ha creado un borrador local.`,
          );
        }
      }
      const project = newProject(nextSite, source, performance.now() - started);
      previewStarted.current = started;
      setPaintMs(null);
      persist([project, ...projects]);
      setActiveId(project.id);
      setBrief(nextSite.brief);
      setView("editor");
      setPage("index");
      setTab("chat");
      setMessages((prev) => ({
        ...prev,
        [project.id]: [
          {
            role: "assistant",
            text: `He preparado ${nextSite.pages.length} páginas con el motor ${source === "ai" ? "de IA" : "local"}. Revisa los datos que faltan en Calidad. Puedes pedirme «hazlo más elegante» o «Titular: …».`,
          },
        ],
      }));
    } catch (e) {
      setError(
        e instanceof Error
          ? e.message
          : "No se pudo generar. Revisa los datos y las URLs.",
      );
    } finally {
      setBusy(false);
    }
  };
  const edit = async () => {
    if (!site || !active || !selectedPage || !instruction.trim() || busy)
      return;
    const text = instruction.trim();
    const started = performance.now();
    setBusy(true);
    setError("");
    setInstruction("");
    setMessages((prev) => ({
      ...prev,
      [active.id]: [...(prev[active.id] || []), { role: "user", text }],
    }));
    try {
      const result = aiMode
        ? {
            site: await callAi(site, text, selectedPage.slug),
            changed: true,
            message:
              "He aplicado la instrucción con IA. Revisa el texto generado antes de entregarlo.",
          }
        : editLocally(site, text, selectedPage.slug);
      const changed =
        result.changed && JSON.stringify(result.site) !== JSON.stringify(site);
      if (changed)
        commit(
          result.site,
          `[${selectedPage.label}] ${text}`,
          aiMode ? "ai" : "local",
          performance.now() - started,
        );
      setMessages((prev) => ({
        ...prev,
        [active.id]: [
          ...(prev[active.id] || []),
          {
            role: "assistant",
            text:
              result.changed && !changed
                ? "La página ya tiene esos valores; no he creado una versión duplicada."
                : result.message,
          },
        ],
      }));
    } catch (e) {
      setError(
        e instanceof Error
          ? e.message
          : "No se pudo aplicar el cambio. La versión anterior se conserva.",
      );
    } finally {
      setBusy(false);
    }
  };
  const openProject = (project: Project) => {
    setActiveId(project.id);
    setBrief(project.versions[project.versions.length - 1].site.brief);
    setPage("index");
    setView("editor");
    setTab("chat");
    setError("");
    setPaintMs(null);
  };
  const importFile = async (file: File) => {
    setError("");
    try {
      if (file.size > 5_000_000) throw new Error("El archivo supera 5 MB.");
      const raw = JSON.parse(await file.text());
      const workspace = workspaceSchema.safeParse(raw);
      const incoming = workspace.success
        ? workspace.data.projects
        : [newProject(siteSchema.parse(raw), "manual", 0)];
      const next = [...projects];
      for (const project of incoming) {
        // Imported copies receive new IDs so an older backup can never overwrite current work.
        next.unshift({ ...project, id: crypto.randomUUID() });
      }
      if (next.length > 40)
        throw new Error("La importación superaría el límite de 40 proyectos.");
      persist(next);
      setView("projects");
      setStatus(`${incoming.length} proyecto(s) importados como copias.`);
    } catch {
      setError(
        "No se pudo importar. Usa un JSON de Human Webs válido de menos de 5 MB y hasta 40 proyectos.",
      );
    }
  };
  const nav = (next: typeof view) => {
    setView(next);
    setError("");
  };
  const exportBackup = () =>
    download(
      JSON.stringify({ schemaVersion: 1, projects }, null, 2),
      "human-webs-proyectos.json",
      "application/json",
    );

  return (
    <div className="studio">
      <aside className="sidebar">
        <a
          className="wordmark"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            nav("create");
          }}
        >
          human<span>/</span>webs<small>EL TALLER DIGITAL</small>
        </a>
        <nav aria-label="Panel de control">
          <button
            aria-current={view === "create" ? "page" : undefined}
            onClick={() => nav("create")}
          >
            <span>＋</span> Crear nueva web
          </button>
          <button
            aria-current={view === "projects" ? "page" : undefined}
            onClick={() => nav("projects")}
          >
            <span>▤</span> Mis proyectos <small>{projects.length}</small>
          </button>
          {active && (
            <button
              aria-current={view === "editor" ? "page" : undefined}
              onClick={() => nav("editor")}
            >
              <span>↗</span> Volver al editor
            </button>
          )}
        </nav>
        <div className="sidebar-bottom">
          <p>
            Buenas webs.
            <br />
            Con oficio y sin ruido.
          </p>
          <button onClick={() => nav("settings")}>Conexiones y copias ↗</button>
          <small>
            Proyectos guardados en este navegador.
            <br />
            Descarga copias para conservarlos.
          </small>
        </div>
      </aside>
      <div className="workspace">
        <header className="topbar">
          <span>
            {view === "editor"
              ? site?.brief.name || "Proyecto sin nombre"
              : "Tu espacio de trabajo"}
          </span>
          <span className="mode">
            <i />
            {aiMode ? "IA conectada" : "Motor local"}
          </span>
        </header>
        <div className="feedback" aria-live="polite">
          {status}
          {busy && " · Trabajando…"}
        </div>
        {error && (
          <div className="global-error" role="alert">
            {error}
          </div>
        )}
        {view === "create" && (
          <main className="create-view">
            <div className="create-intro">
              <p className="kicker">DE UN NEGOCIO A SU WEB</p>
              <h1>
                Cada negocio
                <br />
                tiene algo <em>propio.</em>
              </h1>
              <p>
                Vamos a darle un lugar en internet. Empieza con una idea y
                termina con una web que puedas seguir trabajando.
              </p>
              <div className="process">
                <span>01 / Cuéntanos</span>
                <span>02 / Dale forma</span>
                <span>03 / Revisa y entrega</span>
              </div>
            </div>
            <section className="creation-form" aria-label="Crear nueva web">
              <label className="field prompt-label">
                ¿Qué web tienes en mente?
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  maxLength={3000}
                  rows={3}
                  placeholder="Necesito una web para una barbería premium en Lisboa…"
                />
              </label>
              <p className="hint">
                El motor local reconoce sector, ciudad y estilo. Completa debajo
                los datos reales que quieras publicar.
              </p>
              <BriefForm brief={brief} onChange={setBrief} />
              <button
                className="primary generate"
                onClick={generate}
                disabled={!loaded || busy}
              >
                {busy ? "Preparando tu web…" : "Crear primera versión"}{" "}
                <span>↗</span>
              </button>
              <p className="hint">
                Primera vista previa medida al cargar. El resultado se guarda
                aquí y se puede descargar. Publicar requiere tu aprobación.
              </p>
            </section>
          </main>
        )}
        {view === "projects" && (
          <main className="projects-view">
            <p className="kicker">TU ARCHIVO</p>
            <div className="section-title">
              <h1>
                Mis proyectos<span>.</span>
              </h1>
              <button onClick={() => nav("create")}>＋ Nueva web</button>
            </div>
            <p className="muted">
              Cada proyecto conserva hasta 50 versiones en este navegador.
            </p>
            {!projects.length ? (
              <div className="empty">
                <h2>El taller está listo.</h2>
                <p>Crea tu primera web o importa una copia de Human Webs.</p>
                <button className="primary" onClick={() => nav("create")}>
                  Crear una web ↗
                </button>
              </div>
            ) : (
              <div className="project-list">
                {projects.map((p, i) => {
                  const latest = p.versions[p.versions.length - 1];
                  return (
                    <button
                      key={p.id}
                      className="project-row"
                      onClick={() => openProject(p)}
                    >
                      <span className="project-number">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h2>{latest.site.brief.name || "Nombre pendiente"}</h2>
                        <p>
                          {latest.site.brief.sector || "Sector pendiente"} /{" "}
                          {latest.site.brief.city || "Ciudad pendiente"}
                        </p>
                      </div>
                      <span>
                        {p.versions.length} versiones
                        <br />
                        <small>
                          {new Date(p.updatedAt).toLocaleDateString("es-ES")}
                        </small>
                      </span>
                      <span>↗</span>
                    </button>
                  );
                })}
              </div>
            )}
            <div className="button-row">
              <button disabled={!projects.length} onClick={exportBackup}>
                Descargar copia de proyectos
              </button>
              <button onClick={() => importing.current?.click()}>
                Importar copia JSON
              </button>
            </div>
          </main>
        )}
        {view === "editor" && active && site && version && (
          <main className="editor-view">
            <div className="editor-heading">
              <div>
                <p className="kicker">
                  EN EL TALLER / VERSIÓN {active.versions.length}
                </p>
                <h1>
                  {site.brief.name || "Nombre pendiente"}
                  <span>.</span>
                </h1>
              </div>
              <div className="button-row">
                <button
                  onClick={() => {
                    try {
                      download(
                        exportZip(site).slice().buffer as ArrayBuffer,
                        "human-webs-sitio.zip",
                        "application/zip",
                      );
                    } catch {
                      setError("No se pudo crear la descarga.");
                    }
                  }}
                >
                  Descargar código
                </button>
                <button className="primary" onClick={() => setTab("publish")}>
                  Publicar ↗
                </button>
              </div>
            </div>
            <div className="editor-grid">
              <section className="editor-panel">
                <div
                  className="tabs"
                  onKeyDown={(event) => {
                    if (
                      !["ArrowRight", "ArrowLeft", "Home", "End"].includes(
                        event.key,
                      )
                    )
                      return;
                    const buttons = Array.from(
                      event.currentTarget.querySelectorAll<HTMLButtonElement>(
                        '[role="tab"]',
                      ),
                    );
                    const index = buttons.indexOf(
                      event.target as HTMLButtonElement,
                    );
                    const next =
                      event.key === "Home"
                        ? 0
                        : event.key === "End"
                          ? buttons.length - 1
                          : (index +
                              (event.key === "ArrowRight" ? 1 : -1) +
                              buttons.length) %
                            buttons.length;
                    event.preventDefault();
                    buttons[next].focus();
                    buttons[next].click();
                  }}
                  role="tablist"
                  aria-label="Herramientas del editor"
                >
                  {(
                    [
                      ["chat", "Conversación"],
                      ["page", "Página"],
                      ["data", "Datos"],
                      ["design", "Estilo"],
                      ["history", "Versiones"],
                      ["quality", "Calidad"],
                      ["publish", "Publicar"],
                    ] as const
                  ).map(([id, label]) => (
                    <button
                      key={id}
                      role="tab"
                      aria-selected={tab === id}
                      aria-controls={tab === id ? `panel-${id}` : undefined}
                      tabIndex={tab === id ? 0 : -1}
                      id={`tab-${id}`}
                      onClick={() => setTab(id)}
                    >
                      {label}
                    </button>
                  ))}
                </div>
                <div
                  role="tabpanel"
                  id={`panel-${tab}`}
                  aria-labelledby={`tab-${tab}`}
                >
                  {tab === "chat" && (
                    <div className="chat-panel">
                      <p className="kicker">TU WEB, A TU MANERA</p>
                      <h2>Seguimos afinando.</h2>
                      <p className="hint">
                        Página seleccionada:{" "}
                        <strong>{selectedPage?.label}</strong>. El estilo y el
                        contacto se aplican a toda la web.
                      </p>
                      <div className="messages" aria-live="polite">
                        {(
                          messages[active.id] || [
                            {
                              role: "assistant",
                              text: "Proyecto abierto. Las versiones guardadas incluyen el contenido y la instrucción de cada cambio.",
                            },
                          ]
                        ).map((m, i) => (
                          <div key={i} className={`message ${m.role}`}>
                            <small>
                              {m.role === "user" ? "Tú" : "Human Webs"}
                            </small>
                            <p>{m.text}</p>
                          </div>
                        ))}
                      </div>
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          void edit();
                        }}
                      >
                        <label className="field">
                          Pide un cambio
                          <textarea
                            rows={3}
                            value={instruction}
                            maxLength={3000}
                            onChange={(e) => setInstruction(e.target.value)}
                            placeholder="Hazlo más elegante…"
                          />
                        </label>
                        <button
                          className="primary"
                          disabled={busy || !instruction.trim()}
                        >
                          {busy ? "Aplicando…" : "Aplicar cambio ↗"}
                        </button>
                      </form>
                      <p className="hint">
                        {aiMode
                          ? "La IA redacta con los datos confirmados. Revisa el resultado."
                          : "Página: «Titular: …», «Texto: …», «SEO: …» o «Título SEO: …». Datos generales: «Descripción: …» y «Contacto: …»."}
                      </p>
                    </div>
                  )}
                  {tab === "page" && selectedPage && (
                    <PageEditor
                      key={`${version.id}:${selectedPage.slug}`}
                      site={site}
                      slug={selectedPage.slug}
                      disabled={busy}
                      onSave={(next, label) => commit(next, label, "manual")}
                    />
                  )}
                  {tab === "data" && (
                    <div className="panel-content">
                      <h2>Los datos de verdad.</h2>
                      <BriefForm brief={brief} onChange={setBrief} compact />
                      <button
                        className="primary"
                        disabled={busy}
                        onClick={() => {
                          try {
                            const parsed = briefSchema.parse(brief);
                            const nextSite = updateSiteBrief(site, parsed);
                            commit(
                              nextSite,
                              "Actualizar datos del negocio",
                              "manual",
                            );
                          } catch {
                            setError(
                              "Revisa los campos y usa URLs HTTPS públicas válidas.",
                            );
                          }
                        }}
                      >
                        Guardar datos y versión
                      </button>
                      <p className="hint">
                        Los cambios de datos no reescriben automáticamente tus
                        titulares. Usa la conversación para ajustar el texto.
                      </p>
                    </div>
                  )}
                  {tab === "design" && (
                    <div className="panel-content">
                      <p className="kicker">BIBLIOTECA VISUAL</p>
                      <h2>Elige una composición.</h2>
                      {Object.entries(designs).map(([key, d]) => (
                        <button
                          key={key}
                          disabled={busy}
                          className={`design-option ${site.brief.style === key ? "selected" : ""}`}
                          aria-pressed={site.brief.style === key}
                          onClick={() =>
                            commit(
                              {
                                ...site,
                                brief: {
                                  ...site.brief,
                                  style: key as Brief["style"],
                                },
                              },
                              `Estilo: ${d.name}`,
                              "manual",
                            )
                          }
                        >
                          <span className={`design-swatch ${key}`}>Aa</span>
                          <span>
                            <strong>{d.name}</strong>
                            <small>{d.description}</small>
                          </span>
                        </button>
                      ))}
                      <p className="hint">
                        Tipografía, estructura, espaciado y botones cambian
                        juntos. No se añaden fotos ni reseñas inventadas.
                      </p>
                    </div>
                  )}
                  {tab === "history" && (
                    <div className="panel-content">
                      <h2>El camino hasta aquí.</h2>
                      <p className="hint">
                        Restaurar crea una versión nueva y conserva las
                        anteriores.
                      </p>
                      {active.versions
                        .slice()
                        .reverse()
                        .map((v, i) => (
                          <div key={v.id} className="version-row">
                            <div>
                              <strong>
                                V{active.versions.length - i} · {v.label}
                              </strong>
                              <small>
                                {new Date(v.createdAt).toLocaleString("es-ES")}{" "}
                                / {v.source} /{" "}
                                {v.durationMs > 0
                                  ? `${(v.durationMs / 1000).toFixed(3)} s de generación`
                                  : "Duración no medida"}
                              </small>
                            </div>
                            <button
                              disabled={busy || v.id === version.id}
                              onClick={() =>
                                commit(
                                  v.site,
                                  `Restaurar versión ${active.versions.length - i}`,
                                  "restore",
                                )
                              }
                            >
                              Restaurar
                            </button>
                          </div>
                        ))}
                    </div>
                  )}
                  {tab === "quality" && (
                    <div className="panel-content">
                      <p className="kicker">ANTES DE ENTREGAR</p>
                      <h2>Revisión de calidad.</h2>
                      <p>
                        Comprobaciones de estructura y datos. Los avisos
                        requieren revisión; no equivalen a una certificación.
                      </p>
                      {quality.map((f) => (
                        <div key={f.id} className={`finding ${f.level}`}>
                          <span>
                            {f.level === "pass"
                              ? "✓"
                              : f.level === "blocker"
                                ? "!"
                                : "·"}
                          </span>
                          <div>
                            <strong>{f.label}</strong>
                            <p>{f.detail}</p>
                            <small>
                              {f.level === "blocker"
                                ? "Bloquea publicación"
                                : f.level === "warning"
                                  ? "Revisar"
                                  : "Comprobado por el motor"}
                            </small>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  {tab === "publish" && (
                    <PublishPanel
                      key={version.id}
                      project={active}
                      enabled={capabilities.publish}
                      githubEnabled={capabilities.github}
                      token={operatorToken}
                    />
                  )}
                </div>
              </section>
              <section className="preview-panel" aria-label="Vista previa">
                <div className="preview-toolbar">
                  <label>
                    Página
                    <select
                      aria-label="Página"
                      value={page}
                      onChange={(e) => setPage(e.target.value)}
                    >
                      {site.pages.map((p) => (
                        <option key={p.slug} value={p.slug}>
                          {p.label}
                        </option>
                      ))}
                    </select>
                  </label>
                  <div className="device-switch">
                    <button
                      aria-pressed={!mobile}
                      onClick={() => setMobile(false)}
                    >
                      Escritorio
                    </button>
                    <button
                      aria-pressed={mobile}
                      onClick={() => setMobile(true)}
                    >
                      Móvil
                    </button>
                  </div>
                </div>
                <div className={`preview-canvas ${mobile ? "mobile" : ""}`}>
                  {previewUrl && (
                    <iframe
                      ref={previewFrame}
                      title="Vista previa del sitio generado"
                      sandbox="allow-scripts"
                      src={previewUrl}
                      onLoad={() => {
                        if (previewStarted.current !== null) {
                          setPaintMs(
                            performance.now() - previewStarted.current,
                          );
                          previewStarted.current = null;
                        }
                      }}
                    />
                  )}
                </div>
                <div className="preview-footer">
                  <span>
                    {site.pages.length} páginas ·{" "}
                    {mobile
                      ? "390 px, ajustado al espacio disponible"
                      : "Vista adaptable"}{" "}
                    · Previa aislada
                  </span>
                  <span>
                    {paintMs !== null
                      ? `${(paintMs / 1000).toFixed(3)} s hasta cargar la previa`
                      : version.durationMs > 0
                        ? `${(version.durationMs / 1000).toFixed(3)} s de generación guardada`
                        : "Versión guardada · duración no medida"}
                  </span>
                </div>
                <p className="hint">
                  Navegación disponible dentro de la previa. Los formularios se
                  activan en el código exportado cuando tienen un servicio
                  configurado.
                </p>
              </section>
            </div>
          </main>
        )}
        {view === "settings" && (
          <main className="settings-view">
            <p className="kicker">CONEXIONES Y CUIDADO DEL TRABAJO</p>
            <h1>
              El taller, preparado<span>.</span>
            </h1>
            <section>
              <h2>Tu trabajo se queda contigo.</h2>
              <p>
                Los proyectos se guardan en este navegador, hasta 40 proyectos y
                50 versiones por proyecto. Borrar los datos del navegador los
                elimina. La copia JSON permite volver a abrirlos.
              </p>
              <div className="button-row">
                <button disabled={!projects.length} onClick={exportBackup}>
                  Descargar copia JSON
                </button>
                <button onClick={() => importing.current?.click()}>
                  Importar copia JSON
                </button>
                {storageBroken && (
                  <button
                    onClick={() => {
                      try {
                        download(
                          localStorage.getItem(STORAGE_KEY) || "",
                          "human-webs-datos-originales.json",
                          "application/json",
                        );
                      } catch {
                        setError(
                          "El navegador no permite leer el almacenamiento. Descarga la copia de los proyectos disponibles en esta sesión.",
                        );
                      }
                    }}
                  >
                    Descargar datos originales
                  </button>
                )}
              </div>
            </section>
            <section>
              <h2>IA y publicación</h2>
              <p>
                Estado: IA {capabilities.ai ? "configurada" : "pendiente"} ·
                Vercel {capabilities.publish ? "configurado" : "pendiente"} ·
                GitHub {capabilities.github ? "configurado" : "pendiente"}.
              </p>
              <p>
                Configura las variables de servidor descritas en el README. Las
                claves de IA y Vercel nunca se introducen en este panel.
              </p>
              <label className="field">
                Clave de operador del taller
                <input
                  type="password"
                  autoComplete="off"
                  value={operatorToken}
                  onChange={(e) => setOperatorToken(e.target.value)}
                />
              </label>
              <p className="hint">
                Solo se conserva en memoria durante esta sesión. No uses aquí
                una clave de IA ni un token Vercel.
              </p>
              <label className="check">
                <input
                  type="checkbox"
                  disabled={!capabilities.ai || !operatorToken}
                  checked={aiMode}
                  onChange={(e) => setAiMode(e.target.checked)}
                />
                Usar IA para generar y editar (envía el briefing al proveedor
                configurado y consume sus créditos).
              </label>
              <p className="hint">
                El modo local funciona sin credenciales. El taller no tiene aún
                cuentas de clientes ni sincronización entre dispositivos.
              </p>
            </section>
          </main>
        )}
      </div>
      <input
        ref={importing}
        className="visually-hidden"
        type="file"
        accept="application/json,.json"
        aria-label="Importar proyectos JSON"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) void importFile(file);
          e.target.value = "";
        }}
      />
    </div>
  );
}
