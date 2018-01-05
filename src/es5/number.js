"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var range = exports.range = function range(input, output) {
    return function (value) {
        return output[0] + (value - input[0]) * (output[1] - output[0]) / (input[1] - input[0]);
    };
};

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

var random = exports.random = function random(min, max) {
    var int = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    var num = Math.random() * (max - min) + min;
    return !int ? num : Math.floor(num);
};

var randomGenerator = exports.randomGenerator = function randomGenerator(min, max) {
    return function () {
        var int = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        return random(min, max, int);
    };
};

var inRange = exports.inRange = function inRange(value, start, end) {
    return value >= start && value <= end;
};