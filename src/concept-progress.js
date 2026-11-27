import { cleanConceptStates, mergeFirstConceptSync, normalizeConceptText } from './concept-state.js';
import { CONCEPT_COPY } from './concept-copy.js';

const root = document.querySelector('[data-concept-glossary]');
if (root) {
  const lang = document.documentElement.lang === 'es' ? 'es' : 'en';
  const t = CONCEPT_COPY[lang];
  const KEY = 'tb-concept-progress-v1', OWNER = 'tb-concepts-user', DIRTY = 'tb-concepts-pending-v1';
  const read = (key, fallback) => { try { return JSON.parse(localStorage.getItem(key) || 'null') ?? fallback; } catch { return fallback; } };
  let storageAvailable = true;
  const write = (key, value) => { try { localStorage.setItem(key, JSON.stringify(value)); } catch { storageAvailable = false; } };
  const cards = [...root.querySelectorAll('[data-concept-id]')];
  const allowed = new Set(cards.map(c => c.dataset.conceptId));
  const savedLocal = () => cleanConceptStates(read(KEY, {}), allowed);
  let states = read(OWNER, null) ? {} : savedLocal();
  let uid = null, pending = {}, inFlight = {}, sending = false, timer, ready = false;
  const status = root.querySelector('[data-concept-save]');
  const retry = root.querySelector('[data-concept-retry]');
  const search = root.querySelector('[data-glossary-search]');
  const filter = root.querySelector('[data-concept-filter]');
  const say = (message, failed = false) => { status.textContent = message; retry.hidden = !failed; };
  const count = () => {
    let shown = 0, understood = 0, review = 0;
    const query = normalizeConceptText(search.value);
    for (const card of cards) {
      const state = states[card.dataset.conceptId]?.status || 'unmarked';
      card.dataset.understanding = state;
      card.querySelector('[data-concept-state]').value = state;
      if (state === 'understood') understood++;
      if (state === 'review') review++;
      const matchesState = filter.value === 'all' || (filter.value === 'videos' ? card.dataset.fromVideo === 'true' : state === filter.value);
      const matchesText = !query || normalizeConceptText(card.dataset.search).includes(query);
      card.hidden = !matchesState || !matchesText;
      if (!card.hidden) shown++;
    }
    root.querySelector('[data-concept-summary]').textContent = t.summary(understood, review, cards.length);
    root.querySelector('.g-none').hidden = shown > 0;
    root.querySelectorAll('.az a').forEach(link => {
      const first = cards.find(card => !card.hidden && card.dataset.initial === link.textContent.trim());
      link.hidden = !first;
      if (first) link.href = `#concept-${first.dataset.conceptId}`;
    });
  };
  const enable = value => { ready = value; root.querySelectorAll('[data-concept-state]').forEach(el => { el.disabled = !value; }); };
  async function flush() {
    if (!uid || sending || !Object.keys(pending).length) return;
    sending = true;
    const batch = pending; pending = {}; inFlight = batch;
    say(t.saving);
    let ok = false;
    try {
      const response = await fetch('/api/concepts/', { method: 'PATCH', credentials: 'same-origin', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ concepts: batch }) });
      if (!response.ok) throw new Error();
      ok = true; say(t.accountSaved);
    } catch { pending = { ...batch, ...pending }; say(storageAvailable ? t.failed : t.unavailable, true); }
    finally {
      inFlight = {};
      write(DIRTY, pending);
      sending = false;
      if (ok && Object.keys(pending).length) flush();
    }
  }
  async function load() {
    enable(false); say(t.loading);
    try {
      if (!document.documentElement.classList.contains('accounts-on')) {
        if (read(OWNER, null)) { write(KEY, {}); write(OWNER, null); write(DIRTY, {}); }
        states = savedLocal(); enable(true); say(t.saved); count(); return;
      }
      const response = await fetch('/api/me/', { credentials: 'same-origin', cache: 'no-store' });
      if (!response.ok) throw new Error();
      const account = await response.json();
      if (!account.enabled) throw new Error();
      if (account.signedIn) {
        uid = String(account.id);
        const server = cleanConceptStates(account.progress?.concepts, allowed);
        const owner = read(OWNER, null);
        const local = owner && owner !== uid ? {} : savedLocal();
        const unsynced = owner === uid ? cleanConceptStates(read(DIRTY, {}), allowed) : {};
        states = owner === uid ? { ...server, ...unsynced } : mergeFirstConceptSync(local, server);
        pending = owner === uid ? unsynced : Object.fromEntries(Object.entries(states).filter(([id]) => !(id in server)));
        write(DIRTY, pending);
        write(OWNER, uid); write(KEY, states);
        say(t.accountSaved);
        flush();
      } else {
        if (read(OWNER, null)) { write(KEY, {}); write(OWNER, null); write(DIRTY, {}); }
        states = savedLocal(); say(t.saved);
      }
      enable(true); count();
    } catch { say(t.unavailable, true); }
  }
  root.addEventListener('change', event => {
    const control = event.target.closest('[data-concept-state]');
    if (!control || !ready) return;
    const id = control.closest('[data-concept-id]').dataset.conceptId;
    states[id] = { status: control.value }; write(KEY, states); count();
    if (uid) { pending[id] = states[id]; write(DIRTY, { ...inFlight, ...pending }); clearTimeout(timer); timer = setTimeout(flush, 200); }
    else say(storageAvailable ? t.saved : (lang === 'es' ? 'Solo en esta página: el navegador no permite guardar tus marcas.' : 'Kept on this page only: browser storage is unavailable.'));
  });
  retry.addEventListener('click', () => ready ? flush() : load());
  search.addEventListener('input', count);
  filter.addEventListener('change', count);
  root.querySelector('[data-concept-export]').addEventListener('click', () => {
    const file = new Blob([JSON.stringify({ version: 1, exportedAt: new Date().toISOString(), concepts: states }, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(file), link = document.createElement('a');
    link.href = url; link.download = 'my-concept-checklist.json'; link.click(); setTimeout(() => URL.revokeObjectURL(url), 1000);
  });
  count(); load();
}
