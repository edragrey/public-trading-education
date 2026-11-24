import { clearCookies, json, withCookies } from "../_lib/http.js";
export async function POST(request) {
  return withCookies(json({ ok: true }), clearCookies(request));
}
