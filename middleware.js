// Vercel Routing Middleware: lessons need a signed-in account, except the free ones in access.config.js.
// It does nothing until accounts are switched on (all env vars set), so the site keeps working as before.
import { next } from "@vercel/functions";
import access from "./access.config.js";
import { SESSION_COOKIE, accountsEnabled, isFreePath, readCookie, verifySession } from "./lib/token.js";

export const config = { matcher: ["/course/:module/:path+"] };

export default async function middleware(request) {
  const env = process.env;
  const url = new URL(request.url);
  if (!accountsEnabled(env) || isFreePath(url.pathname, access)) return next();
  const session = await verifySession(readCookie(request.headers.get("cookie"), SESSION_COOKIE), env.AUTH_SECRET);
  if (session) return next({ headers: { "cache-control": "private, no-store" } });
  const to = new URL("/account/", url);
  to.searchParams.set("next", url.pathname);
  return Response.redirect(to, 302);
}
