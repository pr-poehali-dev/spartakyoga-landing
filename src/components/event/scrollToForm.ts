export function scrollToForm() {
  const el = document.getElementById("lead-form");
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}