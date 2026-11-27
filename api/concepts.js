// Personal self-assessment only. Never store it in public glossary files.
import { q } from './_lib/db.js';
import { currentUserId, enabled, json, off, sameOrigin } from './_lib/http.js';
import { conceptIds } from '../lib/concepts.js';
import { cleanConceptStates } from '../src/concept-state.js';

export function createConceptHandler({ configured = enabled, userId = currentUserId, query = q } = {}) {
  return async function patch(request) {
    if (!configured()) return off();
    if (!request.headers.get('origin') || !sameOrigin(request)) return json({ error: 'Bad origin.' }, 403);
    if (!request.headers.get('content-type')?.startsWith('application/json')) return json({ error: 'Use JSON.' }, 415);
    const uid = await userId(request);
    if (!uid) return json({ error: 'Not signed in.' }, 401);
    let raw = '', size = 0;
    for await (const chunk of request.body || []) {
      size += chunk.length;
      if (size > 40000) return json({ error: 'Too many concept choices.' }, 413);
      raw += new TextDecoder().decode(chunk);
    }
    let body;
    try { body = JSON.parse(raw); } catch { return json({ error: 'Invalid JSON.' }, 400); }
    const clean = cleanConceptStates(body?.concepts, conceptIds);
    if (!Object.keys(clean).length || Object.keys(clean).length !== Object.keys(body?.concepts || {}).length) return json({ error: 'Unknown concept or status.' }, 400);
    const changedAt = new Date().toISOString();
    const choices = Object.fromEntries(Object.entries(clean).map(([id, value]) => [id, { ...value, updatedAt: changedAt }]));
    // Merge individual changes atomically; do not replace lesson progress or other devices' choices.
    const result = await query(`update tb_users set progress = jsonb_set(progress, '{concepts}',
      coalesce(progress->'concepts', '{}'::jsonb) || $2::jsonb), progress_at = now()
      where id = $1 returning progress->'concepts' as concepts`, [uid, JSON.stringify(choices)]);
    if (!result.rowCount) return json({ error: 'Not signed in.' }, 401);
    return json({ ok: true, concepts: result.rows[0].concepts });
  };
}
export const PATCH = createConceptHandler();
