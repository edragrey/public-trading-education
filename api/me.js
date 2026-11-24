// GET -> whether accounts are on, and if signed in: email, settings and saved progress.
import { q } from "./_lib/db.js";
import { clearCookies, currentUserId, enabled, json, withCookies } from "./_lib/http.js";

export async function GET(request) {
  if (!enabled()) return json({ enabled: false, signedIn: false });
  const uid = await currentUserId(request);
  if (!uid) return json({ enabled: true, signedIn: false });
  const u = (await q("select id, email, created_at, email_updates, progress from tb_users where id = $1", [uid])).rows[0];
  if (!u) return withCookies(json({ enabled: true, signedIn: false }), clearCookies(request));
  return json({ enabled: true, signedIn: true, id: String(u.id), email: u.email, createdAt: u.created_at, emailUpdates: u.email_updates, progress: u.progress });
}
