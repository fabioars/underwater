import * as _ from '../src/array';

test('set an element in an array position', () => {
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

test('find and replace an element of array', () => {
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

test('merge 3 array', () => {
    const arr = _.concat([1], [2], [3]);

    expect(arr).toEqual([1, 2, 3]);
});

test('find position of an element of array', () => {
    const result1 = _.indexOf([12, 3, 5, 2, 15], current => {
        return current === 2;
    });

    const result2 = _.indexOf([0, 1, 2], current => {
        return current === 3;
    });

    const result3 = _.indexOf([1, 2, 1, 1, 2], current => {
        return current === 2;
    });

    expect(result1).toBe(3);
    expect(result2).toBe(-1);
    expect(result3).toBe(1);
});

test('difference between arrays', () => {
    expect(_.difference([1, 2, 3], [1, 2])).toEqual([3]);
});

test('remove falsey values of array', () => {
    expect(_.removeFalsey([0, 1, false, 2, '', 3, 'a']))
        .toEqual([1, 2, 3, 'a']);

    expect(_.removeFalsey(['e' * 23, NaN, 's', 34]))
        .toEqual(['s', 34]);
});
