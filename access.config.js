// Which course pages are open without an account. Everything else under /course/<module>/<lesson>/
// needs a free account once accounts are switched on (see docs/accounts.md).
// The course list (/course/), Home, Articles, Glossary, About and Privacy are always public.
// Spanish pages (/es/...) follow the same rules.
export default {
  // Every lesson (and its guided version) in these modules is free.
  freeModules: ["start-here"],
  // Extra single lessons that are free, by slug.
  freeLessons: ["why-a-correct-forecast-can-still-lose-money"],
};
