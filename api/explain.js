import { q } from './_lib/db.js';
import { currentUserId, enabled, json } from './_lib/http.js';
import { cleanInput, ExplainError, generateBreakdown, limitedText, youtubeTranscript } from '../lib/explainer.js';
import { reserveFreeSource, finishFreeSource } from '../lib/explainer-access.js';

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

export function createHandler({ env = process.env, configured = enabled, userId = currentUserId, reserve = reserveUsage, transcript = youtubeTranscript, generate = generateBreakdown, authorize = (uid, text) => reserveFreeSource(uid, text, q), finish = (lease, success) => finishFreeSource(lease, success, q) } = {}) {
 return async function handle(request) {
  let lease;
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
    lease = await authorize(uid, input.text);
    const result = await generate(input, env);
    await finish(lease, true);
    lease = null;
    // Send source back only to the requesting browser for contextual follow-ups. Never save it.
    return json({ result, sourceText: input.text, sourceUrl: input.videoId ? `https://www.youtube.com/watch?v=${input.videoId}` : null, generatedAt: new Date().toISOString() });
  } catch (e) {
    if (lease) await finish(lease, false).catch(() => {});
    if (e instanceof ExplainError) return json({ error: e.code }, e.status, e.status === 429 ? { 'retry-after': '86400' } : {});
    return json({ error: 'service_unavailable' }, 503);
  }
 };
}
export const POST = createHandler();

export function createStatusHandler({ env = process.env, configured = enabled, userId = currentUserId, query = q } = {}) {
 return async function status(request) {
  if (!env.OPENAI_API_KEY || !configured()) return json({ enabled: false, signedIn: false });
  try {
    const uid = await userId(request);
    if (!uid) return json({ enabled: true, signedIn: false });
    const access = (await query('select completed_at from tb_explainer_access where user_id = $1', [uid])).rows[0];
    return json({ enabled: true, signedIn: true, freeUsed: Boolean(access?.completed_at), paymentsEnabled: false });
  } catch { return json({ error: 'service_unavailable' }, 503); }
 };
}
export const GET = createStatusHandler();
