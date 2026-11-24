import crypto from "node:crypto";
// Small helpers shared by the account functions.
import { SESSION_COOKIE, SESSION_DAYS, SIGNED_IN_COOKIE, accountsEnabled, readCookie, signSession, verifySession } from "../../lib/token.js";

export const enabled = () => accountsEnabled(process.env);

export const json = (data, status = 200, headers = {}) => new Response(JSON.stringify(data), {
  status,
  headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store", ...headers },
});

export const off = () => json({ error: "Accounts are not switched on yet." }, 503);

// Writes only from our own pages (cookies are SameSite=Lax too).
export function sameOrigin(request) {
  const origin = request.headers.get("origin");
  if (!origin) return true; // same-origin fetches from older browsers may omit it; SameSite still applies
  try { return new URL(origin).host === new URL(request.url).host; } catch { return false; }
}

export async function readJson(request) {
  try { return await request.json(); } catch { return {}; }
}

export async function currentUserId(request) {
  const s = await verifySession(readCookie(request.headers.get("cookie"), SESSION_COOKIE), process.env.AUTH_SECRET);
  return s?.uid || null;
}

const secure = (request) => (new URL(request.url).protocol === "https:" ? "; Secure" : "");

export async function sessionCookies(request, userId) {
  const token = await signSession(userId, process.env.AUTH_SECRET);
  const age = SESSION_DAYS * 86400;
  return [
    `${SESSION_COOKIE}=${token}; Path=/; Max-Age=${age}; HttpOnly; SameSite=Lax${secure(request)}`,
    `${SIGNED_IN_COOKIE}=1; Path=/; Max-Age=${age}; SameSite=Lax${secure(request)}`,
  ];
}

export const clearCookies = (request) => [
  `${SESSION_COOKIE}=; Path=/; Max-Age=0; HttpOnly; SameSite=Lax${secure(request)}`,
  `${SIGNED_IN_COOKIE}=; Path=/; Max-Age=0; SameSite=Lax${secure(request)}`,
];

export function withCookies(response, cookies) {
  for (const c of cookies) response.headers.append("set-cookie", c);
  return response;
}

// Keep stored progress small and well-formed: lesson slugs and quiz keys only.
const SLUG = /^[a-z0-9-]{1,120}$/;
const QKEY = /^\/course\/[a-z0-9-]+\/[a-z0-9-]+\/(steps\/)?#\d{1,3}$/;
export function cleanProgress(p) {
  const completed = [...new Set((Array.isArray(p?.completed) ? p.completed : []).filter((s) => typeof s === "string" && SLUG.test(s)))].slice(0, 500);
  const quizzes = {};
  for (const [k, v] of Object.entries(p?.quizzes && typeof p.quizzes === "object" ? p.quizzes : {}).slice(0, 2000)) {
    if (QKEY.test(k) && (v === 0 || v === 1)) quizzes[k] = v;
  }
  return { completed, quizzes };
}

export const normEmail = (e) => String(e || "").trim().toLowerCase();
export const validEmail = (e) => e.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

export const safeNext = (n) => (typeof n === "string" && /^\/[a-z0-9\-/]*$/i.test(n) && !n.startsWith("//") ? n : "/course/");

export const hash = (s) => crypto.createHmac("sha256", process.env.AUTH_SECRET).update(String(s)).digest("hex");
