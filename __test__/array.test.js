import * as _ from '../array';

test('set a element in a array position', () => {
    expect(_.set(2, 0, [1, 1, 1, 1, 1])).toEqual([1, 1, 0, 1, 1]);
});

test('adds new elements to the end of an array', () => {
    expect(_.push(0, [1, 2, 3])).toEqual([1, 2, 3, 0]);
});

test('adds new elements to the begginin of an array', () => {
    expect(_.unshift(0, [1, 2, 3])).toEqual([0, 1, 2, 3]);
});

test('remove last element of array', () => {
    expect(_.pop([1, 2, 3, 4])).toEqual([1, 2, 3]);
});

test('remove first element of array', () => {
    expect(_.shift([1, 2, 3, 4])).toEqual([2, 3, 4]);
});

test('find and replace a element of array', () => {
    const result = _.findAndReplace([1, 2, 3, 2], 0, el => {
        return el === 2;
    });

    expect(result).toEqual([1, 0, 3, 0]);
});

test('concat 2 array', () => {
    const array = [1];
    const other = _.concat(array, [[2]]);

    expect(other).toEqual([1, [2]]);
    expect(array).toEqual([1]);
});

test('find position of a element of array', () => {
    const result1 = _.indexOf(2, [12, 3, 5, 2, 15]);
    const result2 = _.indexOf(3, [0, 1, 2]);
    const result3 = _.indexOf(2, [1, 2, 1, 1, 2]);

    expect(result1).toBe(3);
    expect(result2).toBe(-1);
    expect(result3).toBe(1);
});
