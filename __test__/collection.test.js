import * as _ from '../collection';

test('for each to object properties', () => {
    const obj = {
        a: '1',
        b: '2',
        c: '3'
    };

    _.forEach(obj, (key, value) => {
        expect(key).toBeTruthy();
        expect(value).toBeTruthy();
    });
});

test('for each a array', () => {
    const arr = [1, 2, 3, 4];

    _.forEach(arr, (key, value) => {
        expect(key).toBeTruthy();
        expect(value).toBeTruthy();
    });
});
