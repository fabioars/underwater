import * as _ from '../src/function';

test('debounce timing', () => {
    const ref = {
        value: 1
    };

    const f = _.debounce(val => {
        ref.value = val;
    }, 100);

    f(3);
    f(2);

    expect(ref.value).toBe(1);

    setTimeout(() => {
        expect(ref.value).toBe(2);
    }, 200);
});

test('throttle timing', () => {
    const ref = {
        value: 1
    };

    const f = _.throttle(val => {
        ref.value = val;
    }, 100);

    f(3);
    f(2);

    expect(ref.value).toBe(1);

    setTimeout(() => {
        expect(ref.value).toBe(2);
    }, 200);
});

