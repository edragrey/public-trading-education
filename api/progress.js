// PUT { completed: [lesson slugs], quizzes: { "<page>#<n>": 1|0 } } -> replaces the saved progress.
import { q } from "./_lib/db.js";
import { cleanProgress, currentUserId, enabled, json, off, readJson, sameOrigin } from "./_lib/http.js";

export function createProgressHandler({ configured = enabled, userId = currentUserId, query = q } = {}) {
 return async function put(request) {
  if (!configured()) return off();
  if (!sameOrigin(request)) return json({ error: "Bad origin." }, 403);
  const uid = await userId(request);
  if (!uid) return json({ error: "Not signed in." }, 401);
  const progress = cleanProgress(await readJson(request));
  const r = await query("update tb_users set progress = $2::jsonb || jsonb_build_object('concepts', coalesce(progress->'concepts', '{}'::jsonb)), progress_at = now() where id = $1", [uid, JSON.stringify(progress)]);
  if (!r.rowCount) return json({ error: "Not signed in." }, 401);
  return json({ ok: true, progress });
 };
}
export const PUT = createProgressHandler();
