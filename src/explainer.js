import { COPY } from './explainer-copy.js';

const root = document.querySelector('[data-explainer]');
if (root) {
  const language = document.documentElement.lang === 'es' ? 'es' : 'en';
  const t = COPY[language];
  const $ = selector => root.querySelector(selector);
  const form = $('#explain-form');
  const source = $('#source-text');
  const resultEl = $('#explain-result');
  const message = $('#explain-message');
  const signin = $('#explain-signin');
  const submit = form.querySelector('[type=submit]');
  const cancel = $('#explain-cancel');
  let controller;
  let currentSource;
  let currentResult;
  let isSample = false;
  const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
  const prefix = language === 'es' ? '/es' : '';
  signin.href = `${prefix}/account/?next=${encodeURIComponent(`${prefix}/explain/`)}`;
  const errorText = code => t.errors[code] || t.errors.service_unavailable;
  const count = () => { $('#source-count').textContent = `${source.value.length.toLocaleString(language)} ${t.chars}`; };
  source.addEventListener('input', count);
  function showError(code) {
    message.textContent = errorText(code);
    message.className = 'explain-error';
    signin.hidden = code !== 'sign_in';
  }
  function busy(value) {
    form.querySelectorAll('input, textarea, button').forEach(el => { el.disabled = value; });
    cancel.disabled = false;
    cancel.hidden = !value;
    submit.textContent = value ? t.busy : t.explain;
    $('.explain-workspace').setAttribute('aria-busy', String(value));
    $('#explain-loading').hidden = !value;
    $('#explain-empty').hidden = value || Boolean(currentResult);
    resultEl.hidden = value || !currentResult;
  }
  form.addEventListener('change', () => {
    const youtube = new FormData(form).get('mode') === 'youtube';
    $('#text-source').hidden = youtube;
    $('#youtube-source').hidden = !youtube;
  });
  $('#source-file').addEventListener('change', async event => {
    const file = event.target.files[0];
    if (!file) return;
    try {
      if (!/\.(txt|srt|vtt)$/i.test(file.name)) return showError('file_type');
      if (file.size > 250000) return showError('source_too_large');
      const text = await file.text();
      if (text.length > 60000) return showError('too_long');
      source.value = text; count(); message.textContent = ''; source.focus();
    } catch { showError('invalid_input'); }
    finally { event.target.value = ''; }
  });
  async function request(input, signal) {
    const response = await fetch('/api/explain', { method: 'POST', credentials: 'same-origin', signal,
      headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(input) });
    const body = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(body.error || 'service_unavailable');
    if (!body.result) throw new Error('invalid_response');
    return body;
  }
  form.addEventListener('submit', async event => {
    event.preventDefault();
    controller?.abort();
    const fields = new FormData(form);
    const input = { mode: fields.get('mode'), text: fields.get('mode') === 'text' ? source.value.trim() : '',
      url: $('#source-url').value.trim(), level: fields.get('level'), language };
    if (input.mode === 'text' && input.text.length < 120) { showError('too_short'); source.focus(); return; }
    if (input.text.length > 60000) return showError('too_long');
    if (input.mode === 'youtube') {
      try {
        const u = new URL(input.url);
        if (u.protocol !== 'https:' || !['youtube.com', 'www.youtube.com', 'm.youtube.com', 'youtu.be'].includes(u.hostname) || u.username || u.password || u.port) throw new Error();
      } catch { showError('invalid_url'); $('#source-url').focus(); return; }
    }
    message.textContent = ''; signin.hidden = true;
    const pending = new AbortController();
    controller = pending;
    busy(true);
    try {
      const data = await request(input, pending.signal);
      if (controller !== pending) return;
      currentSource = { ...input, text: data.sourceText };
      isSample = false;
      render(data.result, data.sourceUrl);
    } catch (e) { if (controller === pending && e.name !== 'AbortError') showError(e.message === 'Failed to fetch' ? 'network' : e.message); }
    finally { if (controller === pending) busy(false); }
  });
  cancel.addEventListener('click', () => { controller?.abort(); busy(false); });
  $('#explain-sample').addEventListener('click', () => {
    controller?.abort(); currentSource = null; isSample = true;
    render(t.demo); busy(false);
  });

  function render(data, sourceUrl) {
    currentResult = data;
    const canonical = /^https:\/\/www\.youtube\.com\/watch\?v=[\w-]{11}$/.test(sourceUrl || '') ? sourceUrl : '';
    resultEl.innerHTML = `<div class="explain-result-top"><p class="explain-result-label">${isSample ? t.sampleTag : t.resultLabel}</p><button class="text-button" type="button" data-copy>${t.copy}</button></div>
      <h2 class="explain-result-title">${esc(data.title)}</h2>
      <section class="explain-summary"><h3>${t.main}</h3><p>${esc(data.summary)}</p></section>
      <section class="explain-concepts"><h3>${t.concepts}</h3>${data.concepts.map((c, i) => `<details${i === 0 ? ' open' : ''}><summary>${esc(c.term)}</summary><div><p>${esc(c.explanation)}</p><p class="explain-example"><strong>${t.example}</strong>${esc(c.example)}</p>${c.quote ? `<blockquote><span>${t.sourceQuote}</span>${esc(c.quote)}</blockquote>` : ''}</div></details>`).join('')}</section>
      <section class="explain-claims"><h3>${t.claims}</h3>${data.claims.map(c => `<article><span class="explain-type type-${esc(c.type)}">${esc(t.types[c.type] || t.types.interpretation)}</span><h4>${esc(c.statement)}</h4><p>${esc(c.explanation)}</p></article>`).join('')}</section>
      <section class="explain-caveats"><h3>${t.caveats}</h3><ul>${data.caveats.map(c => `<li>${esc(c)}</li>`).join('')}</ul></section>
      <section class="explain-takeaway"><h3>${t.takeaway}</h3><p>${esc(data.takeaway)}</p></section>
      <p class="explain-fine">${isSample ? t.sampleTag : t.ai}</p>
      ${canonical ? `<p><a href="${esc(canonical)}" target="_blank" rel="noopener noreferrer">${t.original} ↗</a></p>` : ''}
      ${!isSample ? `<section class="explain-followup"><h3>${t.ask}</h3><div class="explain-suggestions">${data.questions.map(q => `<button type="button" data-question="${esc(q)}">${esc(q)}</button>`).join('')}</div>
        <form id="question-form"><label class="explain-label" for="source-question">${t.questionLabel}</label><textarea id="source-question" rows="2" maxlength="600" required placeholder="${esc(t.questionPlaceholder)}"></textarea><button class="btn ghost" type="submit">${t.send} →</button></form><p id="question-status" role="status"></p><div id="question-answer" tabindex="-1"></div></section>` : ''}
      <p><button class="text-button" type="button" data-new>${t.newSource} ↑</button></p>`;
    $('#explain-empty').hidden = true; resultEl.hidden = false;
    resultEl.focus({ preventScroll: true });
    if (window.innerWidth < 800) resultEl.scrollIntoView({ behavior: 'instant', block: 'start' });
    resultEl.querySelector('[data-copy]').addEventListener('click', async event => {
      const text = `${data.title}\n\n${t.main}\n${data.summary}\n\n${data.concepts.map(c => `${c.term}\n${c.explanation}\n${t.example}: ${c.example}`).join('\n\n')}\n\n${t.claims}\n${data.claims.map(c => `[${t.types[c.type]}] ${c.statement}\n${c.explanation}`).join('\n\n')}\n\n${t.caveats}\n${data.caveats.join('\n')}\n\n${t.takeaway}\n${data.takeaway}\n\n${isSample ? t.sampleTag : t.ai}${canonical ? `\n${canonical}` : ''}`;
      try { await navigator.clipboard.writeText(text); event.target.textContent = t.copied; }
      catch { message.textContent = t.copyFailed; }
    });
    resultEl.querySelector('[data-new]').addEventListener('click', () => {
      controller?.abort(); currentSource = null; currentResult = null;
      resultEl.hidden = true; $('#explain-empty').hidden = false;
      (new FormData(form).get('mode') === 'youtube' ? $('#source-url') : source).focus();
    });
    resultEl.querySelectorAll('[data-question]').forEach(button => button.addEventListener('click', () => {
      $('#source-question').value = button.dataset.question;
      $('#source-question').focus();
    }));
    $('#question-form')?.addEventListener('submit', async event => {
      event.preventDefault();
      const question = $('#source-question').value.trim();
      if (!question || !currentSource) return;
      const status = $('#question-status');
      const btn = event.target.querySelector('button');
      btn.disabled = true;
      status.textContent = t.answering;
      controller = new AbortController();
      try {
        const answer = await request({ ...currentSource, mode: 'text', question }, controller.signal);
        $('#question-answer').textContent = answer.result.answer;
        $('#question-answer').focus({ preventScroll: true });
        status.textContent = '';
      } catch (e) { if (e.name !== 'AbortError') status.textContent = errorText(e.message); }
      finally { btn.disabled = false; }
    });
  }
}
