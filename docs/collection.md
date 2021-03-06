---
id: collection
title: Collection
---

Collection manipulation functions

## forEach or each

Iterate through all elements of a collection

```js
const obj = { a: '1', b: '2', c: '3' };
_.forEach(obj, (value, key) => {
    console.log(value, key);
});
// a1, b2, c3


const arr = ['a', 'b', 'c'];
_.each(arr, (value, key) => {
    console.log(value, key);
});
// 0a, 1b, 3c
```

## map

Create a new array with a collection as base

```js
const arr = [1, 2, 3, 4];
const m = _.map(arr, (value, key) => {
    return `${key}:${value}`;
});
// m is ['0:1', '1:2', '2:3', '3:4']

const obj = { a: 1, b: 2, c: 3 };
const om = _.map(arr, (value, key) => {
    return `${key}:${value}`;
});
// om is ['a:1', 'b:2', 'c:3']
```

## filter

Filter a collection

 - `filter (arr{array}, iteratee{function}): {array}`
 - `iteratee{function} (currentItem{any}, key{string|number}, collection{array|object}) : {bool}`

```js
const arr = [
    { id: 1, name: 'Fabio' },
    { id: 2, name: 'Ingrid' },
    { id: 3, name: 'Eddy' },
];

const result = _.filter(arr, item => item.id === 1);

// result is [{ id:1, name: 'Fabio'}]
```

## reduce

Reduce a collection

 - `reduce (collection, iteratee{function}, initial{any}): {array}`
 - `iteratee{function} (lastValue{any}, currentItem{any}, key{string|number}, collection{array|object}) : {any}`

```js
const obj = {
    'prop-1': 2,
    'prop-3': 4,
    'prop-5': 6
};
    
const result = _.reduce(obj, (subtotal, current) => subtotal + current, 0);
// result is 12
```
