---
id: collection
title: Collection
---

Collection manipulation functions

## forEach

Iterate through all elements of a collection

```js
const obj = { a: '1', b: '2', c: '3' };
_.forEach(obj, (key, value) => {
    console.log(key, value);
});
// a1, b2, c3


const arr = ['a', 'b', 'c'];
_.forEach(arr, (key, value) => {
    console.log(key, value);
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
