// Shared by the page and the account API. Reading a lesson never implies understanding.
export const CONCEPT_STATES = ['unmarked', 'review', 'understood'];
export function cleanConceptStates(value, allowed) {
  const out = {};
  if (!value || typeof value !== 'object' || Array.isArray(value)) return out;
  for (const [id, entry] of Object.entries(value).slice(0, 500)) {
    const status = typeof entry === 'string' ? entry : entry?.status;
    if (!/^[a-z0-9-]{1,100}$/.test(id) || (allowed && !allowed.has(id)) || !CONCEPT_STATES.includes(status)) continue;
    out[id] = { status };
  }
  return out;
}

// Existing account choices win when a device first joins an account.
export function mergeFirstConceptSync(local, server) {
  return { ...cleanConceptStates(local), ...cleanConceptStates(server) };
}

export function normalizeConceptText(value) {
  return String(value).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
}

export function matchConcepts(text, concepts) {
  const source = ` ${normalizeConceptText(text)} `;
  const matches = [];
  for (const concept of concepts) {
    const names = concept.matchAliases || [...Object.values(concept.terms), ...(concept.aliases || [])];
    for (const needle of new Set(names.map(normalizeConceptText))) {
      if (needle.length < 3) continue;
      let start = source.indexOf(` ${needle} `);
      while (start !== -1) {
        matches.push({ id: concept.id, start: start + 1, end: start + 1 + needle.length });
        start = source.indexOf(` ${needle} `, start + 1);
      }
    }
  }
  // Do not treat "Index" inside "Fear and Greed Index" as a separate topic.
  matches.sort((a, b) => a.start - b.start || b.end - a.end);
  const found = new Set();
  let outer = null;
  for (const match of matches) {
    const covered = outer && outer.id !== match.id && outer.end >= match.end && outer.end - outer.start > match.end - match.start;
    if (!covered) found.add(match.id);
    if (!outer || match.end > outer.end) outer = match;
  }
  return concepts.filter(c => found.has(c.id));
}

export function conceptLearningContext(text, concepts, progress = {}, language = 'en') {
  const states = cleanConceptStates(progress);
  return matchConcepts(text, concepts).map(c => ({
    id: c.id, term: c.terms[language], aliases: [...Object.values(c.terms), ...(c.aliases || [])],
    status: states[c.id]?.status || 'unmarked',
    previouslyCovered: Boolean(c.sources?.length), inCourse: c.courseCoverage === 'covered',
    url: `${language === 'es' ? '/es' : ''}/glossary/#concept-${c.id}`,
  }));
}

// Definitions can be omitted; claims, warnings and corrections must never be filtered away.
export function omitUnderstoodDefinitions(result, context) {
  return { ...result, concepts: result.concepts.filter(c => {
    const name = normalizeConceptText(c.term);
    return !context.some(known => known.status === 'understood' && known.aliases.some(a => normalizeConceptText(a) === name));
  }) };
}
