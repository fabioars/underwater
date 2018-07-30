"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var set = exports.set = function set(i, item, arr) {
    return [].concat(_toConsumableArray(arr.slice(0, i)), [item], _toConsumableArray(arr.slice(i + 1)));
};

var push = exports.push = function push(item, arr) {
    return [].concat(_toConsumableArray(arr), [item]);
};

var unshift = exports.unshift = function unshift(item, arr) {
    return [item].concat(_toConsumableArray(arr));
};

var pop = exports.pop = function pop(arr) {
    return arr.slice(0, arr.length - 1);
};

var shift = exports.shift = function shift(arr) {
    return arr.slice(1);
};

var findAndReplace = exports.findAndReplace = function findAndReplace(arr, item, callback) {
    return arr.map(function (el, i) {
        return callback(el, item, i, arr) ? item : el;
    });
};

var concat = exports.concat = function concat() {
    for (var _len = arguments.length, arr = Array(_len), _key = 0; _key < _len; _key++) {
        arr[_key] = arguments[_key];
    }

    return arr.reduce(function (prev, current) {
        return [].concat(_toConsumableArray(prev), _toConsumableArray(current));
    });
};

var indexOf = exports.indexOf = function indexOf(arr, callback) {
    return arr.reduce(function (v, c, i) {
        return callback(c, i) && v === -1 ? i : v;
    }, -1);
};

var difference = exports.difference = function difference(arr, values) {
    return arr.filter(function (v) {
        return !values.includes(v);
    });
};

var removeFalsey = exports.removeFalsey = function removeFalsey(arr) {
    return arr.filter(Boolean);
};

var slide = exports.slide = function slide(arr, start, end) {
    return [].concat(_toConsumableArray(arr)).slice(start, end);
};