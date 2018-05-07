'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.events = exports.createEventManager = undefined;

var _array = require('./array');

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