const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".primary-nav");
toggle?.addEventListener("click", () => {
  const open = toggle.getAttribute("aria-expanded") !== "true";
  toggle.setAttribute("aria-expanded", String(open));
  nav.classList.toggle("is-open", open);
});
document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    toggle?.getAttribute("aria-expanded") === "true"
  ) {
    toggle.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
    toggle.focus();
  }
});

const dialog = document.querySelector(".booking-dialog");
const form = document.querySelector("#booking-form");
const result = document.querySelector("#booking-result");
const dateInput = form.elements.date;
const now = new Date();
const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
dateInput.min = today;
dateInput.value = today;
let bookingTrigger;

function resetBooking() {
  form.hidden = false;
  result.hidden = true;
  form.reset();
  dateInput.value = today;
}
document.querySelectorAll("[data-book]").forEach((button) =>
  button.addEventListener("click", () => {
    bookingTrigger = button;
    resetBooking();
    nav.classList.remove("is-open");
    toggle?.setAttribute("aria-expanded", "false");
    dialog.showModal();
  }),
);
document
  .querySelector("[data-close]")
  .addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  if (event.target !== dialog) return;
  const rect = dialog.getBoundingClientRect();
  if (
    event.clientX < rect.left ||
    event.clientX > rect.right ||
    event.clientY < rect.top ||
    event.clientY > rect.bottom
  )
    dialog.close();
});
dialog.addEventListener("close", () => bookingTrigger?.focus());
document.querySelector("[data-booking-reset]").addEventListener("click", () => {
  resetBooking();
  dateInput.focus();
});
form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const [year, month, day] = dateInput.value.split("-").map(Number);
  const date = new Intl.DateTimeFormat("es", {
    weekday: "long",
    day: "numeric",
    month: "long",
  }).format(new Date(year, month - 1, day));
  const guests = Number(form.elements.guests.value);
  document.querySelector(".reservation-summary").textContent =
    `${guests} ${guests === 1 ? "persona" : "personas"} · ${date} · ${form.elements.time.value}`;
  form.hidden = true;
  result.hidden = false;
  result.focus();
});

document.querySelectorAll("[data-filter]").forEach((button) =>
  button.addEventListener("click", () => {
    document
      .querySelectorAll("[data-filter]")
      .forEach((filter) =>
        filter.setAttribute("aria-pressed", String(filter === button)),
      );
    document.querySelectorAll("[data-category]").forEach((category) => {
      category.hidden =
        button.dataset.filter !== "all" &&
        button.dataset.filter !== category.dataset.category;
    });
  }),
);
