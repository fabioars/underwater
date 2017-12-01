

/**
 *  How to use
 *  const myArr = [1, 2, 3, 4, 5, 6];
 *  const newArray = set(2, 42, myArr);
 *  console.log(newArray);
 *  output: Array [ 1, 2, 42, 4, 5, 6 ]
 *
 * @param {number} i
 * @param {any} item
 * @param {array} arr
 */
export const set = (i, item, arr) => (
    [...arr.slice(0, i), item, ...arr.slice(i + 1)]
);

/**
 *
 * @param {any} item
 * @param {array} arr
 */
export const push = (item, arr) => (
    [...arr, item]
);

/**
 *
 * @param {array} arr
 */
export const pop = arr => arr.slice(0, arr.length - 1);

/**
 *
 * @param {array} arr
 */
export const shift = arr => arr.slice(1);

