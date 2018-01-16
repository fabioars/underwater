"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var debounce = exports.debounce = function debounce(callback, wait) {
    var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    var time = void 0;

    return function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var later = function later() {
            time = null;

            !immediate ? callback(args) : null;
        };

        clearTimeout(time);
        time = setTimeout(later, wait);

        immediate && !time ? callback(args) : null;
    };
};

var throttle = exports.throttle = function throttle(callback, wait) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    var state = {
        timeout: null,
        previus: 0,
        result: undefined
    };

    var later = function later() {
        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
        }

        state.previous = options.leading === false ? 0 : Date.now();
        state.timeout = null;
        state.result = callback(args);
    };

    return function () {
        for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
        }

        var now = Date.now();
        if (!state.previous && options.leading === false) state.previous = now;

        var remaining = wait - (now - state.previous);

        if (remaining <= 0) {
            clearTimeout(state.timeout);
            state.timeout = null;
            state.previous = now;
            state.result = callback(args);
        } else if (!state.timeout && options.trailing !== false) {
            state.timeout = setTimeout(later, remaining);
        }

        return state.result;
    };
};