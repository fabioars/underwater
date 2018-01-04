import * as _ from '../src/number';

test('gerate a range function', () => {
    const range = _.range([1, 2], [2, 1]);

    expect(range).toBeDefined();
});

test('use a range function', () => {
    const range = _.range([0, 1], [0, 10]);

    expect(range(0)).toBe(0);
    expect(range(1)).toBe(10);
    expect(range(0.5)).toBe(5);
});

test('generate a random number', () => {
    const num = _.random(0, 10);

    expect(num).toBeGreaterThanOrEqual(0);
    expect(num).toBeLessThanOrEqual(10);
});

test('generate a random integer', () => {
    const num = _.randomInt(0, 10);

    expect(num).toBeGreaterThanOrEqual(0);
    expect(num).toBeLessThanOrEqual(10);
});

test('generate a random generator', () => {
    const generator = _.randomGenerator(0, 10);

    expect(generator).toBeDefined();
    expect(generator()).toBeGreaterThanOrEqual(0);
    expect(generator()).toBeLessThanOrEqual(10);
});

test('bezier algorithm', () => {
    const b = _.bezier([[0, 0, 0], [1, 1, 1], [2, -3, 6]]);

    expect(b).toBeDefined();
    expect(b(0)).toEqual([0, 0, 0]);
    expect(b(0.5)).toEqual([1, -0.25, 2]);
    expect(b(1)).toEqual([2, -3, 6]);
});

test('check if value is in range', () => {
    expect(_.inRange(5, 0, 10)).toBeTruthy();
    expect(_.inRange(-5, 0, 10)).toBeFalsy();
});
