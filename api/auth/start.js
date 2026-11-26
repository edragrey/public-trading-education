// POST { email, emailUpdates } -> emails a 6-digit code and a one-time link. Same flow for sign-up and sign-in.
import crypto from "node:crypto";
import { q } from "../_lib/db.js";
import { sendLoginEmail } from "../_lib/email.js";
import { enabled, hash, json, normEmail, off, readJson, safeNext, sameOrigin, validEmail } from "../_lib/http.js";
import { siteName } from "../_lib/site.js";

export async function POST(request) {
  if (!enabled()) return off();
  if (!sameOrigin(request)) return json({ error: "Bad origin." }, 403);
  const body = await readJson(request);
  const email = normEmail(body.email);
  if (!validEmail(email)) return json({ error: "Please enter a valid email address." }, 400);

  await q("delete from tb_login_codes where expires_at < now() - interval '1 day'");
  const recent = await q("select count(*)::int as n from tb_login_codes where email = $1 and created_at > now() - interval '1 hour'", [email]);
  if (recent.rows[0].n >= 5) return json({ error: "Too many codes asked for. Please wait an hour and try again." }, 429);

  const code = String(crypto.randomInt(0, 1_000_000)).padStart(6, "0");
  const linkToken = crypto.randomBytes(24).toString("base64url");
  await q(
    "insert into tb_login_codes (email, code_hash, link_hash, email_updates, expires_at) values ($1, $2, $3, $4, now() + interval '15 minutes')",
    [email, hash(`${email}:${code}`), hash(linkToken), body.emailUpdates === true],
  );
  const link = new URL("/account/", request.url);
  link.searchParams.set("t", linkToken);
  const next = safeNext(body.next);
  if (next !== "/course/") link.searchParams.set("next", next);
  try {
    await sendLoginEmail({ to: email, code, link: link.toString(), siteName: siteName(), lang: body.lang === "es" ? "es" : "en" });
  } catch (e) {
    console.error("sign-in email failed", e.message);
    return json({ error: "We couldn't send the email just now. Please try again in a minute." }, 502);
  }
  return json({ ok: true });
}
