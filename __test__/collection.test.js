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
