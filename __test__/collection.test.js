import * as _ from '../src/collection';

test('for each to object properties', () => {
    const obj = {
        a: '1',
        b: '2',
        c: '3'
    };

    const r = _.forEach(obj, (key, value) => {
        expect(obj.hasOwnProperty(key)).toBeTruthy();
        expect(value).toBe(obj[key]);
    });

    expect(r).toEqual(obj);
});

test('for each a array', () => {
    const arr = [1, 2, 3, 4];

    const r = _.forEach(arr, (key, value) => {
        expect(parseInt(key)).toBeLessThan(arr.length);
        expect(value).toBe(arr[key]);
    });

    expect(r).toEqual(arr);
});

test('map a array', () => {
    const arr = [1, 2, 3, 4];

    const m = _.map(arr, (value, key) => {
        expect(arr[key]).toBe(value);
        return `${key}:${value}`;
    });

    expect(m[0]).toBe('0:1');
    expect(m[1]).toBe('1:2');
    expect(m[2]).toBe('2:3');
    expect(m[3]).toBe('3:4');
});

test('map a object', () => {
    const obj = { a: 1, b: 2, c: 3 };

    const m = _.map(obj, (value, key) => {
        return `${key}:${value}`;
    });

    expect(m[0]).toBe('a:1');
    expect(m[1]).toBe('b:2');
    expect(m[2]).toBe('c:3');
});