"use client";
import { useState } from "react";
import type { Project } from "../lib/schema";
import { siteDigest } from "../lib/export";
import { checkQuality } from "../lib/quality";

type Deployment = {
  id: string;
  state: string;
  url?: string | null;
  digest: string;
  projectId: string;
};
export function PublishPanel({
  project,
  enabled,
  githubEnabled,
  token,
}: {
  project: Project;
  enabled: boolean;
  githubEnabled: boolean;
  token: string;
}) {
  const version = project.versions[project.versions.length - 1];
  const [reviewed, setReviewed] = useState(false);
  const [approved, setApproved] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [githubApproved, setGithubApproved] = useState(false);
  const [githubUrl, setGithubUrl] = useState("");
  const [deployment, setDeployment] = useState<Deployment | null>(() => {
    try {
      const raw = sessionStorage.getItem(
        `human-webs.deployment.${project.id}.${version.id}`,
      );
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  });
  const blocked = checkQuality(version.site).some((f) => f.level === "blocker");
  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
  const remember = (d: Deployment) => {
    setDeployment(d);
    try {
      sessionStorage.setItem(
        `human-webs.deployment.${project.id}.${version.id}`,
        JSON.stringify(d),
      );
    } catch {
      /* UI still retains the deployment ID. */
    }
  };
  const publish = async () => {
    setBusy(true);
    setError("");
    try {
      const digest = await siteDigest(version.site);
      const response = await fetch("/api/publish", {
        method: "POST",
        headers,
        body: JSON.stringify({
          projectId: project.id,
          versionId: version.id,
          site: version.site,
          digest,
          approved,
          reviewedContent: reviewed,
        }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error);
      remember({ ...data, digest, projectId: project.id });
    } catch (e) {
      setError(
        e instanceof Error
          ? e.message
          : "No se pudo publicar. Revisa Vercel antes de reintentar.",
      );
    } finally {
      setBusy(false);
    }
  };
  const verify = async () => {
    if (!deployment) return;
    setBusy(true);
    setError("");
    try {
      const query = new URLSearchParams({
        id: deployment.id,
        projectId: project.id,
        digest: deployment.digest,
      });
      const response = await fetch(`/api/publish?${query}`, { headers });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error);
      remember({ ...deployment, ...data });
    } catch (e) {
      setError(e instanceof Error ? e.message : "No se pudo verificar.");
    } finally {
      setBusy(false);
    }
  };
  const saveGithub = async () => {
    setBusy(true);
    setError("");
    try {
      const digest = await siteDigest(version.site);
      const response = await fetch("/api/github", {
        method: "POST",
        headers,
        body: JSON.stringify({
          projectId: project.id,
          versionId: version.id,
          site: version.site,
          digest,
          approved: githubApproved,
          reviewedContent: reviewed,
        }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error);
      if (
        typeof data.url !== "string" ||
        !data.url.startsWith("https://github.com/")
      )
        throw new Error("No se recibió un enlace GitHub válido.");
      setGithubUrl(data.url);
    } catch (e) {
      setError(
        e instanceof Error ? e.message : "No se pudo guardar en GitHub.",
      );
    } finally {
      setBusy(false);
    }
  };
  return (
    <div className="panel-content">
      <p className="kicker">Entrega / Vercel</p>
      <h2>Publica una versión revisada.</h2>
      <p>
        Se enviarán las páginas de{" "}
        <strong>{version.site.brief.name || "este proyecto"}</strong> a un
        proyecto Vercel independiente. Esta acción crea una URL accesible según
        la protección de tu equipo.
      </p>
      <p className="hint">
        Versión {project.versions.length} ·{" "}
        {new Date(version.createdAt).toLocaleString("es-ES")}
        <br />
        El archivo de edición y el informe privado quedan fuera del despliegue.
      </p>
      {!enabled && (
        <p className="notice">
          Vercel está pendiente de configuración. Puedes descargar la web
          completa y conservar el proyecto. Conexiones explica los pasos.
        </p>
      )}
      {blocked && (
        <p className="notice">
          Completa nombre, sector, ciudad y contacto válido en Datos antes de
          publicar.
        </p>
      )}
      <label className="check">
        <input
          type="checkbox"
          checked={reviewed}
          onChange={(e) => setReviewed(e.target.checked)}
        />
        He revisado todas las páginas, datos del negocio, enlaces y requisitos
        legales. Acepto los avisos del informe de calidad.
      </label>
      <label className="check">
        <input
          type="checkbox"
          checked={approved}
          onChange={(e) => setApproved(e.target.checked)}
        />
        Apruebo publicar esta versión en Vercel.
      </label>
      <button
        className="primary"
        disabled={
          !enabled ||
          !token ||
          blocked ||
          !approved ||
          !reviewed ||
          busy ||
          !!deployment
        }
        onClick={publish}
      >
        {busy ? "Procesando…" : "Publicar versión aprobada"}
      </button>
      {deployment && (
        <div className="notice">
          <p>
            Despliegue: {deployment.id}
            <br />
            Estado: <strong>{deployment.state}</strong>
          </p>
          {deployment.state === "READY" && deployment.url ? (
            <a href={deployment.url} target="_blank" rel="noopener noreferrer">
              Abrir web publicada y verificada ↗
            </a>
          ) : (
            <>
              <p>
                {["ERROR", "CANCELED"].includes(deployment.state)
                  ? "El despliegue no se completó. Revisa el panel de Vercel."
                  : "La publicación aún no está verificada."}
              </p>
              <button disabled={busy} onClick={verify}>
                Comprobar estado en Vercel
              </button>
            </>
          )}
        </div>
      )}
      {error && (
        <p role="alert" className="error">
          {error}
        </p>
      )}
      <hr />
      <h2>Código en GitHub</h2>
      <p>
        Guarda esta versión en una rama de un repositorio privado independiente.
        No fusiona cambios ni activa despliegues desde Human Webs.
      </p>
      {!githubEnabled && (
        <p className="hint">
          GitHub está pendiente de configuración. El ZIP incluye todo el código.
        </p>
      )}
      <label className="check">
        <input
          type="checkbox"
          checked={githubApproved}
          onChange={(e) => setGithubApproved(e.target.checked)}
        />
        Apruebo guardar esta versión en un repositorio privado de GitHub.
      </label>
      <button
        disabled={
          !githubEnabled ||
          !token ||
          !githubApproved ||
          !reviewed ||
          blocked ||
          busy ||
          !!githubUrl
        }
        onClick={saveGithub}
      >
        Guardar versión en GitHub
      </button>
      {githubUrl && (
        <p>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            Revisar código guardado en GitHub ↗
          </a>
        </p>
      )}
      <p className="hint">
        No se publica nada al generar, descargar o guardar. Si una solicitud
        falla o pierde conexión, revisa Vercel antes de crear otra versión e
        intentarlo de nuevo.
      </p>
    </div>
  );
}
