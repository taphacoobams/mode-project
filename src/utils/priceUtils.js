/**
 * Utilitaires pour la gestion des prix
 */

/**
 * Convertit un prix en euros vers francs CFA
 * @param {string} euroPrice - Prix en euros (format: "159,99 €")
 * @returns {string} - Prix en francs CFA (format: "104 993 FCFA")
 */
export const convertEuroToCFA = (euroPrice) => {
  if (!euroPrice) return '';
  
  // Extraire le montant numérique (remplacer la virgule par un point)
  const numericValue = parseFloat(euroPrice.replace('€', '').replace(',', '.').trim());
  
  // Taux de conversion fixe (1 EUR = 655.957 FCFA)
  const exchangeRate = 655.957;
  
  // Calculer le montant en FCFA
  const cfaAmount = Math.round(numericValue * exchangeRate);
  
  // Formater avec des espaces pour les milliers
  return cfaAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' FCFA';
};

/**
 * Formate un prix en francs CFA
 * @param {number} amount - Montant en francs CFA
 * @returns {string} - Prix formaté (ex: "105 000 FCFA")
 */
export const formatCFAPrice = (amount) => {
  return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' FCFA';
};
