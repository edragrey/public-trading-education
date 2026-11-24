// Which course pages are open without an account. Everything else under /course/<module>/<lesson>/
// needs a free account once accounts are switched on (see docs/accounts.md).
// The course list (/course/), Home, Articles, Glossary, About and Privacy are always public.
export default {
  // Every lesson (and its guided version) in these modules is free.
  freeModules: ["start-here"],
  // Extra single lessons that are free, by slug, for example "what-a-price-is".
  freeLessons: [],
};
