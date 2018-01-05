---
id: array
title: Array
---
Array manipulation functions

# set
Set a element in a position and creates another array

 - `set (i {number}, item, {any}, arr {array}) : {array}`

```
const fruits = ['banana', 'avocato', 'pineapple'];
const newFruits = _.set(1, 'apple', fruits);

// fruits is ['banana', 'avocato', 'pineapple']
// newFruits is ['banana', 'apple', 'pineapple']
```

# push
Set a element in the end of the array

 - `push (item {any}, arr{array}) : {array}`

```
const fruits = ['banana', 'avocato', 'pineapple'];
const newFruits = _.push('apple', fruits);

// fruits is ['banana', 'avocato', 'pineapple']
// newFruits is ['banana', 'avocato', 'pineapple', 'apple']
```
# unshift
Set a element in the beginning of the array

 - `unshift (item {any}, arr{array}) : {array}`

```
const fruits = ['banana', 'avocato', 'pineapple'];
const newFruits = _.unshift('apple', fruits);

// fruits is ['banana', 'avocato', 'pineapple']
// newFruits is ['apple', 'banana', 'avocato', 'pineapple']
```

# pop
Removes the last element of array

 - `pop (arr{array}) : {array}`

```
const fruits = ['banana', 'avocato', 'pineapple'];
const newFruits = _.pop(fruits);

// fruits is ['banana', 'avocato', 'pineapple']
// newFruits is ['banana', 'avocato']
```
# shift
Removes the first element of array

 - `shift (arr{array}) : {array}`

```
const fruits = ['banana', 'avocato', 'pineapple'];
const newFruits = _.shift(fruits);

// fruits is ['banana', 'avocato', 'pineapple']
// newFruits is ['avocato', 'pineapple']
```

# findAndReplace
Find and replace in array
 - `findAndReplace (arr{array}, item{any}, callback{function}) : {array}`
 - `callback{function} (currentItem{any}, item{any}, index{number}, arr {array}) : {bool}`

Callback needs to return a boolean

```
const fruits = ['banana', 'avocato', 'pineapple'];
const newFruits = _.findAndReplace(fruits, 'apple', fruit => {
    return fruit === 'pineapple';
});

// fruits is ['banana', 'avocato', 'pineapple']
// newFruits is ['banana', 'avocato', 'apple']
```
# concat
Concat many arrays you want

 - `concat (...arr{array}) : {array}`

```
const fruits = _.concat(['banana', 'avocato',], ['pineapple']);

// fruits is ['banana', 'avocato', 'pineapple']
```
# indexOf
Find a index of element

 - `indexOf (item{any}, arr{array}) : {number}`

Return `-1` if not found

```
const fruits = ['banana', 'avocato', 'pineapple'];
const i = _.indexOf('avocato', fruits);

// i is 1
```
# difference
Returns a array with the differents elements of two arrays

 - `difference (arr{array}, values{array}) : {array}`

```
const itens = ['banana', 'house', 'apple', 'car'];
const objects = ['car', 'house'];

const fruits = _.difference(itens, objects);
// fruits is ['banana', 'apple']
```
