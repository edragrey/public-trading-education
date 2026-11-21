// Design previews: pick a look from the strip at the top, or open a link with ?look=harbor|studio|newsprint|current.
// The choice is saved in localStorage "tb-look". Only included on preview builds.
(() => {
  const root = document.documentElement;
  function apply(look) {
    if (!look || look === "current") delete root.dataset.look; else root.dataset.look = look;
    document.querySelectorAll("[data-look-pick] button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.look === (look || "current"))));
  }
  function choose(look) {
    try { if (look === "current") localStorage.removeItem("tb-look"); else localStorage.setItem("tb-look", look); } catch {}
    apply(look);
  }
  document.querySelectorAll("[data-look-pick] button").forEach((b) => b.addEventListener("click", () => choose(b.dataset.look)));
  apply(root.dataset.look || "current");
})();
