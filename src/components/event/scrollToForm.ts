export function scrollToForm(format?: string) {
  if (format) {
    window.dispatchEvent(new CustomEvent("preset-format", { detail: format }));
  }
  const el = document.getElementById("lead-form");
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}
