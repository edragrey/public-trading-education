import test from 'node:test';
import assert from 'node:assert/strict';
import { cleanInput, youtubeId, youtubeTranscript, generateBreakdown, limitedText, validateResult, ExplainError } from '../lib/explainer.js';
import { createHandler, reserveUsage } from '../api/explain.js';
import { COPY } from '../src/explainer-copy.js';
const text = 'The author argues that market liquidity can affect how easily an investor can sell an asset. This is not a prediction of future prices. '.repeat(3);
const fail = code => e => e.code === code;
const sample = () => structuredClone(COPY.en.demo);

test('normalizes audience and output language, preserves untrusted text as data', () => {
  const x = cleanInput({ text: ` ${text} `, level: 'some', language: 'es' });
  assert.equal(x.text, text.trim()); assert.equal(x.language, 'es'); assert.equal(x.level, 'some');
  assert.equal(cleanInput({ text, language: '<script>', level: 'expert' }).language, 'en');
});
test('rejects missing, short, oversized and malformed input', () => {
  for (const body of [null, [], 42]) assert.throws(() => cleanInput(body), fail('invalid_input'));
  assert.throws(() => cleanInput({ text: 'not enough' }), fail('too_short'));
  assert.throws(() => cleanInput({ text: 'x'.repeat(60001) }), fail('too_long'));
  assert.throws(() => cleanInput({ text, question: 'x'.repeat(601) }), fail('question_too_long'));
});
test('accepts canonical YouTube URL variants', () => {
  for (const url of ['https://youtu.be/NMpwILMWNKc?t=10', 'https://www.youtube.com/watch?v=NMpwILMWNKc', 'https://m.youtube.com/shorts/NMpwILMWNKc', 'https://youtube.com/live/NMpwILMWNKc']) assert.equal(youtubeId(url), 'NMpwILMWNKc');
});
test('rejects SSRF, deceptive hosts, credentials, invalid IDs and insecure URLs', () => {
  for (const url of ['http://youtu.be/NMpwILMWNKc', 'https://youtube.com.evil.test/watch?v=NMpwILMWNKc', 'https://youtube.com@evil.test/watch?v=NMpwILMWNKc', 'https://user@youtube.com/watch?v=NMpwILMWNKc', 'https://127.0.0.1/', 'file:///etc/passwd', 'https://youtube.com:8080/watch?v=NMpwILMWNKc', 'https://youtube.com/watch?v=short', 'https://youtu.be/NMpwILMWNKc/other', 'javascript:alert(1)']) assert.throws(() => youtubeId(url), fail('invalid_url'));
});
test('reads captions only through fixed, validated YouTube URLs', async () => {
  const calls = [];
  const transcript = await youtubeTranscript('NMpwILMWNKc', 'en', async url => {
    calls.push(String(url));
    return calls.length === 1 ? new Response(JSON.stringify({ captionTracks: [{ languageCode: 'en', baseUrl: 'https://www.youtube.com/api/timedtext?v=NMpwILMWNKc' }] })) : Response.json({ events: [{ segs: [{ utf8: text }] }] });
  });
  assert.equal(transcript, text.trim()); assert.match(calls[1], /fmt=json3/);
});
test('caption failure prompts a transcript, never a fabricated analysis', async () => {
  for (const baseUrl of ['https://evil.test/caption', 'https://www.youtube.com/redirect', 'http://www.youtube.com/api/timedtext']) {
    let calls = 0;
    await assert.rejects(() => youtubeTranscript('NMpwILMWNKc', 'en', async () => { calls++; return new Response(JSON.stringify({ captionTracks: [{ baseUrl }] })); }), fail('captions_unavailable'));
    assert.equal(calls, 1);
  }
  await assert.rejects(() => youtubeTranscript('NMpwILMWNKc', 'en', async () => new Response('No captions')), fail('captions_unavailable'));
});
test('bounds streamed source size', async () => {
  await assert.rejects(() => limitedText(new Response('long'), 3), fail('source_too_large'));
  assert.equal(await limitedText(new Response('ok'), 3), 'ok');
});
test('AI request has a strict schema, separate instructions, no storage and correct language', async () => {
  const result = await generateBreakdown(cleanInput({ text, language: 'es' }), { OPENAI_API_KEY: 'test-only', EXPLAINER_MODEL: 'configured-model' }, async (url, options) => {
    assert.equal(url, 'https://api.openai.com/v1/responses');
    const b = JSON.parse(options.body);
    assert.equal(b.store, false); assert.equal(b.text.format.strict, true); assert.equal(b.model, 'configured-model');
    assert.equal(JSON.parse(b.input).outputLanguage, 'Spanish (Spain)'); assert.equal(JSON.parse(b.input).source, text.trim());
    assert.match(b.instructions, /untrusted quoted data/);
    return Response.json({ status: 'completed', output: [{ content: [{ type: 'output_text', text: JSON.stringify(sample()) }] }] });
  });
  assert.ok(result.concepts.length);
});
test('removes invented quotations and enforces total quote budget', async () => {
  const data = sample();
  data.concepts[0].quote = 'made up quotation';
  data.concepts[1].quote = text.trim().split(/\s+/).slice(0, 20).join(' ');
  data.concepts[2].quote = text.trim().split(/\s+/).slice(0, 12).join(' ');
  const result = await generateBreakdown({ text, level: 'beginner', language: 'en' }, {}, async () => Response.json({ status: 'completed', output: [{ content: [{ type: 'output_text', text: JSON.stringify(data) }] }] }));
  assert.equal(result.concepts[0].quote, ''); assert.ok(result.concepts[1].quote); assert.equal(result.concepts[2].quote, '');
});
test('rejects incomplete, refused or malformed AI output', async () => {
  for (const payload of [{ status: 'incomplete' }, { status: 'completed', output: [] }, { status: 'completed', output: [{ content: [{ type: 'output_text', text: '{"title":"only"}' }] }] }]) {
    await assert.rejects(() => generateBreakdown({ text }, {}, async () => Response.json(payload)), fail('invalid_response'));
  }
  await assert.rejects(() => generateBreakdown({ text }, {}, async () => new Response('', { status: 429 })), fail('generation_unavailable'));
});
test('validates follow-up answers and rejects invalid claim categories', () => {
  assert.deepEqual(validateResult({ answer: 'A clear explanation.' }, true), { answer: 'A clear explanation.' });
  assert.throws(() => validateResult({ answer: '' }, true), fail('invalid_response'));
  const data = sample(); data.claims[0].type = 'verified fact';
  assert.throws(() => validateResult(data), fail('invalid_response'));
  for (const t of [COPY.en, COPY.es]) assert.ok(validateResult(t.demo));
});

const req = (body, origin = 'https://example.test') => new Request('https://example.test/api/explain', { method: 'POST', headers: { origin, 'content-type': 'application/json' }, body: typeof body === 'string' ? body : JSON.stringify(body) });
const handler = overrides => createHandler({ env: { OPENAI_API_KEY: 'test-only' }, configured: () => true, userId: async () => '1', reserve: async () => {}, generate: async () => sample(), ...overrides });
test('API rejects other origins and unsigned users before generation', async () => {
  assert.equal((await handler()(req({ text }, 'https://evil.test'))).status, 403);
  assert.equal((await handler({ userId: async () => null })(req({ text }))).status, 401);
  assert.equal((await handler({ env: {} })(req({ text }))).status, 503);
  assert.equal((await handler()(req('{invalid'))).status, 400);
});
test('API validates before consuming quota and does not generate without captions', async () => {
  let uses = 0, generations = 0;
  const h = handler({ reserve: async () => { uses++; }, generate: async () => { generations++; return sample(); }, transcript: async () => { throw new ExplainError('captions_unavailable', 422); } });
  assert.equal((await h(req({ text: 'short' }))).status, 400); assert.equal(uses, 0);
  const response = await h(req({ mode: 'youtube', url: 'https://youtu.be/NMpwILMWNKc' }));
  assert.equal(response.status, 422); assert.equal(generations, 0);
});
test('API returns source only to the requester, no caching and neutral quota errors', async () => {
  const result = await handler()(req({ text }));
  assert.equal(result.status, 200); assert.equal(result.headers.get('cache-control'), 'no-store');
  assert.equal((await result.json()).sourceText, text.trim());
  const limit = await handler({ reserve: async () => { throw new ExplainError('daily_limit', 429); } })(req({ text }));
  assert.equal(limit.status, 429); assert.equal(limit.headers.get('retry-after'), '86400');
});
test('durable usage is atomically bounded per account and globally', async () => {
  const queries = [];
  await reserveUsage('42', async (sql, args) => { queries.push([sql, args]); return { rowCount: 1 }; });
  assert.match(queries[0][0], /on conflict/); assert.deepEqual(queries[0][1], ['user:42', 10, '42']);
  assert.match(queries[0][0], /day < current_date/);
  assert.equal(queries[1][1][0], 'global'); assert.equal(queries[1][1][2], null);
  await assert.rejects(() => reserveUsage('42', async () => ({ rowCount: 0 })), fail('daily_limit'));
});
