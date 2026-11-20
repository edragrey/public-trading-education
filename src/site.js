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

// Position size + liquidation check used in the liquidation lesson.
document.querySelectorAll('[data-calc="liq-size"]').forEach((box) => {
  const val = (k) => Number(box.querySelector(`[data-in="${k}"]`).value) || 0;
  const out = (k) => box.querySelector(`[data-out="${k}"]`);
  const money = (n) => "$" + (n >= 100 ? Math.round(n).toLocaleString("en-US") : n.toFixed(2).replace(/\.00$/, ""));
  const update = () => {
    const account = Math.max(0, val("account"));
    const risk = Math.min(100, Math.max(0, val("risk"))) / 100;
    const stop = Math.min(99, Math.max(0.1, val("stop"))) / 100;
    const lev = Math.min(200, Math.max(1, val("lev")));
    const loss = account * risk;
    const size = loss / stop;
    const margin = size / lev;
    const liq = 1 / lev;
    out("loss").textContent = money(loss);
    out("size").textContent = money(size);
    out("margin").textContent = money(margin);
    out("liq").textContent = (liq * 100 >= 10 ? Math.round(liq * 100) : Math.round(liq * 1000) / 10) + "%";
    const v = out("verdict");
    if (margin > account) { v.textContent = "You don't have enough money for this margin. Use a smaller position."; v.dataset.tone = "bad"; }
    else if (liq <= stop) { v.textContent = "Liquidation comes before your stop. Lower the leverage."; v.dataset.tone = "bad"; }
    else if (liq < stop * 2) { v.textContent = "Your stop comes first, but only just. Real liquidation sits a little closer, so leave more room."; v.dataset.tone = "warn"; }
    else { v.textContent = "Your stop comes first, with room to spare."; v.dataset.tone = "good"; }
  };
  box.querySelectorAll("input").forEach((i) => i.addEventListener("input", update));
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
