// Loss -> gain-needed calculator used in lessons.
document.querySelectorAll('[data-calc="loss-gain"]').forEach((box) => {
  const input = box.querySelector("input");
  const out = box.querySelector("[data-out]");
  const update = () => {
    const loss = Math.min(99, Math.max(1, Number(input.value) || 0)) / 100;
    out.textContent = Math.round((loss / (1 - loss)) * 100) + "%";
  };
  input.addEventListener("input", update);
  update();
});

// Glossary search: hide cards that don't match.
const gSearch = document.querySelector("[data-glossary-search]");
if (gSearch) {
  const cards = [...document.querySelectorAll(".g-card")];
  const none = document.querySelector(".g-none");
  gSearch.addEventListener("input", () => {
    const q = gSearch.value.trim().toLowerCase();
    let shown = 0;
    for (const c of cards) {
      const hit = !q || c.textContent.toLowerCase().includes(q);
      c.hidden = !hit;
      if (hit) shown++;
    }
    if (none) none.hidden = shown > 0;
  });
}
