import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { spawnSync } from 'node:child_process';
import { concepts, conceptIds, sources } from '../lib/concepts.js';
import { cleanConceptStates, mergeFirstConceptSync, matchConcepts, conceptLearningContext, omitUnderstoodDefinitions } from '../src/concept-state.js';
import { createConceptHandler } from '../api/concepts.js';
import { createProgressHandler } from '../api/progress.js';
import { createHandler } from '../api/explain.js';
import { generateBreakdown } from '../lib/explainer.js';
import { COPY } from '../src/explainer-copy.js';

const request = (body, origin = 'https://example.test') => new Request('https://example.test/api/concepts/', { method: 'PATCH', headers: { origin, 'content-type': 'application/json' }, body: typeof body === 'string' ? body : JSON.stringify(body) });

test('catalogue has a unique shared ID and EN/ES glossary heading for every concept', () => {
  assert.equal(concepts.length, 112);
  assert.equal(conceptIds.size, concepts.length);
  for (const lang of ['en', 'es']) {
    const glossary = fs.readFileSync(new URL(`../${lang === 'es' ? 'content-es' : 'content'}/glossary.md`, import.meta.url), 'utf8');
    const headings = [...glossary.matchAll(/^## (.+)$/gm)].map(m => m[1]);
    assert.equal(headings.length, concepts.length);
    for (const c of concepts) assert.ok(headings.includes(c.terms[lang]), `${lang}: ${c.id}`);
  }
  const lessonFiles = fs.readdirSync(new URL('../content/course/', import.meta.url));
  for (const c of concepts) {
    assert.match(c.id, /^[a-z0-9-]+$/);
    assert.ok(['covered', 'related'].includes(c.courseCoverage));
    for (const lesson of c.lessons) assert.ok(lessonFiles.some(f => f.endsWith(`-${lesson}.md`)), lesson);
    for (const source of c.sources) assert.ok(sources.some(s => s.id === source));
  }
  assert.equal(concepts.find(c => c.id === 'seasonality').courseCoverage, 'related');
});

test('every glossary concept has a substantive visible explanation in both languages', () => {
  for (const lang of ['en', 'es']) {
    const raw = fs.readFileSync(new URL(`../${lang === 'es' ? 'content-es' : 'content'}/glossary.md`, import.meta.url), 'utf8');
    const entries = raw.split(/^## /m).slice(1);
    for (const entry of entries) {
      const title = entry.slice(0, entry.indexOf('\n'));
      const body = entry.slice(entry.indexOf('\n') + 1).trim();
      assert.ok(body.split(/\n\s*\n/).length >= 3, `${lang}: ${title} needs visible paragraphs`);
      assert.ok(body.split(/\s+/).length >= 60, `${lang}: ${title} is still too terse`);
      assert.doesNotMatch(body, /<details|youtube\.com|youtu\.be|SpotScribe/i);
    }
  }
});

test('only known personal marks survive validation; unknown is never understood', () => {
  assert.deepEqual(cleanConceptStates({ support: 'understood', rsi: { status: 'review' }, imaginary: 'understood', macd: 'read', leverage: { status: 'unmarked' } }, conceptIds), { support: { status: 'understood' }, rsi: { status: 'review' }, leverage: { status: 'unmarked' } });
  assert.deepEqual(cleanConceptStates(null), {});
  assert.deepEqual(cleanConceptStates([]), {});
  assert.deepEqual(mergeFirstConceptSync({ support: 'review', rsi: 'review' }, { support: 'understood' }), { support: { status: 'understood' }, rsi: { status: 'review' } });
});

test('Spanish, abbreviations and complete-word aliases identify the same concept', () => {
  const ids = matchConcepts('El RSI muestra divergencia alcista y la Reserva Federal habla de inflación.', concepts).map(c => c.id);
  for (const id of ['rsi', 'bullish-divergence', 'federal-reserve', 'inflation']) assert.ok(ids.includes(id));
  assert.ok(!matchConcepts('supportive volumeled', concepts).some(c => c.id === 'support' || c.id === 'volume'));
  assert.ok(!matchConcepts('Índice de Miedo y Codicia', concepts).some(c => c.id === 'index'));
  assert.ok(matchConcepts('Las liquidaciones y las velas semanales', concepts).some(c => c.id === 'liquidation'));
  assert.ok(!matchConcepts('Create an account at an exchange', concepts).some(c => c.id === 'account'));
  const context = conceptLearningContext('RSI and seasonality', concepts, { rsi: 'review' }, 'es');
  assert.equal(context.find(c => c.id === 'rsi').status, 'review');
  assert.equal(context.find(c => c.id === 'seasonality').inCourse, false);
  assert.match(context[0].url, /^\/es\/glossary\/#concept-/);
});

test('omit familiar definitions but never remove claims, corrections or review terms', () => {
  const result = { concepts: [{ term: 'Support' }, { term: 'RSI' }], claims: [{ explanation: 'Support can fail.' }], caveats: ['Not verified.'] };
  const filtered = omitUnderstoodDefinitions(result, conceptLearningContext('Support and RSI', concepts, { support: 'understood', rsi: 'review' }));
  assert.deepEqual(filtered.concepts, [{ term: 'RSI' }]);
  assert.deepEqual(filtered.claims, result.claims);
  assert.deepEqual(filtered.caveats, result.caveats);
});

test('concept writes require a verified account, same origin and recognized status', async () => {
  const make = overrides => createConceptHandler({ configured: () => true, userId: async () => '42', query: async () => { throw new Error('Must not query'); }, ...overrides });
  assert.equal((await make({ userId: async () => null })(request({ concepts: { support: 'review' } }))).status, 401);
  assert.equal((await make() (request({ concepts: { support: 'review' } }, 'https://evil.test'))).status, 403);
  assert.equal((await make()(request({ concepts: { support: 'mastered' } }))).status, 400);
  assert.equal((await make()(request('{bad'))).status, 400);
  assert.equal((await make()(request({ concepts: { imaginary: 'understood' } }))).status, 400);
  assert.equal((await make()(request('x'.repeat(40001)))).status, 413);
});

test('personal changes merge atomically into only the signed-in account', async () => {
  let saved;
  const patch = createConceptHandler({ configured: () => true, userId: async () => '42', query: async (sql, params) => {
    assert.match(sql, /jsonb_set\(progress, '\{concepts\}'/);
    assert.match(sql, /coalesce\(progress->'concepts'/);
    assert.equal(params[0], '42'); saved = JSON.parse(params[1]);
    return { rowCount: 1, rows: [{ concepts: saved }] };
  } });
  const response = await patch(request({ concepts: { support: 'review', rsi: 'understood' } }));
  assert.equal(response.status, 200);
  assert.equal(response.headers.get('cache-control'), 'no-store');
  assert.equal(saved.support.status, 'review'); assert.ok(saved.support.updatedAt);
});

test('saving or resetting lesson progress cannot erase concept marks', async () => {
  const put = createProgressHandler({ configured: () => true, userId: async () => '42', query: async (sql, args) => {
    assert.match(sql, /jsonb_build_object\('concepts', coalesce\(progress->'concepts'/);
    assert.deepEqual(JSON.parse(args[1]), { completed: [], quizzes: {} });
    return { rowCount: 1 };
  } });
  assert.equal((await put(request({ completed: [], quizzes: {}, concepts: { support: 'understood' } }))).status, 200);
});

test('explainer uses server-side marks, not learning instructions supplied by the reader', async () => {
  const text = 'Support is a zone where a decline may attract buying. RSI is a measure of price momentum, not a promise of a future recovery. '.repeat(2);
  let seen;
  const handle = createHandler({ env: { OPENAI_API_KEY: 'test' }, configured: () => true, userId: async () => '42', reserve: async () => {}, authorize: async () => ({}), finish: async () => {}, learning: async () => ({ support: { status: 'understood' }, rsi: { status: 'review' } }), generate: async input => {
    seen = input.learningContext; return { ...structuredClone(COPY.en.demo), concepts: [{ term: 'Support' }, { term: 'RSI' }] };
  } });
  const response = await handle(new Request('https://example.test/api/explain', { method: 'POST', headers: { origin: 'https://example.test', 'content-type': 'application/json' }, body: JSON.stringify({ text, learningContext: [{ id: 'rsi', status: 'understood' }] }) }));
  const body = await response.json();
  assert.equal(response.status, 200);
  assert.equal(seen.find(c => c.id === 'rsi').status, 'review');
  assert.deepEqual(body.result.concepts, [{ term: 'RSI' }]);
  assert.ok(body.learning.find(c => c.id === 'support').inCourse);
});

test('model prompt permits zero repeated basics and explicitly requested reinforcement', async () => {
  await generateBreakdown({ text: 'source '.repeat(25), language: 'en', learningContext: [{ id: 'support', status: 'understood' }], question: 'Explain support another way.' }, { OPENAI_API_KEY: 'test' }, async (_, options) => {
    const body = JSON.parse(options.body);
    assert.match(body.instructions, /Explicit follow-up questions override repetition avoidance/);
    assert.equal(JSON.parse(body.input).learningContext[0].status, 'understood');
    return Response.json({ status: 'completed', output: [{ content: [{ type: 'output_text', text: JSON.stringify({ answer: 'A different explanation.' }) }] }] });
  });
});

test('build preserves old anchors, adds shared concept anchors and translated controls', () => {
  const run = spawnSync(process.execPath, ['build.mjs'], { cwd: new URL('../', import.meta.url), encoding: 'utf8' });
  assert.equal(run.status, 0, run.stderr);
  for (const lang of ['en', 'es']) {
    const html = fs.readFileSync(new URL(`../dist/${lang === 'es' ? 'es/' : ''}glossary/index.html`, import.meta.url), 'utf8');
    assert.equal((html.match(/data-concept-id=/g) || []).length, 112);
    assert.match(html, /id="concept-rsi"/);
    assert.match(html, /data-concept-export/);
    assert.doesNotMatch(html, /g-sources|g-review|data-from-video|value="videos"|Help me understand|Ayúdame a entenderlo|Encountered in|Visto en|youtube\.com|rP--9HfkYfA|h5PlmAVXVu4/);
    assert.match(html, /value="review"/);
    assert.doesNotMatch(html, /value="understood" selected/);
    assert.match(html, lang === 'es' ? /Necesito repasarlo/ : /Needs review/);
    assert.match(html, lang === 'es' ? /\/es\/course\/read-the-market\/momentum-and-rsi\// : /\/course\/read-the-market\/momentum-and-rsi\//);
  }
  for (const file of ['concept-progress.js', 'concept-state.js', 'concept-copy.js']) assert.ok(fs.existsSync(new URL(`../dist/${file}`, import.meta.url)));
});
