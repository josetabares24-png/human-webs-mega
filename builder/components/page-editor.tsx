"use client";
import { useState } from "react";
import { updatePage, type PagePatch } from "../lib/page-edit";
import type { Site } from "../lib/schema";

export function PageEditor({
  site,
  slug,
  disabled,
  onSave,
}: {
  site: Site;
  slug: string;
  disabled: boolean;
  onSave: (site: Site, label: string) => void;
}) {
  const page = site.pages.find((page) => page.slug === slug) || site.pages[0];
  const [draft, setDraft] = useState<PagePatch>({
    label: page.label,
    title: page.title,
    description: page.description,
    heading: page.slug === "index" ? site.headline : page.heading,
    body: page.slug === "index" ? site.introduction : page.body,
  });
  const [error, setError] = useState("");
  const fields = [
    { key: "label", label: "Nombre en la navegación", max: 35 },
    { key: "heading", label: "Titular de la página", max: 150 },
    {
      key: "body",
      label: "Texto de la página",
      max: page.slug === "index" ? 800 : 2000,
    },
    { key: "title", label: "Título SEO", max: 150 },
    { key: "description", label: "Descripción SEO", max: 300 },
  ] as const;
  return (
    <div className="panel-content">
      <p className="kicker">CONTENIDO / {page.label}</p>
      <h2>Edita esta página.</h2>
      <p>
        Los cambios se guardan en una versión nueva. El contacto, los servicios
        y otros datos del negocio se editan en Datos.
      </p>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setError("");
          try {
            onSave(
              updatePage(site, page.slug, draft),
              `Editar página: ${draft.label || page.label}`,
            );
          } catch {
            setError(
              "Revisa los campos: el nombre, titular y metadatos no pueden quedar vacíos.",
            );
          }
        }}
      >
        {fields.map((field) => (
          <label className="field" key={field.key}>
            {field.label}
            {field.key === "body" || field.key === "description" ? (
              <textarea
                aria-label={field.label}
                rows={field.key === "body" ? 6 : 3}
                value={draft[field.key] || ""}
                maxLength={field.max}
                required={field.key !== "body"}
                onChange={(event) =>
                  setDraft((prev) => ({
                    ...prev,
                    [field.key]: event.target.value,
                  }))
                }
              />
            ) : (
              <input
                aria-label={field.label}
                value={draft[field.key] || ""}
                maxLength={field.max}
                required
                onChange={(event) =>
                  setDraft((prev) => ({
                    ...prev,
                    [field.key]: event.target.value,
                  }))
                }
              />
            )}
            <small aria-hidden="true">
              {(draft[field.key] || "").length}/{field.max}
            </small>
          </label>
        ))}
        <button className="primary" disabled={disabled}>
          Guardar página y versión
        </button>
      </form>
      {error && (
        <p role="alert" className="error">
          {error}
        </p>
      )}
      <p className="hint">
        Guarda antes de cambiar de página o herramienta. La descripción SEO
        exportada usa sus primeros 155 caracteres.
      </p>
    </div>
  );
}
