/**
 * Calcule le pourcentage de frais basé uniquement sur le pays de départ.
 * - Maroc : 6% (0.06)
 * - Autres pays : 10% (0.10)
 *
 * @param {string} fromCountry - Le nom du pays de départ
 * @returns {number} Le pourcentage sous forme décimale (ex: 0.06)
 */
export function getFeePercentage(fromCountry) {
  return fromCountry === 'Maroc' ? 0.06 : 0.10;
}
