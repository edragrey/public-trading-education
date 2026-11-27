// Local editorial check. Does not fetch URLs, call AI, publish or store the transcript.
import fs from 'node:fs';
import { concepts, sources } from '../lib/concepts.js';
import { cleanConceptStates, conceptLearningContext } from '../src/concept-state.js';
const args = process.argv.slice(2);
const option = name => { const i = args.indexOf(name); return i >= 0 ? args[i + 1] : null; };
const file = option('--file');
if (!file) { console.error('Usage: node tools/transcript-concepts.mjs --file transcript.txt [--progress my-concept-checklist.json] [--lang es]'); process.exit(1); }
const text = fs.readFileSync(file, 'utf8');
const progressFile = option('--progress');
const exported = progressFile ? JSON.parse(fs.readFileSync(progressFile, 'utf8')) : {};
const progress = cleanConceptStates(exported.concepts || exported.progress?.concepts);
const language = option('--lang') === 'es' ? 'es' : 'en';
const matched = conceptLearningContext(text, concepts, progress, language);
const describe = c => ({ id: c.id, term: c.term, glossary: `https://public-trading-education.vercel.app${c.url}`, courseCoverage: concepts.find(x => x.id === c.id).courseCoverage, lessons: concepts.find(x => x.id === c.id).lessons });
console.log(JSON.stringify({
  note: 'Matches known vocabulary only. Read the full transcript to identify genuinely new concepts. No understanding is inferred from course coverage.',
  progressAvailable: Boolean(progressFile),
  reinforce: matched.filter(c => c.status === 'review').map(describe),
  alreadyUnderstood: matched.filter(c => c.status === 'understood').map(describe),
  alreadyInLibrary: matched.filter(c => c.status === 'unmarked' && c.previouslyCovered).map(describe),
  otherKnownConcepts: matched.filter(c => c.status === 'unmarked' && !c.previouslyCovered).map(describe),
  previousVideos: sources,
}, null, 2));
