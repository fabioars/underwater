import * as _ from '../src/collection';

test('for each to object properties', () => {
    const obj = {
        a: '1',
        b: '2',
        c: '3'
    };

    const r = _.forEach(obj, (value, key) => {
        expect(obj.hasOwnProperty(key)).toBeTruthy();
        expect(value).toBe(obj[key]);
    });

    expect(r).toEqual(obj);
});

test('for each an array', () => {
    const arr = [1, 2, 3, 4];

    const r = _.forEach(arr, (value, key) => {
        expect(parseInt(key)).toBeLessThan(arr.length);
        expect(value).toBe(arr[key]);
    });

    expect(r).toEqual(arr);
});

it('should throw an error if non suported collection', () => {
    expect(() => _.each('string', () => {})).toThrow();
});

test('map an array', () => {
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

test('map an object', () => {
    const obj = { a: 1, b: 2, c: 3 };

    const m = _.map(obj, (value, key) => {
        return `${key}:${value}`;
    });

    expect(m[0]).toBe('a:1');
    expect(m[1]).toBe('b:2');
    expect(m[2]).toBe('c:3');
});

test('find an object in an array', () => {
    const arr = [
        { id: 1, name: 'Fabio' },
        { id: 2, name: 'Ingrid' },
        { id: 3, name: 'Eddy' },
    ];

    const result = _.filter(arr, item => item.id === 1);

    expect(result[0].name).toBe('Fabio');
});

test('can\'t find an object in an array', () => {
    const arr = [
        { id: 1, name: 'Fabio' },
        { id: 2, name: 'Ingrid' },
        { id: 3, name: 'Eddy' },
    ];

    const result = _.filter(arr, item => item.id === 5);

    expect(result.length).toBe(0);
});

test('find an object in an object', () => {
    const obj = {
        user1: { id: 1, name: 'Fabio' },
        user2: { id: 2, name: 'Ingrid' },
        user3: { id: 3, name: 'Eddy' },
    };

    const result = _.filter(obj, item => item.id === 1);

    expect(result[0].name).toBe('Fabio');
});

test('can\'t find an object in an object', () => {
    const obj = {
        user1: { id: 1, name: 'Fabio' },
        user2: { id: 2, name: 'Ingrid' },
        user3: { id: 3, name: 'Eddy' },
    };

    const result = _.filter(obj, item => item.id === 5);

    expect(result.length).toBe(0);
});
