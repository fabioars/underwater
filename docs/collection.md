---
id: collection
title: Collection
---

Collection manipulation functions
## forEach

Iterate through all elements of a collection

```
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
