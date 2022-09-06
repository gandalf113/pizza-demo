const monthDict = {
    '01': 'styczeń',
    '02': 'luty',
    '03': 'marzec',
    '04': 'kwiecień',
    '05': 'maj',
    '06': 'czerwiec',
    '07': 'lipiec',
    '08': 'sierpień',
    '09': 'wrzesień',
    '10': 'październik',
    '11': 'listopad',
    '12': 'grudzień'
}

/**
 * Zamienia wartość liczbową na cenę
 * @param {number} value - liczba do przekonwertowania
 * @returns {string} - liczba w formacie cenowym
 */
export const toCurrency = (value) => {
    let price = parseFloat(value);
    return price.toFixed(2) + " zł"
}

/**
 *
 * @param {String} isoString
 * @returns {Date}
 */
export const parseISOString = (isoString) => {
    var b = isoString.split(/\D+/);
    return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]));
}
