import * as _ from '../src/events';

describe('Events', () => {
    let e;

    beforeEach(() => {
        e = _.createEventManager();
    });

    describe('Smoke Tests', () => {
        it('shoud create an event manager', () => {
            expect(e).toBeDefined();
        });

        it('should have a events property defined', () => {
            expect(e.events).toBeDefined();
        });
    });

    describe('Events Manager', () => {
        it('should register an event', () => {
            e.register('my-event', () => []);
            expect(e.events.hasOwnProperty('my-event')).toBe(true);
        });

        it('should emmit an event registered', () => {
            const eventCallback = jest.fn();
            e.register('my-event', eventCallback);
            e.emmit('my-event');

            expect(eventCallback.mock.calls.length).toBe(1);
        });

        it('should emmit an event with arguments', () => {
            const eventCallback = jest.fn();
            e.register('my-event', eventCallback);
            e.emmit('my-event', { value: 'the event was called' });
            expect(eventCallback.mock.calls[0][0].value).toBe('the event was called');
        });

        it('should throw an exception when emits a non existing event', () => {
            expect(() => e.emmit('non-existing-event'))
                .toThrow(/non-existing-event/);
        });
    });
});

describe('global events', () => {
    it('create an event manager', () => {
        expect(_.events).toBeDefined();
        expect(_.events.events).toBeDefined();
    });

    it('register an event', () => {
        _.events.register('my-event', () => []);

        expect(_.events.events.hasOwnProperty('my-event')).toBe(true);
    });

    it('emmit an event', () => {
        _.events.register('my-event-2', v => {
            expect(v).toBe(5);
        });

        _.events.emmit('my-event-2', 5);
    });

    it('emmit an event with arguments', () => {
        _.events.register('my-event-3', a => {
            expect(a.value).toBe('the event was called');
        });

        _.events.emmit('my-event-3', { value: 'the event was called' });
    });
});
