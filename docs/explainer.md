# Explain: public-content learning tool

Routes: `/explain/` and `/es/explain/`. Linked in navigation and on the home page. Uses the existing brand, fonts and device-aware light/dark themes. No private desk connection or data.

## What works

- Paste a transcript/article (120–60,000 characters) or open a `.txt`, `.srt` or `.vtt` file (up to 250 KB).
- Try a YouTube video URL. Captions are best effort, not a guaranteed YouTube integration. Captions can be unavailable or blocked from datacenter IPs; the page asks for pasted text instead, never analyzes a title as though it watched a video. Shorts, live and youtu.be URLs normalize to a watch URL. No video-file uploads yet.
- Choose a beginner or basic-knowledge explanation in English or Spanish.
- Read the main argument, expandable definitions and hypothetical examples, reported observations versus interpretations/predictions/recommendations, caveats and takeaway. Observations are explicitly unverified, not certified facts.
- Ask follow-up questions grounded in the same source, and copy the breakdown.
- Explore a clearly labelled, hand-written example with no account or AI call.

## Activation (not enabled just by publishing static pages)

The existing free-account system must be configured first: `DATABASE_URL`, `AUTH_SECRET`, `RESEND_API_KEY`, `EMAIL_FROM`; see `docs/accounts.md`. This is intentional: an unrestricted public AI endpoint could spend the owner's API credit. Do not bypass the gate to make a demo look live. Enabling accounts also activates the existing course access rules; review those before launch.

Add server-only `OPENAI_API_KEY`. Optional `EXPLAINER_MODEL` defaults to `gpt-4.1-mini` (Responses API with strict structured outputs); optional `EXPLAINER_DAILY_LIMIT` defaults to 100 global requests/day and is clamped to 1–1000. Each account gets 10 requests/day. Attempts, caption lookups that fail, and follow-up questions consume a request. Limits reset at the database's next calendar day. They limit request count, not a monetary budget; set a provider-side project budget as well.

Never commit credentials or expose them in browser code. No new credentials or paid services are provisioned by this change. A missing configuration returns a translated, honest setup message and leaves the sample usable. Set a real controller and contact in `site.config.json` before opening accounts.

`tb_explainer_usage` is created with the existing public account schema. Atomic upserts enforce daily ceilings across concurrent serverless instances. There is one rolling date/count record per account and one global record, not stored transcripts. Account deletion cascades to its usage; the account export includes its count/date. No transcript, answer, question or source URL is persisted, logged by application code, put in URLs, or sent to the private desk. AI requests use `store: false`, which is not a guarantee of zero provider-side retention. Privacy notices in both languages disclose processing.

## Safety boundaries

Same-origin JSON POST only; verified existing account session; request size cap; safe YouTube host/path allowlist and redirects rejected; bounded caption downloads; request timeouts; no arbitrary URL fetching. Source and question are untrusted data in a separate model input. Strict output schema plus server validation. Provider text is escaped when rendered, never treated as HTML. Source excerpts must exist verbatim and total at most 25 words. No independent fact-checking or current market research is claimed. Cancelling a browser request does not guarantee cancellation of a provider request already running.

## Development and verification

`npm ci`, `npm test`, `npm run build`. `npm run dev:explain` serves the built site and real route at `http://127.0.0.1:4173/explain/` (loopback only; no authentication bypass). Without env settings this previews the sample and error states, not live AI generation. Existing `npm run dev` still serves static pages only. Tests use fake provider responses; they do not spend API credit. Live provider/database integration still needs verification after activation.

Production: publish through the existing GitHub/Vercel workflow only after review/approval. No new hosting platform is needed. The public site's production environment had no configured variables when checked on 27 November 2026.
