/* KATA WEBs demo interactions. Local-only: no network, no storage, no payments. */
(() => {
  const form = document.querySelector("form[data-demo]");
  if (!form) return;
  const kind = form.dataset.demo;
  const params = new URLSearchParams(location.search);
  const pad = n => String(n).padStart(2,"0");
  const d = new Date();
  const minDate = [d.getFullYear(),pad(d.getMonth()+1),pad(d.getDate())].join("-");
  form.querySelectorAll('input[type="date"]').forEach(input => input.min = minDate);
  const values = {
    work: ["Fuga de agua","Desatasco","Termo","Instalación","Otra reparación"],
    care: ["Revisión","Higiene","Ortodoncia","Molestias"],
    cut: ["Corte","Barba","Combo","Repaso"]
  };
  const query = params.get("servicio") || params.get("motivo");
  if(query && values[kind]?.includes(query)) {
    if(kind === "work") form.querySelector("#work-service").value = query;
    if(kind === "care") form.querySelector("#care-kind").value = query;
    if(kind === "cut") {
      const option = [...form.querySelectorAll('[name="cut-kind"]')].find(i => i.value === query);
      if(option) option.checked = true;
    }
  }
  const selected = name => form.querySelector('input[name="'+name+'"]:checked')?.value || "";
  const val = id => form.querySelector("#"+id)?.value || "";
  const result = form.parentElement.querySelector(".form-result");
  function show(title, details, explanation) {
    result.replaceChildren();
    const heading = document.createElement("strong");
    heading.textContent = title;
    const paragraph = document.createElement("p");
    paragraph.textContent = details;
    const note = document.createElement("small");
    note.textContent = explanation;
    result.append(heading,paragraph,note);
    result.hidden = false;
    result.scrollIntoView({behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"instant":"smooth",block:"nearest"});
  }
  form.addEventListener("submit",e => {
    e.preventDefault();
    if (!form.reportValidity()) return;
    if(kind === "food") {
      show("Mesa de ejemplo",
        val("food-personas")+" · "+val("food-date")+" · "+val("food-hour"),
        "La Milpa es ficticia. No se ha solicitado una reserva ni transmitido información.");
    } else if(kind === "work") {
      const file = form.querySelector("#work-photo")?.files?.[0];
      const lines = [
        "Trabajo: " + val("work-service"),
        "Zona de ejemplo: " + val("work-area"),
        "Prioridad: " + val("work-urgency"),
        "Descripción: " + val("work-details").trim(),
        "Foto: " + (file ? file.name+" (solo en este navegador)" : "Sin fotografía")
      ];
      show("Resumen de consulta simulada", lines.join("\n"),
        "FIRME no es una empresa operativa. No se han enviado archivos ni datos.");
    } else if(kind === "care") {
      show("Selección de primera visita",
        val("care-kind")+" · "+val("care-date")+" · "+selected("care-hour"),
        "SOMA es ficticia. No existe una reserva ni se han transmitido datos.");
    } else if(kind === "cut") {
      show("Tu turno de muestra",
        selected("cut-kind")+" · "+selected("cut-chair")+" · "+val("cut-date")+" · "+selected("cut-hour"),
        "FILO es ficticia. Este horario no representa disponibilidad y no se ha realizado reserva ni pago.");
    }
  });
})();