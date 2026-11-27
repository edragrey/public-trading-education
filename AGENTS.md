# Public Trading Education

Keep this public education site separate from the private crypto desk. Never put private trades, transcripts, credentials, or individual learners' understanding marks in public content files.

## Every video/transcript explanation

Read `docs/transcript-learning.md` and `content/concepts.json` before explaining a new transcript. This is a standing user preference, not an optional summary format.

- Match English/Spanish terms and aliases to canonical concept IDs; do not create duplicate entries for translations or abbreviations.
- Check the actual course lesson before claiming a concept is covered. Related material is not full coverage.
- Do not repeat definitions already explained in earlier reviewed videos and present in the glossary. Give a compact glossary/course reference instead.
- Prioritize genuinely new concepts and concepts explicitly marked `review`. For reinforcement, use a different analogy or example rather than repeating the same wording.
- Concepts marked `understood` need no basic re-explanation unless requested. Still explain genuinely new applications and correct a misleading claim from the video.
- An unmarked concept is unknown, not mastered. Completing a lesson does not establish understanding.
- Obtain personal marks only from an authorized account response or the reader's exported checklist. If unavailable, say so; never pretend to know their saved state.
- Add missing concepts in both glossary languages, add their canonical metadata/aliases, and record the public video reference. Do not copy full transcripts or validate a speaker's price forecast by repeating it.

The automatic Explain tool uses account marks to omit understood definitions. Chat agents must apply the editorial rules above as well.

## Verification

`npm ci`, `npm test`, `npm run build`. Preserve existing work from other agents. Public publishing needs user approval. Sign-up activation is separate work and may still be waiting for the owner to finish Brevo key creation.
