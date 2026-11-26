// Signed session tokens: base64url(JSON payload) + "." + base64url(HMAC-SHA256).
// Uses Web Crypto only, so the same file runs in Routing Middleware (Edge) and in Node functions.
const enc = new TextEncoder();
const b64url = (bytes) => btoa(String.fromCharCode(...new Uint8Array(bytes))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
const fromB64url = (s) => Uint8Array.from(atob(s.replace(/-/g, "+").replace(/_/g, "/")), (c) => c.charCodeAt(0));

const keyFor = (secret) => crypto.subtle.importKey("raw", enc.encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign", "verify"]);

export const SESSION_COOKIE = "tb_session";
export const SIGNED_IN_COOKIE = "tb_in"; // readable by the page, only says "signed in", holds nothing private
export const SESSION_DAYS = 30;

export async function signSession(userId, secret, days = SESSION_DAYS) {
  const payload = b64url(enc.encode(JSON.stringify({ uid: String(userId), exp: Math.floor(Date.now() / 1000) + days * 86400 })));
  const sig = await crypto.subtle.sign("HMAC", await keyFor(secret), enc.encode(payload));
  return `${payload}.${b64url(sig)}`;
}

// Returns { uid } for a valid, unexpired token, otherwise null.
export async function verifySession(token, secret) {
  if (!token || !secret || typeof token !== "string") return null;
  const [payload, sig] = token.split(".");
  if (!payload || !sig) return null;
  try {
    const ok = await crypto.subtle.verify("HMAC", await keyFor(secret), fromB64url(sig), enc.encode(payload));
    if (!ok) return null;
    const data = JSON.parse(new TextDecoder().decode(fromB64url(payload)));
    if (!data.uid || !data.exp || data.exp < Date.now() / 1000) return null;
    return { uid: String(data.uid) };
  } catch {
    return null;
  }
}

export function readCookie(header, name) {
  for (const part of String(header || "").split(";")) {
    const i = part.indexOf("=");
    if (i > 0 && part.slice(0, i).trim() === name) return decodeURIComponent(part.slice(i + 1).trim());
  }
  return null;
}

// Accounts switch on only when every setting is in place, so a half-configured deploy never locks lessons.
export const accountsEnabled = (env) => Boolean(env.AUTH_SECRET && env.DATABASE_URL && env.RESEND_API_KEY && env.EMAIL_FROM);

// Is this /course/<module>/<lesson>/... path open without an account?
export function isFreePath(pathname, access) {
  const m = pathname.replace(/^\/es(?=\/)/, "").match(/^\/course\/([^/]+)\/([^/]+)/);
  if (!m) return true; // the course list and anything outside a lesson
  const [, mod, lesson] = m;
  return access.freeModules.includes(mod) || access.freeLessons.includes(lesson.replace(/\.html$/, ""));
}
