export const set = (i, item, arr) => [
    ...arr.slice(0, i),
    item,
    ...arr.slice(i + 1)
];

export const push = (item, arr) => [...arr, item];

export const unshift = (item, arr) => [item, ...arr];

export const pop = arr => arr.slice(0, arr.length - 1);

export const shift = arr => arr.slice(1);

export const findAndReplace = (arr, item, callback) =>
    arr.map((el, i) => callback(el, item, i, arr) ? item : el );

export const concat = (...arr) =>
    arr.reduce((prev, current) => [...prev, ...current]);

export const indexOf = (arr, callback) =>
    arr.reduce((v, c, i) => (callback(c, i) && v === -1 ? i : v), -1);

export const difference = (arr, values) => arr.filter(v => !values.includes(v));

export const removeFalsey = arr => arr.filter(Boolean);
