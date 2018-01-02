'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 *
 * @param {array|object} collection
 * @param {function} callback
 */
var forEach = exports.forEach = function forEach(collection, callback) {
    var isArray = collection.isArray && collection.isArray();
    if (isArray) {
        collection.forEach(function (value, key) {
            callback(key, value, collection);
        });
    } else if ((typeof collection === 'undefined' ? 'undefined' : _typeof(collection)) === 'object') {
        for (var prop in collection) {
            callback(prop, collection[prop], collection);
        }
    } else {
        throw new Error('[forEach] do not support type ' + (typeof collection === 'undefined' ? 'undefined' : _typeof(collection)));
    }
    return collection;
};