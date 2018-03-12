---
id: number
title: Number
---

Number manipulation functions

# range
Linear interpolation between two number ranges

 - `range (input{array}, output{array}) : {function}`

```js
const ceusius = [0, 100];
const fahrenheit = [32, 212];
const convert = _.range(ceusius, fahrenheit);
const result = convert(38);

// result is 100.4
// 38 ceusius is equivalent 100.4 fahrenheit
```
# bezier
Bezier Algorithm

 - `bezier (points{array}) : {function}`

```js
const b = _.bezier([[0, 0, 0], [1, 1, 1], [2, -3, 6]]);

const pointA = b(0)   // [0, 0, 0]);
const pointB = b(0.5) // [1, -0.25, 2]);
const pointC = b(1)   // [2, -3, 6]);
```

# random
Generate a random number

 - `random (min{number}, max{number}, isInt{!boolean}) : {number}`

```js
const number = _.random(0, 10);
// number can be any float number between 0 and 10

const int = _.random(0, 10, true);
// int can be any integer number between 0 and 10
```

# randomGenerator
Create a random number generator

 - `randomGenerator = (min{number}, max{number}, defaultInt{!boolean}) : {function}`

```js
const generator = _.randomGenerator(0, 10);

const floatRandomNumber = generator();
const integerRandomNumber = generator(true);
```

# inRange

Verify if a number is in range

 - `inRange (start{number}, end{number}) : {function}`

```js
const rangeValidator = _.inRange(0, 10);

const valid = rangeValidator(5);
// valid is true

const notValid = rangeValidator(15);
// notValid is false
```

# zeroPad

Adds zeros to the left of a number

 - `zeroPad (number{number}, zeros{number} = 2) : {string}`

```js
_.zeroPad(2);
// 02

_.zeroPad(10);
// 10

_.zeroPad(10, 3);
// 010
```
