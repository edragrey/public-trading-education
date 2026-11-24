# Accounts: sign-up, saved progress, locked lessons

Readers sign in with their email: they type it, get a 6-digit code (and a one-time link) by email, and that's it. No passwords.
An account saves the lessons they marked complete and their first answer to each quick question, so progress follows them to any device.
Progress saved on a device before signing in is added to the account the first time they sign in.

Lessons in the modules listed in `access.config.js` (now: Start here) are free. Every other lesson, and its guided version, needs an account.
Home, Course list, Articles, Glossary, About and Privacy are always public.

## Switched off until set up

Nothing changes on the live site until **all four** environment variables below are set in Vercel and the site is redeployed.
Until then lessons stay open, progress stays on the device, and there's no Sign in button.

| Variable | What it is |
| --- | --- |
| `DATABASE_URL` | Neon Postgres connection string. Added for you when you connect a Neon database to the project. |
| `RESEND_API_KEY` | API key from resend.com, used only to send the sign-in email. |
| `EMAIL_FROM` | Sender, for example `Trading Basics <hello@mail.yourdomain.com>`. Must be on a domain verified in Resend. |
| `AUTH_SECRET` | A long random string that signs the sign-in cookie. Make one with `openssl rand -base64 32`. Changing it signs everyone out. |

## Set-up steps (once)

1. **Database.** Vercel → project `public-trading-education` → Storage → Create database → Neon. Pick an EU region (Frankfurt). Connect it to Production and Preview. This adds `DATABASE_URL`. Tables are created automatically on first use.
2. **Email.** Make a free account at resend.com → Domains → Add domain, for example `mail.edragrey.com`, region EU (Ireland). Add the DNS records it shows in Vercel → Domains → that domain → DNS records. When Resend says Verified, create an API key with "Sending access".
3. **Env vars.** Vercel → project → Settings → Environment Variables: add `RESEND_API_KEY`, `EMAIL_FROM` and `AUTH_SECRET` for Production and Preview.
4. **Privacy contact.** Fill `privacy.controller` (who runs the site) and `privacy.contactEmail` in `site.config.json`. The privacy notice shows a placeholder until then.
5. **Redeploy** (Deployments → ⋯ → Redeploy). The build log says `Accounts ON`.

## What's stored

`tb_users`: email, created / last sign-in time, email-updates choice (off by default) and when it changed, progress (`{ completed: [lesson slugs], quizzes: { "<page>#<n>": 1 | 0 } }`).
`tb_login_codes`: hashed codes, kept at most a day.
Readers can download all of it (`/api/account/`) and delete their account from `/account/`.

## How it works

- `middleware.js` (Vercel Routing Middleware) checks the signed `tb_session` cookie on `/course/<module>/<lesson>/…` and sends signed-out readers to `/account/?next=…`.
- `api/` holds the functions: `auth/start` (email a code), `auth/verify` (sign in), `auth/logout`, `me`, `progress`, `account` (download, email choice, delete).
- `lib/token.js` signs and checks the cookie (shared by middleware and functions).
- `src/site.js` syncs progress with the account and runs the `/account/` page.
- A sign-in code can be asked for 5 times an hour per email, and each code allows 5 tries.
