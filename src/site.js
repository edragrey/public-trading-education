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

// Simple loss-at-stop calculator: position size x stop distance.
document.querySelectorAll('[data-calc="stop-loss"]').forEach((box) => {
  const size = box.querySelector('[data-in="size"]'), stop = box.querySelector('[data-in="stop"]'), out = box.querySelector('[data-out="loss"]');
  const update = () => {
    const loss = Math.max(0, Number(size.value) || 0) * Math.min(100, Math.max(0, Number(stop.value) || 0)) / 100;
    out.textContent = "$" + (loss >= 100 ? Math.round(loss).toLocaleString("en-US") : loss.toFixed(2).replace(/\.00$/, ""));
  };
  [size, stop].forEach((i) => i.addEventListener("input", update));
  update();
});

// Shared helpers for the small lesson calculators below.
const calcMoney = (n) => "$" + (Math.abs(n) >= 100 ? Math.round(n).toLocaleString("en-US") : n.toFixed(2).replace(/\.00$/, ""));
const calcPct = (n) => (Math.abs(n) >= 10 ? Math.round(n) : Math.round(n * 10) / 10) + "%";
const calcBind = (box, update) => { box.querySelectorAll("input").forEach((i) => i.addEventListener("input", update)); update(); };
const calcIo = (box) => [(k) => Number(box.querySelector(`[data-in="${k}"]`).value) || 0, (k) => box.querySelector(`[data-out="${k}"]`)];

// Risk amount: account x risk %, plus how many losses in a row halve the account.
document.querySelectorAll('[data-calc="risk-amount"]').forEach((box) => {
  const [val, out] = calcIo(box);
  calcBind(box, () => {
    const account = Math.max(0, val("account"));
    const risk = Math.min(100, Math.max(0.1, val("risk"))) / 100;
    out("loss").textContent = calcMoney(account * risk);
    out("streak").textContent = risk >= 0.5 ? "1" : String(Math.ceil(Math.log(0.5) / Math.log(1 - risk)));
  });
});

// Position size from entry and stop prices.
document.querySelectorAll('[data-calc="position-size"]').forEach((box) => {
  const [val, out] = calcIo(box);
  calcBind(box, () => {
    const account = Math.max(0, val("account"));
    const risk = Math.min(100, Math.max(0, val("risk"))) / 100;
    const entry = Math.max(0, val("entry")), stop = Math.max(0, val("stop"));
    const loss = account * risk;
    const v = out("verdict");
    out("loss").textContent = calcMoney(loss);
    if (!entry || stop >= entry) {
      out("dist").textContent = "–"; out("size").textContent = "–"; out("units").textContent = "–";
      v.textContent = "For a buy, the stop has to be below the price you buy at."; v.dataset.tone = "bad";
      return;
    }
    const dist = (entry - stop) / entry;
    const size = loss / dist;
    out("dist").textContent = calcPct(dist * 100);
    out("size").textContent = calcMoney(size);
    const units = size / entry;
    out("units").textContent = units >= 10 ? Math.round(units).toLocaleString("en-US") : String(Math.round(units * 100) / 100);
    if (size > account) { v.textContent = "That's bigger than your whole account. Take a smaller position or skip the trade."; v.dataset.tone = "bad"; }
    else { v.textContent = "If the stop is hit, you lose about " + calcMoney(loss) + " plus fees."; v.dataset.tone = "good"; }
  });
});

// Reward to risk and the break-even win rate.
document.querySelectorAll('[data-calc="rr"]').forEach((box) => {
  const [val, out] = calcIo(box);
  calcBind(box, () => {
    const entry = val("entry"), stop = val("stop"), target = val("target");
    const v = out("verdict");
    if (!(stop < entry && target > entry)) {
      out("rr").textContent = "–"; out("be").textContent = "–";
      v.textContent = "For a buy, the stop goes below your entry and the target above it."; v.dataset.tone = "bad";
      return;
    }
    const rr = (target - entry) / (entry - stop);
    out("rr").textContent = (Math.round(rr * 10) / 10) + ":1";
    out("be").textContent = Math.round(100 / (1 + rr)) + "%";
    if (rr < 1) { v.textContent = "You stand to lose more than you'd make. You'd need to be right more often than not."; v.dataset.tone = "warn"; }
    else if (rr > 5) { v.textContent = "A big ratio on paper. Ask honestly whether the price is likely to reach that target."; v.dataset.tone = "warn"; }
    else { v.textContent = "Now ask: is the target somewhere the price could realistically reach?"; v.dataset.tone = "good"; }
  });
});

// Expectancy: average result per trade from win rate, average win and average loss.
document.querySelectorAll('[data-calc="expectancy"]').forEach((box) => {
  const [val, out] = calcIo(box);
  const signed = (n) => (n < 0 ? "−" : "") + calcMoney(Math.abs(n));
  calcBind(box, () => {
    const w = Math.min(100, Math.max(0, val("win"))) / 100;
    const e = w * Math.max(0, val("avgwin")) - (1 - w) * Math.max(0, val("avgloss"));
    out("exp").textContent = signed(e);
    out("hundred").textContent = signed(e * 100);
    const v = out("verdict");
    if (e < 0) { v.textContent = "Negative: on average, every trade loses money, however often it wins."; v.dataset.tone = "bad"; }
    else if (e === 0) { v.textContent = "Break even before fees. After fees, this loses money."; v.dataset.tone = "warn"; }
    else { v.textContent = "Positive, before fees. It only means something after many trades, honestly recorded."; v.dataset.tone = "good"; }
  });
});

// Losing streak: drawdown after N losses at a fixed % of what's left, and the gain needed to recover.
document.querySelectorAll('[data-calc="streak"]').forEach((box) => {
  const [val, out] = calcIo(box);
  calcBind(box, () => {
    const r = Math.min(50, Math.max(0.1, val("risk"))) / 100;
    const n = Math.min(50, Math.max(1, Math.round(val("n"))));
    const left = Math.pow(1 - r, n);
    out("dd").textContent = calcPct((1 - left) * 100);
    out("back").textContent = calcPct((1 / left - 1) * 100);
  });
});

// Risk simulator: what a win rate, reward-to-risk and risk % imply over many trades (averages, not a forecast).
document.querySelectorAll('[data-calc="risk-sim"]').forEach((box) => {
  const [val, out] = calcIo(box);
  calcBind(box, () => {
    const p = Math.min(99, Math.max(1, val("win"))) / 100;
    const rr = Math.max(0.1, val("rr"));
    const r = Math.min(20, Math.max(0.1, val("risk"))) / 100;
    const n = Math.min(1000, Math.max(1, Math.round(val("n"))));
    const e = p * rr - (1 - p);
    out("exp").textContent = (e >= 0 ? "+" : "-") + Math.abs(e).toFixed(2) + "R";
    const growth = Math.pow(1 + e * r, n);
    out("avg").textContent = (growth >= 1 ? "+" : "-") + calcPct(Math.abs(growth - 1) * 100);
    out("streak").textContent = String(Math.max(1, Math.round(Math.log(n) / Math.log(1 / (1 - p)))));
  });
});

// Fees over a month of round trips.
document.querySelectorAll('[data-calc="fees"]').forEach((box) => {
  const [val, out] = calcIo(box);
  calcBind(box, () => {
    const month = Math.max(0, val("size")) * Math.max(0, val("fee")) / 100 * 2 * Math.max(0, Math.round(val("n")));
    out("month").textContent = calcMoney(month);
    out("pct").textContent = calcPct(month / Math.max(1, val("account")) * 100);
  });
});

// Market cap and fully diluted value from price and supply.
document.querySelectorAll('[data-calc="market-cap"]').forEach((box) => {
  const [val, out] = calcIo(box);
  const big = (n) => {
    const units = [[1e12, " trillion"], [1e9, " billion"], [1e6, " million"]];
    for (const [d, w] of units) if (n >= d) { const x = n / d; return "$" + (x >= 100 ? Math.round(x) : Math.round(x * 10) / 10) + w; }
    return calcMoney(n);
  };
  calcBind(box, () => {
    const price = Math.max(0, val("price")), circ = Math.max(0, val("circ"));
    const max = Math.max(circ, val("max"));
    out("mcap").textContent = big(price * circ);
    out("fdv").textContent = big(price * max);
    out("locked").textContent = max ? calcPct((1 - circ / max) * 100) : "0%";
  });
});

// Quick-check questions: tap an answer, see if it's right and why.
document.querySelectorAll(".quiz").forEach((q) => {
  const why = q.querySelector(".quiz-why");
  q.querySelectorAll("button[data-opt]").forEach((b) => b.addEventListener("click", () => {
    const right = b.dataset.opt === q.dataset.answer;
    q.querySelectorAll("button[data-opt]").forEach((x) => { x.classList.remove("is-right", "is-wrong"); x.removeAttribute("aria-pressed"); });
    b.classList.add(right ? "is-right" : "is-wrong");
    b.setAttribute("aria-pressed", "true");
    if (!right) q.querySelector(`[data-opt="${q.dataset.answer}"]`)?.classList.add("is-right");
    q.dataset.state = right ? "right" : "wrong";
    if (why) { why.hidden = false; why.dataset.lead = right ? "Right." : "Not quite."; }
  }));
});

// Step-by-step pages: show one screen at a time with Back / Next and a progress bar.
document.querySelectorAll("[data-walk]").forEach((w) => {
  const screens = [...w.querySelectorAll(".wstep")];
  const done = w.querySelector(".walk-done");
  const back = w.querySelector("[data-walk-back]"), next = w.querySelector("[data-walk-next]");
  const iOut = w.querySelector("[data-walk-i]"), bar = w.querySelector("[data-walk-bar]");
  const n = screens.length;
  const fromHash = () => { const m = location.hash.match(/^#step-(\d+)$/); return m ? Math.min(n, Math.max(1, +m[1])) - 1 : 0; };
  let i = fromHash();
  w.classList.add("is-on");
  const show = (k, scroll) => {
    i = k;
    screens.forEach((s, j) => { s.hidden = j !== i; });
    const last = i === n - 1;
    if (done) done.hidden = !last;
    back.disabled = i === 0;
    next.hidden = last;
    iOut.textContent = i + 1;
    bar.style.width = ((i + 1) / n) * 100 + "%";
    try { history.replaceState(null, "", i ? `#step-${i + 1}` : location.pathname); } catch (e) {}
    if (scroll) w.scrollIntoView({ block: "start", behavior: "smooth" });
  };
  back.addEventListener("click", () => i > 0 && show(i - 1, true));
  next.addEventListener("click", () => i < n - 1 && show(i + 1, true));
  show(i, false);
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

// Lesson completion: deliberately local-only so the public site needs no account or backend.
const COMPLETED_KEY = "tb-course-completed-v1";
const completedLessons = () => {
  try {
    const value = JSON.parse(localStorage.getItem(COMPLETED_KEY) || "[]");
    return new Set(Array.isArray(value) ? value.filter((x) => typeof x === "string") : []);
  } catch (e) {
    return new Set();
  }
};
const saveCompleted = (done) => {
  try { localStorage.setItem(COMPLETED_KEY, JSON.stringify([...done])); } catch (e) {}
};
const updateCompletionUi = () => {
  const done = completedLessons();
  document.querySelectorAll("[data-lesson-done]").forEach((button) => {
    const slug = button.dataset.lessonSlug;
    const complete = slug ? done.has(slug) : false;
    button.classList.toggle("is-complete", complete);
    button.setAttribute("aria-pressed", complete ? "true" : "false");
    const label = button.querySelector(".completion-label, .check-label");
    if (label) label.textContent = button.hasAttribute("data-lesson-check") ? (complete ? "Done" : "Mark done") : (complete ? "Lesson complete" : "Mark lesson complete");
    const row = button.closest("[data-lesson-row]");
    if (row) row.classList.toggle("is-complete", complete);
  });

  document.querySelectorAll("[data-course-progress]").forEach((box) => {
    const rows = [...document.querySelectorAll("[data-course-lesson]")];
    const total = Number(box.dataset.total) || rows.length;
    const count = rows.filter((row) => done.has(row.dataset.lessonSlug)).length;
    const label = box.querySelector("[data-course-progress-label]");
    const bar = box.querySelector("[data-course-progress-bar]");
    if (label) label.textContent = `${count} of ${total} lessons complete`;
    if (bar) bar.style.width = `${total ? (count / total) * 100 : 0}%`;
  });

  document.querySelectorAll("[data-module-progress]").forEach((box) => {
    const module = box.dataset.module;
    const rows = [...document.querySelectorAll(`[data-course-lesson][data-module="${module}"]`)];
    const total = Number(box.dataset.total) || rows.length;
    const count = rows.filter((row) => done.has(row.dataset.lessonSlug)).length;
    const label = box.querySelector("[data-module-progress-label]");
    const bar = box.querySelector("[data-module-progress-bar]");
    if (label) label.textContent = `${count} of ${total} complete`;
    if (bar) bar.style.width = `${total ? (count / total) * 100 : 0}%`;
  });
};

document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-lesson-done]");
  if (button) {
    event.preventDefault();
    event.stopPropagation();
    const slug = button.dataset.lessonSlug;
    if (!slug) return;
    const done = completedLessons();
    if (done.has(slug)) done.delete(slug); else done.add(slug);
    saveCompleted(done);
    updateCompletionUi();
    return;
  }
  const reset = event.target.closest("[data-reset-progress]");
  if (reset) {
    if (window.confirm("Reset all lesson progress on this device?")) {
      try { localStorage.removeItem(COMPLETED_KEY); } catch (e) {}
      updateCompletionUi();
    }
  }
});

updateCompletionUi();
