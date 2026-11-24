// POST { email, code } or { token } -> signs in (creating the account on first sign-in) and sets the session cookie.
import { q } from "../_lib/db.js";
import { enabled, hash, json, normEmail, off, readJson, sameOrigin, sessionCookies, withCookies } from "../_lib/http.js";

const FAIL = { error: "That code didn't work. Check it, or ask for a new one." };

export async function POST(request) {
  if (!enabled()) return off();
  if (!sameOrigin(request)) return json({ error: "Bad origin." }, 403);
  const body = await readJson(request);
  let row;
  if (typeof body.token === "string" && body.token) {
    row = (await q("select * from tb_login_codes where link_hash = $1 and used_at is null and expires_at > now()", [hash(body.token)])).rows[0];
    if (!row) return json({ error: "That link has expired or was already used. Ask for a new code." }, 400);
  } else {
    const email = normEmail(body.email);
    const code = String(body.code || "").replace(/\D/g, "");
    row = (await q("select * from tb_login_codes where email = $1 and used_at is null and expires_at > now() order by created_at desc limit 1", [email])).rows[0];
    if (!row || row.attempts >= 5) return json(FAIL, 400);
    if (row.code_hash !== hash(`${email}:${code}`)) {
      await q("update tb_login_codes set attempts = attempts + 1 where id = $1", [row.id]);
      return json(FAIL, 400);
    }
  }
  await q("update tb_login_codes set used_at = now() where id = $1", [row.id]);
  const user = (await q(
    `insert into tb_users (email, last_login_at, email_updates, email_updates_at)
     values ($1, now(), $2, case when $2 then now() end)
     on conflict (email) do update set last_login_at = now()
     returning id, (xmax = 0) as created`,
    [row.email, row.email_updates],
  )).rows[0];
  return withCookies(json({ ok: true, created: user.created }), await sessionCookies(request, user.id));
}
