"use client";
import type { Brief } from "../lib/schema";
import { designs } from "../lib/design";
type Props = {
  brief: Brief;
  onChange: (brief: Brief) => void;
  compact?: boolean;
};
export function BriefForm({ brief, onChange, compact = false }: Props) {
  const update = (key: keyof Brief, value: string) =>
    onChange({ ...brief, [key]: value });
  const field = (
    key: keyof Brief,
    label: string,
    maxLength: number,
    multiline = false,
    placeholder = "",
  ) => (
    <label className="field" key={key}>
      {label}
      {multiline ? (
        <textarea
          rows={key === "services" ? 5 : 3}
          maxLength={maxLength}
          value={brief[key]}
          onChange={(e) => update(key, e.target.value)}
          placeholder={placeholder}
        />
      ) : (
        <input
          maxLength={maxLength}
          value={brief[key]}
          onChange={(e) => update(key, e.target.value)}
          placeholder={placeholder}
          type={key === "siteUrl" || key === "formEndpoint" ? "url" : "text"}
        />
      )}
    </label>
  );
  return (
    <div className={compact ? "brief-fields compact" : "brief-fields"}>
      <div className="field-pair">
        {field("name", "Nombre del negocio", 100, false, "El nombre real")}
        {field("city", "Ciudad", 100, false, "Lisboa")}
      </div>
      {field("sector", "Sector", 100, false, "Barbería, restaurante, estudio…")}
      {field(
        "description",
        "Qué ofrece y qué lo hace diferente",
        600,
        true,
        "Describe algo concreto que conozcas del negocio.",
      )}
      {field(
        "contact",
        "Correo o teléfono",
        200,
        false,
        "Contacto real del negocio",
      )}
      <label className="field">
        Dirección visual
        <select
          value={brief.style}
          onChange={(e) => update("style", e.target.value)}
        >
          {Object.entries(designs).map(([key, d]) => (
            <option key={key} value={key}>
              {d.name}
            </option>
          ))}
        </select>
      </label>
      <details className="more-fields">
        <summary>Servicios, historia y datos de visita</summary>
        {field(
          "services",
          "Carta o servicios · una línea por concepto",
          2500,
          true,
          "Nombre | precio confirmado | descripción opcional",
        )}
        <p className="hint">
          Solo publicaremos lo que escribas. Puedes dejar el precio vacío.
        </p>
        {field("story", "Historia del negocio", 1500, true)}
        {field("address", "Dirección", 250)}
        {field("hours", "Horario confirmado", 300, true)}
      </details>
      <details className="more-fields">
        <summary>Dominio y formulario</summary>
        {field(
          "siteUrl",
          "URL final de la web (HTTPS)",
          500,
          false,
          "https://tu-dominio.com",
        )}
        <p className="hint">
          Se usa para canonical y sitemap; no registra ni conecta el dominio.
        </p>
        {field(
          "formEndpoint",
          "Servicio de recepción de formularios (opcional)",
          500,
          false,
          "https://…",
        )}
        <p className="hint">
          Debe estar preparado para recibir POST con name, email, message y
          consent. Comprueba entrega y privacidad. Sin servicio, el contacto usa
          correo o teléfono.
        </p>
      </details>
    </div>
  );
}
