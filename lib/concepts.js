import registry from '../content/concepts.json' with { type: 'json' };
export const concepts = registry.concepts;
export const sources = registry.sources;
export const conceptIds = new Set(concepts.map(c => c.id));
export { conceptLearningContext, omitUnderstoodDefinitions } from '../src/concept-state.js';
