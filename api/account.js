// GET -> download everything stored about you (JSON). PATCH { emailUpdates } -> change email choice.
// DELETE -> delete the account and its progress for good.
import { q } from "./_lib/db.js";
import { clearCookies, currentUserId, enabled, json, off, readJson, sameOrigin, withCookies } from "./_lib/http.js";

async function guard(request, write) {
  if (!enabled()) return { res: off() };
  if (write && !sameOrigin(request)) return { res: json({ error: "Bad origin." }, 403) };
  const uid = await currentUserId(request);
  if (!uid) return { res: json({ error: "Not signed in." }, 401) };
  return { uid };
}

export async function GET(request) {
  const { uid, res } = await guard(request, false);
  if (res) return res;
  const u = (await q("select email, created_at, last_login_at, email_updates, email_updates_at, progress, progress_at from tb_users where id = $1", [uid])).rows[0];
  if (!u) return json({ error: "Not signed in." }, 401);
  const usage = (await q("select day, uses from tb_explainer_usage where user_id = $1", [uid])).rows[0];
  const access = (await q("select source_hash, completed_at from tb_explainer_access where user_id = $1", [uid])).rows[0];
  const data = {
    exportedAt: new Date().toISOString(),
    account: { email: u.email, createdAt: u.created_at, lastSignInAt: u.last_login_at },
    emailUpdates: { optedIn: u.email_updates, changedAt: u.email_updates_at },
    progress: { ...u.progress, updatedAt: u.progress_at },
    explainerUsage: usage ? { day: usage.day, requests: usage.uses } : null,
    freeExplanation: access ? { sourceFingerprint: access.source_hash, completedAt: access.completed_at } : null,
  };
  return new Response(JSON.stringify(data, null, 2), {
    headers: { "content-type": "application/json; charset=utf-8", "content-disposition": 'attachment; filename="my-course-data.json"', "cache-control": "no-store" },
  });
}

export async function PATCH(request) {
  const { uid, res } = await guard(request, true);
  if (res) return res;
  const on = (await readJson(request)).emailUpdates === true;
  await q("update tb_users set email_updates = $2, email_updates_at = now() where id = $1", [uid, on]);
  return json({ ok: true, emailUpdates: on });
}

export async function DELETE(request) {
  const { uid, res } = await guard(request, true);
  if (res) return res;
  const u = (await q("delete from tb_users where id = $1 returning email", [uid])).rows[0];
  if (u) await q("delete from tb_login_codes where email = $1", [u.email]);
  return withCookies(json({ ok: true }), clearCookies(request));
}
