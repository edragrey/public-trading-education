import { q } from './_lib/db.js';
import { currentUserId, enabled, json } from './_lib/http.js';
import { cleanInput, ExplainError, generateBreakdown, limitedText, youtubeTranscript } from '../lib/explainer.js';

export const maxDuration = 90;
// A durable global daily ceiling as well as a per-account ceiling. No transcripts are stored.
export async function reserveUsage(uid, query = q) {
  const consume = async (bucket, limit, userId = null) => (await query(`insert into tb_explainer_usage (bucket, user_id, day, uses) values ($1, $3, current_date, 1)
    on conflict (bucket) do update set day = current_date,
      uses = case when tb_explainer_usage.day < current_date then 1 else tb_explainer_usage.uses + 1 end
    where tb_explainer_usage.day < current_date or tb_explainer_usage.uses < $2 returning uses`, [bucket, limit, userId])).rowCount > 0;
  const daily = Math.min(1000, Math.max(1, Number.parseInt(process.env.EXPLAINER_DAILY_LIMIT || '100', 10) || 100));
  if (!await consume(`user:${uid}`, 10, uid) || !await consume('global', daily)) throw new ExplainError('daily_limit', 429);
}

export function createHandler({ env = process.env, configured = enabled, userId = currentUserId, reserve = reserveUsage, transcript = youtubeTranscript, generate = generateBreakdown } = {}) {
 return async function handle(request) {
  try {
    const origin = request.headers.get('origin');
    if (!origin || origin !== new URL(request.url).origin) return json({ error: 'bad_origin' }, 403);
    if (!request.headers.get('content-type')?.startsWith('application/json')) return json({ error: 'invalid_input' }, 415);
    if (!env.OPENAI_API_KEY || !configured()) return json({ error: 'not_configured' }, 503);
    const uid = await userId(request);
    if (!uid) return json({ error: 'sign_in' }, 401);
    let body;
    try { body = JSON.parse(await limitedText(new Response(request.body), 260000)); }
    catch (e) { if (e instanceof ExplainError) throw e; throw new ExplainError('invalid_input'); }
    const input = cleanInput(body);
    await reserve(uid);
    if (input.mode === 'youtube' && input.text.length < 120) input.text = await transcript(input.videoId, input.language);
    const result = await generate(input, env);
    // Send source back only to the requesting browser for contextual follow-ups. Never save it.
    return json({ result, sourceText: input.text, sourceUrl: input.videoId ? `https://www.youtube.com/watch?v=${input.videoId}` : null, generatedAt: new Date().toISOString() });
  } catch (e) {
    if (e instanceof ExplainError) return json({ error: e.code }, e.status, e.status === 429 ? { 'retry-after': '86400' } : {});
    return json({ error: 'service_unavailable' }, 503);
  }
 };
}
export const POST = createHandler();
