import * as _ from '../src/events';

describe('event manager', () => {
    const e = _.createEventManager();

    it('create an event manager', () => {
        expect(e).toBeDefined();
        expect(e.events).toBeDefined();
    });

    it('register an event', () => {
        e.register('my-event', () => []);

        expect(e.events.hasOwnProperty('my-event')).toBe(true);
    });

    it('emmit an event', () => {
        e.register('my-event-2', v => {
            expect(v).toBe(5);
        });

        e.emmit('my-event-2', 5);
    });

    it('emmit an event with arguments', () => {
        e.register('my-event-3', a => {
            expect(a.value).toBe('the event was called');
        });

        e.emmit('my-event-3', { value: 'the event was called' });
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
