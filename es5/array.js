"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 *
 * @param {number} i index
 * @param {any} item item that should be placed
 * @param {array} arr array
 * @returns {array}
 */
var set = exports.set = function set(i, item, arr) {
  return [].concat(_toConsumableArray(arr.slice(0, i)), [item], _toConsumableArray(arr.slice(i + 1)));
};

/**
 *
 * @param {any} item
 * @param {array} arr
 * @returns {array}
 */
var push = exports.push = function push(item, arr) {
  return [].concat(_toConsumableArray(arr), [item]);
};

var unshift = exports.unshift = function unshift(item, arr) {
  return [item].concat(_toConsumableArray(arr));
};

/**
 *
 * @param {array} arr
 * @returns {array}
 */
var pop = exports.pop = function pop(arr) {
  return arr.slice(0, arr.length - 1);
};

/**
 *
 * @param {array} arr
 * @returns {array}
 */
var shift = exports.shift = function shift(arr) {
  return arr.slice(1);
};

/**
 *
 * @param {array} arr
 * @param {any} item
 * @param {function} callback
 */
var findAndReplace = exports.findAndReplace = function findAndReplace(arr, item, callback) {
  return arr.map(function (el, i) {
    return callback(el, i, arr) ? item : el;
  });
};

/**
 *
 * @param {array} arr
 */
var concat = exports.concat = function concat() {
  for (var _len = arguments.length, arr = Array(_len), _key = 0; _key < _len; _key++) {
    arr[_key] = arguments[_key];
  }

  return arr.reduce(function (prev, current) {
    return [].concat(_toConsumableArray(prev), _toConsumableArray(current));
  });
};

/**
 *
 * @param {any} item
 * @param {array} arr
 */
var indexOf = exports.indexOf = function indexOf(item, arr) {
  return arr.reduce(function (v, c, i) {
    return c === item && v === -1 ? i : v;
  }, -1);
};

/**
 *
 * @param {array} arr
 * @param {array} values
 */
var difference = exports.difference = function difference(arr, values) {
  return arr.filter(function (v) {
    return !values.includes(v);
  });
};