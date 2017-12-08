import * as _ from '../events';

test('create a event manager', () => {
    const e = _.createEventManager();

    expect(e).toBeDefined();
});

test('register a event', () => {
    const e = _.createEventManager();

    e.register('my-event', () => []);

    expect(e.events.hasOwnProperty('my-event')).toBe(true);
});

test('emmit a event', () => {
    const e = _.createEventManager();

    e.register('my-event', v => {
        expect(v).toBe(5);
    });

    e.emmit('my-event', 5);
});

test('emmit a event with arguments', () => {
    const e = _.createEventManager();

    e.register('my-event', a => {
        expect(a.value).toBe('the event was called');
    });

    e.emmit('my-event', { value: 'the event was called' });
});

