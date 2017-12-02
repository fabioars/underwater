
/**
 *
 * @param {number} i
 * @param {any} item
 * @param {array} arr
 * @returns {array}
 */
export const set = (i, item, arr) => (
    [...arr.slice(0, i), item, ...arr.slice(i + 1)]
);

/**
 *
 * @param {any} item
 * @param {array} arr
 * @returns {array}
 */
export const push = (item, arr) => (
    [...arr, item]
);

/**
 *
 * @param {array} arr
 * @returns {array}
 */
export const pop = arr => arr.slice(0, arr.length - 1);

/**
 *
 * @param {array} arr
 * @returns {array}
 */
export const shift = arr => arr.slice(1);
