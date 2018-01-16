import { push } from './array';

export const createEventManager = () => {
    return {
        events: {},
        register(key, callback) {
            if (!this.events[key]) {
                this.events[key] = [];
            }

            this.events[key] = push(callback, this.events[key]);
            return this;
        },
        emmit(key, args) {
            if (!this.events[key]) {
                throw new Error(`[eventManager] there is any event register with the key ${key}`);
            }

            this.events[key].forEach(event => {
                event(args);
            });

            return this;
        }
    };
};

export const events = createEventManager();
