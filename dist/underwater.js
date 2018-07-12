(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["_"] = factory();
	else
		root["_"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _array = __webpack_require__(0);

Object.keys(_array).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _array[key];
    }
  });
});

var _collection = __webpack_require__(2);

Object.keys(_collection).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _collection[key];
    }
  });
});

var _events = __webpack_require__(3);

Object.keys(_events).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _events[key];
    }
  });
});

var _function = __webpack_require__(4);

Object.keys(_function).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _function[key];
    }
  });
});

var _number = __webpack_require__(5);

Object.keys(_number).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _number[key];
    }
  });
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.events = exports.createEventManager = undefined;

var _array = __webpack_require__(0);

var createEventManager = exports.createEventManager = function createEventManager() {
    return {
        events: {},
        register: function register(key, callback) {
            if (!this.events[key]) {
                this.events[key] = [];
            }

            this.events[key] = (0, _array.push)(callback, this.events[key]);
            return this;
        },
        emmit: function emmit(key, args) {
            if (!this.events[key]) {
                throw '[eventManager] there is any event register with the key \'' + key + '\'';
            }

            this.events[key].forEach(function (event) {
                event(args);
            });

            return this;
        }
    };
};

var events = exports.events = createEventManager();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

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

var once = exports.once = function once(callback) {
    var wasCalled = false;

    return function () {
        for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            args[_key4] = arguments[_key4];
        }

        if (!wasCalled) {
            wasCalled = true;
            return callback(args);
        }
    };
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

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
    var isInt = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    var num = Math.random() * (max - min) + min;
    return !isInt ? num : Math.floor(num);
};

var randomGenerator = exports.randomGenerator = function randomGenerator(min, max) {
    var defaultInt = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    return function () {
        var isInt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultInt;
        return random(min, max, isInt);
    };
};

var inRange = exports.inRange = function inRange(start, end) {
    return function (value) {
        return value >= start && value <= end;
    };
};

var zeroPad = exports.zeroPad = function zeroPad(num) {
    var places = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

    var zero = places - num.toString().length + 1;
    return Array(+(zero > 0 && zero)).join('0') + num;
};

/***/ })
/******/ ]);
});
//# sourceMappingURL=main.js.map