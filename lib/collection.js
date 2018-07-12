'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var forEach = exports.forEach = function forEach(collection, iteratee) {
    var isArray = collection.isArray ? collection.isArray() : Object.prototype.toString.call(collection) === '[object Array]';

    if (isArray) {
        collection.forEach(function (value, key) {
            iteratee(value, parseInt(key), collection);
        });
    } else if ((typeof collection === 'undefined' ? 'undefined' : _typeof(collection)) === 'object') {
        for (var prop in collection) {
            iteratee(collection[prop], prop, collection);
        }
    } else {
        throw new Error('[forEach] do not support type ' + (typeof collection === 'undefined' ? 'undefined' : _typeof(collection)));
    }
    return collection;
};

var each = exports.each = forEach;

var map = exports.map = function map(collection, iteratee) {
    var result = [];

    forEach(collection, function (value, key, collection) {
        result.push(iteratee(value, key, collection));
    });

    return result;
};

var filter = exports.filter = function filter(collection, iteratee) {
    var result = [];

    forEach(collection, function (value, key) {
        var isFound = iteratee(value, key, collection);
        if (isFound) {
            result.push(value);
        }
    });

    return result;
};

var reduce = exports.reduce = function reduce(collection, iteratee) {
    var initial = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    var reduced = initial;

    forEach(collection, function (value, key) {
        reduced = iteratee(reduced, value, key, collection);
    });

    return reduced;
};