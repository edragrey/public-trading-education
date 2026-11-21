// Theme switch: Light, Dark, or Match device. The choice is saved in localStorage "tb-theme".
(() => {
  const root = document.documentElement;
  const media = matchMedia("(prefers-color-scheme: dark)");
  const saved = () => { try { return localStorage.getItem("tb-theme") || "auto"; } catch { return "auto"; } };
  const isDark = (choice) => choice === "dark" || (choice === "auto" && media.matches);

  function apply(choice) {
    if (choice === "auto") delete root.dataset.theme; else root.dataset.theme = choice;
    const dark = isDark(choice);
    // Phone browser bar colour follows the chosen theme, not only the device.
    document.querySelectorAll("meta[data-tc]").forEach((m) => {
      if (choice === "auto") m.media = `(prefers-color-scheme: ${m.dataset.tc})`;
      else m.media = m.dataset.tc === (dark ? "dark" : "light") ? "all" : "not all";
    });
    const btn = document.querySelector("[data-theme-toggle]");
    if (btn) btn.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
    document.querySelectorAll("[data-theme-pick] button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.set === choice)));
  }
  function choose(choice) {
    try { if (choice === "auto") localStorage.removeItem("tb-theme"); else localStorage.setItem("tb-theme", choice); } catch {}
    apply(choice);
  }

  document.querySelector("[data-theme-toggle]")?.addEventListener("click", () => choose(isDark(saved()) ? "light" : "dark"));
  document.querySelectorAll("[data-theme-pick] button").forEach((b) => b.addEventListener("click", () => choose(b.dataset.set)));
  media.addEventListener("change", () => { if (saved() === "auto") apply("auto"); });
  apply(saved());
})();
