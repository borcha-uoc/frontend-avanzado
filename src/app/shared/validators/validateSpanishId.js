/**
 * Returns the type of document and checks its validity.
 *
 * Usage:
 *         validate(str);
 *
 *       > validate('kfhdsjf');
 *       { type: 'UNKNOWN', valid: false }
 *
 *       > validate('12345678Z');
 *       { type: 'DNI', valid: true }
 *
 *       > validate('Y2345678Z');
 *       { type: 'NIE', valid: true }
 *
 *       > validate('R4738481C');
 *       { type: 'CIF', valid: true }
 *
 * The algorithm is adapted from other solutions found at:
 * - http://www.compartecodigo.com/javascript/validar-nif-cif-nie-segun-ley-vigente-31.html
 * - http://es.wikipedia.org/wiki/C%C3%B3digo_de_identificaci%C3%B3n_fiscal
 * - https://gist.github.com/afgomez/5691823
*/

const DNI_REGEX = /^(\d{8})([A-Z])$/;
const CIF_REGEX = /^([ABCDEFGHJKLMNPQRSUVW])(\d{7})([0-9A-J])$/;
const NIE_REGEX = /^[XYZ]\d{7,8}[A-Z]$/;

const DNI = 'DNI';
const CIF = 'CIF';
const NIE = 'NIE';
const UNKNOWN = 'UNKNOWN';

/**
 * Ensure upcase and remove whitespace
 *
 * @param {String} str
 * @returns {String} spain id formated
 */
function formatSpainId(str) {
  return str.toUpperCase().replace(/\s/, '');
}

/**
 * Get type of the spain id
 *
 * @param {String} str
 * @returns {String} DNI, CIF, NIE, UNKNOWN
 */
function spainIdType(str) {
  if (str.match(DNI_REGEX)) {
    return DNI;
  }
  if (str.match(CIF_REGEX)) {
    return CIF;
  }
  if (str.match(NIE_REGEX)) {
    return NIE;
  }
  return UNKNOWN;
}

/**
 * Check validity of DNI number
 *
 * @param {String} dni
 * @returns {boolean} true if valid
 */
function isValidDNI(dni) {
  const DNI_LETTERS = 'TRWAGMYFPDXBNJZSQVHLCKE';
  const dniDigit = parseInt(dni, 10);
  const dniChecksum = dniDigit % 23;
  const letter = DNI_LETTERS.charAt(dniChecksum);
  return letter === dni.charAt(8);
}

/**
 * Check validity of NIE number
 *
 * @param {String} nie
 * @returns {boolean} true if valid
 */
function isValidNIE(nie) {
  const niePrefix = nie.charAt(0);
  const nieWithoutPrefix = nie.substr(1);

  if (niePrefix === 'X') {
    return isValidDNI(`0${nieWithoutPrefix}`);
  }
  if (niePrefix === 'Y') {
    return isValidDNI(`1${nieWithoutPrefix}`);
  }
  if (niePrefix === 'Z') {
    return isValidDNI(`2${nieWithoutPrefix}`);
  }

  return false;
}

/**
 * Check validity of CIF number
 *
 * @param {String} cif
 * @returns {boolean} true if valid
 */
function isValidCIF(cif) {
  const match = cif.match(CIF_REGEX);

  const letter = match[1];
  const number = match[2];
  const control = match[3];

  let evenSum = 0;
  let oddSum = 0;

  for (let i = 0; i < number.length; i++) {
    let n = parseInt(number[i], 10);
    // Odd positions (Even index equals to odd position. i=0 equals first position)
    if (i % 2 === 0) {
      // Odd positions are multiplied first.
      n *= 2;
      // If the multiplication is bigger than 10 we need to adjust
      oddSum += n < 10 ? n : n - 9;
    // Even positions
    // Just sum them
    } else {
      evenSum += n;
    }
  }

  const controlDigit = (10 - (evenSum + oddSum).toString().substr(-1));
  const controlLetter = 'JABCDEFGHI'.substr(controlDigit, 1);

  if (letter.match(/[ABEH]/)) {
    return control === controlDigit;
  }

  if (letter.match(/[KPQS]/)) {
    return control === controlLetter;
  }

  return control === controlDigit || control === controlLetter;
}

/**
 * Validate the spain id number with the type
 *
 * @param {String} spainId
 * @returns {Object} { type: {String}, valid: {boolean} }
 */
function validate(spainId) {
  const formattedSpainId = formatSpainId(spainId);
  const type = spainIdType(formattedSpainId);

  let valid = false;

  if (type === DNI) {
    valid = isValidDNI(formattedSpainId);
  }

  if (type === NIE) {
    valid = isValidNIE(formattedSpainId);
  }

  if (type === CIF) {
    valid = isValidCIF(formattedSpainId);
  }

  return { type, valid };
}

module.exports = {
  validate,
};
