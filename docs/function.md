---
id: functions
title: Functions
---

Function management functions

## debounce

![Debounce Algorithm](https://docs.angularjs.org/img/guide/forms-debounce.gif)

 - `debounce = (callback{function}, wait{number}, immediate{boolean:false}) : {function}`

```js
const onChange = _.debounce(e => {
    console.log(e.target.value);
}, 300);

document.querySelector('#name-input').addEventListener('change', onChange);
```

## throttle

![Throttle Algorithm](https://camo.qiitausercontent.com/421e7ab45d8b3826999afde1e4b3e0ef9dcde18e/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e616d617a6f6e6177732e636f6d2f302f36303332352f38303661383162642d623561362d323531632d616663352d3934363037346531616265652e676966)

 - `throttle = (callback{function}, wait{number}, options{!object}) : {function}`

```js
const onChange = _.throttle(e => {
    console.log(window.innerWidth);
}, 300);

window.addEventListener('resize', onChange);
```

## once

Generates a function that you can call it many times you want, but only executes once

 - `once = (callback{function}) : {function}`

```js

const double = d => {
    return d * d;
};

const oneTimeDouble = _.once(double);

oneTimeDouble(2); // returns 4
oneTimeDouble(2); // no return
```
