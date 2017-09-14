# sgt-fields

Find the property in your object with Sargent Fields

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install sgt-fields --save
```

## Usage

```js
var sgtFields = require('sgt-fields');
```

Get property on object:

```js
var object = {
  a: {
    b: {
      c: 'test'
    }
  }
}
var result = sgtFields.get(object, 'c');
//=> result = 'test'
```

Set or add property on object:
```js
var object = {
  a: {
  }
}
var result = sgtFields.get(object, 'a.b.c', 'test');
//=> result = { a: { b: { c: 'test' } } }
//=> object = { a: { b: { c: 'test' } } }
```
