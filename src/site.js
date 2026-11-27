// Language of the page (set by the build): English at /..., Spanish at /es/...
const ES = document.documentElement.lang === "es";
const LOC = ES ? "es-ES" : "en-US";
const t = (en, es) => (ES ? es : en);

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
  const money = (n) => "$" + (n >= 100 ? Math.round(n).toLocaleString(LOC) : n.toFixed(2).replace(/\.00$/, ""));
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
    if (margin > account) { v.textContent = t("You don't have enough money for this margin. Use a smaller position.","No tienes dinero suficiente para este margen. Usa una posición más pequeña."); v.dataset.tone = "bad"; }
    else if (liq <= stop) { v.textContent = t("Liquidation comes before your stop. Lower the leverage.","La liquidación llega antes que tu stop. Baja el apalancamiento."); v.dataset.tone = "bad"; }
    else if (liq < stop * 2) { v.textContent = t("Your stop comes first, but only just. Real liquidation sits a little closer, so leave more room.","Tu stop salta primero, pero por poco. La liquidación real queda un poco más cerca, así que deja más margen."); v.dataset.tone = "warn"; }
    else { v.textContent = t("Your stop comes first, with room to spare.","Tu stop salta primero, con margen de sobra."); v.dataset.tone = "good"; }
  };
  box.querySelectorAll("input").forEach((i) => i.addEventListener("input", update));
  update();
});

// Simple loss-at-stop calculator: position size x stop distance.
document.querySelectorAll('[data-calc="stop-loss"]').forEach((box) => {
  const size = box.querySelector('[data-in="size"]'), stop = box.querySelector('[data-in="stop"]'), out = box.querySelector('[data-out="loss"]');
  const update = () => {
    const loss = Math.max(0, Number(size.value) || 0) * Math.min(100, Math.max(0, Number(stop.value) || 0)) / 100;
    out.textContent = "$" + (loss >= 100 ? Math.round(loss).toLocaleString(LOC) : loss.toFixed(2).replace(/\.00$/, ""));
  };
  [size, stop].forEach((i) => i.addEventListener("input", update));
  update();
});

// Shared helpers for the small lesson calculators below.
const calcMoney = (n) => "$" + (Math.abs(n) >= 100 ? Math.round(n).toLocaleString(LOC) : n.toFixed(2).replace(/\.00$/, ""));
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
      v.textContent = t("For a buy, the stop has to be below the price you buy at.","En una compra, el stop tiene que estar por debajo del precio al que compras."); v.dataset.tone = "bad";
      return;
    }
    const dist = (entry - stop) / entry;
    const size = loss / dist;
    out("dist").textContent = calcPct(dist * 100);
    out("size").textContent = calcMoney(size);
    const units = size / entry;
    out("units").textContent = units >= 10 ? Math.round(units).toLocaleString(LOC) : String(Math.round(units * 100) / 100);
    if (size > account) { v.textContent = t("That's bigger than your whole account. Take a smaller position or skip the trade.","Eso es más grande que toda tu cuenta. Toma una posición menor o sáltate la operación."); v.dataset.tone = "bad"; }
    else { v.textContent = t("If the stop is hit, you lose about ","Si salta el stop, pierdes unos ") + calcMoney(loss) + t(" plus fees."," más comisiones."); v.dataset.tone = "good"; }
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
      v.textContent = t("For a buy, the stop goes below your entry and the target above it.","En una compra, el stop va por debajo de tu entrada y el objetivo por encima."); v.dataset.tone = "bad";
      return;
    }
    const rr = (target - entry) / (entry - stop);
    out("rr").textContent = (Math.round(rr * 10) / 10) + ":1";
    out("be").textContent = Math.round(100 / (1 + rr)) + "%";
    if (rr < 1) { v.textContent = t("You stand to lose more than you'd make. You'd need to be right more often than not.","Arriesgas más de lo que ganarías. Tendrías que acertar más veces de las que fallas."); v.dataset.tone = "warn"; }
    else if (rr > 5) { v.textContent = t("A big ratio on paper. Ask honestly whether the price is likely to reach that target.","Una ratio grande sobre el papel. Pregúntate con honestidad si el precio puede llegar a ese objetivo."); v.dataset.tone = "warn"; }
    else { v.textContent = t("Now ask: is the target somewhere the price could realistically reach?","Ahora pregúntate: ¿puede el precio llegar de forma realista a ese objetivo?"); v.dataset.tone = "good"; }
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
    if (e < 0) { v.textContent = t("Negative: on average, every trade loses money, however often it wins.","Negativa: de media, cada operación pierde dinero, por mucho que acierte."); v.dataset.tone = "bad"; }
    else if (e === 0) { v.textContent = t("Break even before fees. After fees, this loses money.","Empate antes de comisiones. Con comisiones, pierde dinero."); v.dataset.tone = "warn"; }
    else { v.textContent = t("Positive, before fees. It only means something after many trades, honestly recorded.","Positiva, antes de comisiones. Solo significa algo tras muchas operaciones anotadas con honestidad."); v.dataset.tone = "good"; }
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

// Percent change, and the gain needed to get back to the starting price.
document.querySelectorAll('[data-calc="pct-change"]').forEach((box) => {
  const [val, out] = calcIo(box);
  const signed = (n) => (n < 0 ? "−" : "+") + calcPct(Math.abs(n));
  calcBind(box, () => {
    const a = Math.max(0, val("from")), b = Math.max(0, val("to"));
    const v = out("verdict");
    if (!a) { out("chg").textContent = "–"; out("back").textContent = "–"; v.textContent = t("Enter a starting price above zero.","Introduce un precio inicial mayor que cero."); v.dataset.tone = "warn"; return; }
    const chg = (b - a) / a * 100;
    out("chg").textContent = signed(chg);
    out("back").textContent = b ? signed((a - b) / b * 100) : "–";
    if (chg < 0) { v.textContent = t("A loss needs a bigger gain to undo, because the gain starts from a smaller number.","Una pérdida necesita una ganancia mayor para deshacerse, porque la ganancia parte de un número menor."); v.dataset.tone = "warn"; }
    else if (chg > 0) { v.textContent = t("Going back down by the same dollar amount would be a smaller percentage drop.","Volver a bajar la misma cantidad en dólares sería una caída porcentual menor."); v.dataset.tone = "good"; }
    else { v.textContent = t("No change.","Sin cambios."); v.dataset.tone = "warn"; }
  });
});

// Compounding: the same rate each period, with and without growth on growth. Made-up rate, not a forecast.
document.querySelectorAll('[data-calc="compound"]').forEach((box) => {
  const [val, out] = calcIo(box);
  calcBind(box, () => {
    const s = Math.max(0, val("start")), r = Math.min(100, Math.max(-99, val("rate"))) / 100;
    const n = Math.min(600, Math.max(1, Math.round(val("n"))));
    const end = s * Math.pow(1 + r, n), simple = s * (1 + r * n);
    out("end").textContent = calcMoney(Math.max(0, end));
    out("simple").textContent = calcMoney(Math.max(0, simple));
    const v = out("verdict");
    if (r < 0) { v.textContent = t("Losses compound too: each one applies to a smaller amount, so the drop slows but never reaches zero.","Las pérdidas también se componen: cada una se aplica a una cantidad menor, así que la caída se frena pero nunca llega a cero."); v.dataset.tone = "warn"; }
    else { v.textContent = t("A made-up steady rate. Real markets never move in a straight line, so treat this as a picture, not a forecast.","Una tasa constante inventada. Los mercados reales nunca se mueven en línea recta, así que tómalo como una imagen, no como una previsión."); v.dataset.tone = "good"; }
  });
});

// Round-trip fees and the break-even price for one trade.
document.querySelectorAll('[data-calc="breakeven"]').forEach((box) => {
  const [val, out] = calcIo(box);
  calcBind(box, () => {
    const entry = Math.max(0, val("entry")), size = Math.max(0, val("size")), fee = Math.min(10, Math.max(0, val("fee"))) / 100;
    const v = out("verdict");
    const cost = size * fee * 2;
    out("cost").textContent = calcMoney(cost);
    out("bepct").textContent = (Math.round(fee * 2 * 10000) / 100) + "%";
    out("be").textContent = entry ? "$" + (entry * (1 + fee * 2)).toLocaleString(LOC, { maximumFractionDigits: 6 }) : "–";
    v.textContent = t("Fees are paid in and out, so the price has to move this much before you are even.","Las comisiones se pagan al entrar y al salir, así que el precio tiene que moverse esto antes de que estés en tablas."); v.dataset.tone = "warn";
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
    recordQuiz(q, right);
    if (why) { why.hidden = false; why.dataset.lead = right ? t("Right.","Correcto.") : t("Not quite.","No exactamente."); }
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

// Glossary search, review filters and personal understanding live in concept-progress.js.

// Course progress: lessons marked complete and first answers to quick questions.
// Saved in this browser, and in the reader's account when they're signed in (see /account/).
const COMPLETED_KEY = "tb-course-completed-v1";
const QUIZ_KEY = "tb-quiz-v1";
const SYNCED_KEY = "tb-synced-user"; // which account this browser's progress was last merged into
const readLocal = (key, fallback) => { try { return JSON.parse(localStorage.getItem(key) || "null") ?? fallback; } catch (e) { return fallback; } };
const writeLocal = (key, value) => { try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) {} };
const dropLocal = (...keys) => { try { keys.forEach((k) => localStorage.removeItem(k)); } catch (e) {} };

const completedLessons = () => {
  const value = readLocal(COMPLETED_KEY, []);
  return new Set(Array.isArray(value) ? value.filter((x) => typeof x === "string") : []);
};
const quizAnswers = () => {
  const value = readLocal(QUIZ_KEY, {});
  return value && typeof value === "object" && !Array.isArray(value) ? value : {};
};

let account = null; // { enabled, signedIn, email, ... } from /api/me/
const signedIn = () => Boolean(account?.signedIn);
const api = (url, opts = {}) => fetch(url, { credentials: "same-origin", headers: { "content-type": "application/json" }, ...opts })
  .then(async (r) => ({ ok: r.ok, status: r.status, data: await r.json().catch(() => ({})) }));

let pushTimer;
const pushProgress = () => {
  if (!signedIn()) return;
  clearTimeout(pushTimer);
  pushTimer = setTimeout(() => {
    api("/api/progress/", { method: "PUT", body: JSON.stringify({ completed: [...completedLessons()], quizzes: quizAnswers() }) })
      .then((r) => { if (r.status === 401) location.reload(); });
  }, 300);
};

const saveCompleted = (done) => { writeLocal(COMPLETED_KEY, [...done]); pushProgress(); };

function recordQuiz(q, right) {
  if (!/^\/course\//.test(location.pathname)) return;
  const n = [...document.querySelectorAll(".quiz")].indexOf(q);
  const key = `${location.pathname}#${n}`;
  const answers = quizAnswers();
  if (key in answers) return; // keep the first try
  answers[key] = right ? 1 : 0;
  writeLocal(QUIZ_KEY, answers);
  pushProgress();
}

const updateCompletionUi = () => {
  const done = completedLessons();
  document.querySelectorAll("[data-lesson-done]").forEach((button) => {
    const slug = button.dataset.lessonSlug;
    const complete = slug ? done.has(slug) : false;
    button.classList.toggle("is-complete", complete);
    button.setAttribute("aria-pressed", complete ? "true" : "false");
    const label = button.querySelector(".completion-label, .check-label");
    if (label) label.textContent = button.hasAttribute("data-lesson-check") ? (complete ? t("Done","Hecha") : t("Mark done","Marcar hecha")) : (complete ? t("Lesson complete","Lección completada") : t("Mark lesson complete","Marcar lección como completada"));
    const row = button.closest("[data-lesson-row]");
    if (row) row.classList.toggle("is-complete", complete);
  });

  document.querySelectorAll("[data-course-progress]").forEach((box) => {
    const rows = [...document.querySelectorAll("[data-course-lesson]")];
    const total = Number(box.dataset.total) || rows.length;
    const count = rows.filter((row) => done.has(row.dataset.lessonSlug)).length;
    const label = box.querySelector("[data-course-progress-label]");
    const bar = box.querySelector("[data-course-progress-bar]");
    if (label) label.textContent = t(`${count} of ${total} lessons complete`,`${count} de ${total} lecciones completadas`);
    if (bar) bar.style.width = `${total ? (count / total) * 100 : 0}%`;
  });

  document.querySelectorAll("[data-module-progress]").forEach((box) => {
    const module = box.dataset.module;
    const rows = [...document.querySelectorAll(`[data-course-lesson][data-module="${module}"]`)];
    const total = Number(box.dataset.total) || rows.length;
    const count = rows.filter((row) => done.has(row.dataset.lessonSlug)).length;
    const label = box.querySelector("[data-module-progress-label]");
    const bar = box.querySelector("[data-module-progress-bar]");
    if (label) label.textContent = t(`${count} of ${total} complete`,`${count} de ${total} completadas`);
    if (bar) bar.style.width = `${total ? (count / total) * 100 : 0}%`;
  });

  document.querySelectorAll("[data-progress-where]").forEach((el) => {
    el.textContent = signedIn() ? t("Saved to your account","Guardado en tu cuenta") : account?.enabled ? t("Saved on this device. Sign in to keep it.","Guardado en este dispositivo. Inicia sesión para conservarlo.") : t("Saved on this device","Guardado en este dispositivo");
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
    if (window.confirm(signedIn() ? t("Reset all lesson progress in your account?","¿Reiniciar todo el progreso de las lecciones en tu cuenta?") : t("Reset all lesson progress on this device?","¿Reiniciar todo el progreso de las lecciones en este dispositivo?"))) {
      dropLocal(COMPLETED_KEY, QUIZ_KEY);
      pushProgress();
      updateCompletionUi();
    }
  }
});

updateCompletionUi();

// Account: ask the server who's signed in, merge this browser's progress into the account the first time,
// then keep the account as the source of truth. Pages work the same when accounts are off.
const accountsOn = document.documentElement.classList.contains("accounts-on");
const signedInHint = /(?:^|;\s*)tb_in=1/.test(document.cookie);
const acctPage = document.querySelector("[data-account]");
const setHeader = () => {
  document.querySelectorAll("[data-account-label]").forEach((el) => { el.textContent = signedIn() ? t("Account","Cuenta") : t("Sign in","Iniciar sesión"); });
  document.documentElement.classList.toggle("signed-in", signedIn());
};
if (signedInHint) document.documentElement.classList.add("signed-in");
setHeader();

const applyAccount = (me) => {
  account = me;
  if (me.signedIn) {
    const server = me.progress || { completed: [], quizzes: {} };
    let completed = new Set(server.completed || []);
    let quizzes = { ...(server.quizzes || {}) };
    if (readLocal(SYNCED_KEY, null) !== me.id) {
      // First time this browser meets this account: keep anything done here before signing in.
      completedLessons().forEach((s) => completed.add(s));
      quizzes = { ...quizAnswers(), ...quizzes };
      writeLocal(SYNCED_KEY, me.id);
      writeLocal(COMPLETED_KEY, [...completed]);
      writeLocal(QUIZ_KEY, quizzes);
      pushProgress();
    } else {
      writeLocal(COMPLETED_KEY, [...completed]);
      writeLocal(QUIZ_KEY, quizzes);
    }
  } else if (readLocal(SYNCED_KEY, null)) {
    // Signed out elsewhere or the session expired: don't leave the account's progress on a shared device.
    dropLocal(SYNCED_KEY, COMPLETED_KEY, QUIZ_KEY);
  }
  setHeader();
  updateCompletionUi();
  if (acctPage) renderAccount();
};

const loadAccount = () => api("/api/me/").then((r) => applyAccount(r.ok ? r.data : { enabled: false }), () => applyAccount({ enabled: false }));

// The /account/ page.
let pendingEmail = "";
const params = new URLSearchParams(location.search);
const nextUrl = /^\/[a-z0-9\-/]*$/i.test(params.get("next") || "") && !String(params.get("next")).startsWith("//") ? params.get("next") : "";
const show = (state) => acctPage.querySelectorAll("[data-acct]").forEach((s) => { s.hidden = s.dataset.acct !== state; });
const msg = (state, text, tone) => {
  const el = acctPage.querySelector(`[data-acct="${state}"] [data-acct-msg]`);
  if (el) { el.textContent = text || ""; el.dataset.tone = tone || ""; }
};

function renderAccount() {
  if (!account.enabled) return show("off");
  if (!account.signedIn) {
    if (params.get("t")) return verify({ token: params.get("t") }, "out");
    if (nextUrl) {
      const why = acctPage.querySelector("[data-acct-why]");
      if (why) why.insertAdjacentHTML("afterbegin", "<strong>This lesson needs a free account.</strong> ");
    }
    return show(pendingEmail ? "code" : "out");
  }
  if (nextUrl && params.get("t")) { location.replace(nextUrl); return; }
  show("in");
  acctPage.querySelectorAll('[data-acct="in"] [data-acct-email]').forEach((el) => { el.textContent = account.email; });
  const n = completedLessons().size;
  const answers = Object.values(quizAnswers());
  acctPage.querySelector("[data-acct-progress]").textContent = t(`${n} lesson${n === 1 ? "" : "s"} complete`, `${n} ${n === 1 ? "lección completada" : "lecciones completadas"}`);
  acctPage.querySelector("[data-acct-quiz]").textContent = answers.length
    ? t(`${answers.length} quick question${answers.length === 1 ? "" : "s"} answered, ${answers.filter((x) => x === 1).length} right first time`, `${answers.length} ${answers.length === 1 ? "pregunta rápida respondida" : "preguntas rápidas respondidas"}, ${answers.filter((x) => x === 1).length} acertadas a la primera`)
    : t("No quick questions answered yet","Aún no has respondido preguntas rápidas");
  acctPage.querySelector("[data-acct-updates]").checked = Boolean(account.emailUpdates);
  if (nextUrl) acctPage.querySelector("[data-acct-continue]").href = nextUrl;
}

function verify(body, state) {
  msg(state, t("Signing you in…","Iniciando sesión…"));
  return api("/api/auth/verify/", { method: "POST", body: JSON.stringify(body) }).then((r) => {
    if (!r.ok) { if (body.token) history.replaceState(null, "", location.pathname); show(body.token ? "out" : state); msg(body.token ? "out" : state, r.data.error || t("Something went wrong.","Algo ha salido mal."), "bad"); return; }
    if (nextUrl) { location.replace(nextUrl); return; }
    history.replaceState(null, "", location.pathname);
    pendingEmail = "";
    loadAccount();
  }, () => msg(state, t("No connection. Please try again.","Sin conexión. Inténtalo de nuevo."), "bad"));
}

if (acctPage) {
  acctPage.querySelector("[data-acct-start]").addEventListener("submit", (e) => {
    e.preventDefault();
    const f = e.currentTarget;
    const email = f.email.value.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { msg("out", t("Please enter a valid email address.","Introduce un correo electrónico válido."), "bad"); return; }
    msg("out", "Sending…");
    api("/api/auth/start/", { method: "POST", body: JSON.stringify({ email, emailUpdates: f.updates.checked, next: nextUrl, lang: ES ? "es" : "en" }) }).then((r) => {
      if (!r.ok) { msg("out", r.data.error || t("Something went wrong.","Algo ha salido mal."), "bad"); return; }
      pendingEmail = email;
      msg("out", "");
      acctPage.querySelectorAll('[data-acct="code"] [data-acct-email]').forEach((el) => { el.textContent = email; });
      show("code");
      acctPage.querySelector('[data-acct-verify] input[name="code"]').focus();
    }, () => msg("out", t("No connection. Please try again.","Sin conexión. Inténtalo de nuevo."), "bad"));
  });
  acctPage.querySelector("[data-acct-verify]").addEventListener("submit", (e) => {
    e.preventDefault();
    verify({ email: pendingEmail, code: e.currentTarget.code.value }, "code");
  });
  acctPage.querySelector("[data-acct-back]").addEventListener("click", () => { pendingEmail = ""; show("out"); });
  acctPage.querySelector("[data-acct-updates]").addEventListener("change", (e) => {
    api("/api/account/", { method: "PATCH", body: JSON.stringify({ emailUpdates: e.target.checked }) })
      .then((r) => msg("in", r.ok ? (e.target.checked ? t("You'll get an email when new lessons come out.","Recibirás un correo cuando salgan lecciones nuevas.") : t("No more emails about new lessons.","No recibirás más correos sobre lecciones nuevas.")) : t("Couldn't save that. Please try again.","No se ha podido guardar. Inténtalo de nuevo."), r.ok ? "good" : "bad"));
  });
  acctPage.querySelector("[data-acct-logout]").addEventListener("click", () => {
    api("/api/auth/logout/", { method: "POST" }).then(() => { dropLocal(SYNCED_KEY, COMPLETED_KEY, QUIZ_KEY); location.href = ES ? "/es/" : "/"; });
  });
  acctPage.querySelector("[data-acct-delete]").addEventListener("click", () => {
    if (!window.confirm(t("Delete your account and all saved progress? This can't be undone.","¿Eliminar tu cuenta y todo el progreso guardado? No se puede deshacer."))) return;
    api("/api/account/", { method: "DELETE" }).then((r) => {
      if (!r.ok) { msg("in", r.data.error || t("Couldn't delete the account. Please try again.","No se ha podido eliminar la cuenta. Inténtalo de nuevo."), "bad"); return; }
      dropLocal(SYNCED_KEY, COMPLETED_KEY, QUIZ_KEY);
      location.href = (ES ? "/es/" : "/") + "?account=deleted";
    });
  });
}

// Start last, once everything above is defined. The build adds "accounts-on" when accounts are switched on.
if (accountsOn) loadAccount(); else if (acctPage) applyAccount({ enabled: false });
