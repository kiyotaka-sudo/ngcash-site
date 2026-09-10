/**
 * Normalise un numéro de téléphone pour une URL WhatsApp.
 * Supprime tous les caractères non numériques (ex: espaces, +, -).
 * @param {string} rawNumber - Numéro brut
 * @returns {string} Numéro propre pour wa.me
 */
export function normalizePhoneNumber(rawNumber) {
  return rawNumber.replace(/[^\d]/g, '');
}
