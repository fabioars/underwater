import * as _ from '../array';

test('set a element in a array position', () => {
    expect(_.set(2, 0, [1, 1, 1, 1, 1])).toEqual([1, 1, 0, 1, 1]);
});

test('adds new elements to the end of an array', () => {
    expect(_.push(0, [1, 2, 3])).toEqual([1, 2, 3, 0]);
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
