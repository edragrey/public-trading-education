export const CONCEPT_COPY = {
  en: {
    lead: 'Trading concepts, explained in plain language with examples. Keep track of what you understand and what needs another look.',
    understanding: 'My understanding', unmarked: 'Not marked yet', review: 'Needs review', understood: 'Understood',
    filter: 'Show concepts', all: 'All concepts', course: 'Covered in the course', noLesson: 'Not yet linked to a course lesson',
    related: 'Related course material',
    saved: 'Saved on this device. Sign in to sync your choices across devices.', accountSaved: 'Saved to your account.', saving: 'Saving your choices…', loading: 'Loading your understanding checklist…',
    failed: 'Your choices are saved on this device, but account sync failed.', unavailable: 'Could not load your account choices. Please retry before changing them.', retry: 'Retry',
    export: 'Download my concept checklist', noMatch: 'No concepts match these filters. Try another search or choose All concepts.',
    summary: (understood, review, total) => `${understood} understood · ${review} need review · ${total} concepts`,
  },
  es: {
    lead: 'Conceptos de trading explicados con palabras sencillas y ejemplos. Marca lo que entiendes y lo que necesitas repasar.',
    understanding: 'Mi comprensión', unmarked: 'Sin marcar', review: 'Necesito repasarlo', understood: 'Lo entiendo',
    filter: 'Mostrar conceptos', all: 'Todos los conceptos', course: 'Incluido en el curso', noLesson: 'Aún sin lección del curso vinculada',
    related: 'Material relacionado del curso',
    saved: 'Guardado en este dispositivo. Inicia sesión para sincronizar tus marcas entre dispositivos.', accountSaved: 'Guardado en tu cuenta.', saving: 'Guardando tus marcas…', loading: 'Cargando tu lista de comprensión…',
    failed: 'Tus marcas están guardadas en este dispositivo, pero no se han sincronizado con la cuenta.', unavailable: 'No se han podido cargar las marcas de tu cuenta. Reinténtalo antes de cambiarlas.', retry: 'Reintentar',
    export: 'Descargar mi lista de conceptos', noMatch: 'Ningún concepto coincide con estos filtros. Prueba otra búsqueda o muestra todos los conceptos.',
    summary: (understood, review, total) => `${understood} entendidos · ${review} para repasar · ${total} conceptos`,
  },
};
