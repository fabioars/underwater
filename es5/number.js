"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 *
 * @param {array} input
 * @param {array} output
 */
var range = exports.range = function range(input, output) {
  return function (value) {
    return output[0] + (value - input[0]) * (output[1] - output[0]) / (input[1] - input[0]);
  };
};

/**
 * FIXME: To use const
 * @param {array} pts
 */
var bezier = exports.bezier = function bezier(pts) {
  return function (t) {
    var a = pts,
        b = [],
        i = 0,
        j = 0;

    for (a = pts; a.length > 1; a = b) {
      for (i = 0, b = [], j; i < a.length - 1; i++) {
        for (b[i] = [], j = 0; j < a[i].length; j++) {
          b[i][j] = a[i][j] * (1 - t) + a[i + 1][j] * t;
        }
      }
    }return a[0];
  };
};

/**
 *
 * @param {number} min
 * @param {number} max
 */
var random = exports.random = function random(min, max) {
  return Math.random() * (max - min) + min;
};

/**
 *
 * @param {number} min
 * @param {number} max
 */
var randomInt = exports.randomInt = function randomInt(min, max) {
  return Math.floor(random(min, max));
};

/**
 *
 * @param {number} min
 * @param {number} max
 */
var randomGenerator = exports.randomGenerator = function randomGenerator(min, max) {
  return function () {
    return random(min, max);
  };
};

/**
 *
 * @param {number} value
 * @param {number} start
 * @param {number} end
 * @returns {boolean}
 */
var inRange = exports.inRange = function inRange(value, start, end) {
  return value >= start && value <= end;
};