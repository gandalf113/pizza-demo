/**
 * Zamienia wartość liczbową na cenę
 * @param {number} value - liczba do przekonwertowania
 * @returns {string} - liczba w formacie cenowym
 */
 export const toCurrency = (value) => {
    let price = parseFloat(value);
    return price.toFixed(2) + " zł"
}