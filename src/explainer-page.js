import { COPY } from './explainer-copy.js';

export function explainerPage(language, esc) {
  const t = COPY[language];
  return `<div class="explain-tool" data-explainer>
    <header class="explain-heading"><h1>${t.title}</h1><p class="lead">${t.intro}</p></header>
    <div class="explain-layout">
      <section class="explain-source" aria-labelledby="source-title">
        <h2 id="source-title">${t.source}</h2>
        <form id="explain-form">
          <fieldset class="explain-choice source-choice"><legend class="sr">${t.source}</legend>
            <label><input type="radio" name="mode" value="text" checked><span>${t.text}</span></label>
            <label><input type="radio" name="mode" value="youtube"><span>${t.youtube}</span></label>
          </fieldset>
          <div id="text-source"><label class="explain-label" for="source-text">${t.textLabel}</label>
            <textarea id="source-text" rows="10" maxlength="60000" placeholder="${esc(t.placeholder)}" aria-describedby="source-count"></textarea>
            <p class="explain-count" id="source-count">0 ${t.chars}</p>
            <label class="explain-file" for="source-file">${t.file}</label><input class="sr" type="file" id="source-file" accept=".txt,.srt,.vtt,text/plain,text/vtt">
            <p class="explain-fine">${t.fileHelp}</p>
          </div>
          <div id="youtube-source" hidden><label class="explain-label" for="source-url">${t.urlLabel}</label>
            <input id="source-url" type="url" placeholder="${esc(t.urlPlaceholder)}" aria-describedby="youtube-help">
            <p class="explain-fine" id="youtube-help">${t.urlHelp}</p>
          </div>
          <fieldset class="explain-choice level-choice"><legend>${t.level}</legend>
            <label><input type="radio" name="level" value="beginner" checked><span>${t.beginner}</span></label>
            <label><input type="radio" name="level" value="some"><span>${t.some}</span></label>
          </fieldset>
          <button class="btn explain-submit" type="submit">${t.explain}<span aria-hidden="true">→</span></button>
          <button class="text-button" id="explain-cancel" type="button" hidden>${t.cancel}</button>
          <div id="explain-message" role="status" aria-live="polite"></div>
          <a id="explain-signin" href="/account/?next=/explain/" hidden>${t.errors.sign_in}</a>
          <p class="explain-fine">${t.account}</p><p class="explain-fine">${t.privacy}</p>
        </form>
      </section>
      <section class="explain-workspace" aria-label="${t.resultLabel}" aria-busy="false">
        <div id="explain-empty" class="explain-empty">
          <span class="explain-book" aria-hidden="true">Aa<span>↘</span></span>
          <h2>${t.emptyTitle}</h2><p>${t.emptyText}</p>
          <div class="explain-preview"><p class="explain-fine">${t.previewLabel}</p><blockquote>${t.previewClaim}</blockquote><p>${t.previewPlain}</p></div>
          <button type="button" class="btn ghost" id="explain-sample">${t.sample} <span aria-hidden="true">→</span></button>
        </div>
        <div id="explain-loading" class="explain-loading" hidden><p>${t.busy}</p><div class="explain-skeleton" aria-hidden="true"><i></i><i></i><i></i><i></i></div></div>
        <div id="explain-result" tabindex="-1" hidden></div>
      </section>
    </div>
    <noscript><p>${language === 'es' ? 'Activa JavaScript para usar esta herramienta.' : 'Enable JavaScript to use this tool.'}</p></noscript>
  </div><script type="module" src="/explainer.js"></script>`;
}
