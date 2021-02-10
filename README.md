# awesome-typeof

[![NPM Version](https://img.shields.io/npm/v/awesome-typeof.svg?style=flat-square)](https://www.npmjs.com/package/awesome-typeof)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)
[![NPM Downloads](https://img.shields.io/npm/dt/awesome-typeof.svg?style=flat-square)](https://www.npmjs.com/package/awesome-typeof)

Detect JavaScript variable type.

## Install

```sh
npm i awesome-typeof --save
```

## Usage

awesome-typeof accepts two parameters, the first parameter is the object to be detected, the second parameter is an optional mode, the default value is 1, and it can be 0 or 2.

```JavaScript
import typeOf from 'awesome-typeof';
// const typeOf = require('awesome-typeof').default;

typeOf([])
// => "Array"

typeOf([], 0)
// => "object"

typeOf([], 2)
// => "Empty-Array"
```

## About mode

|                               | mode = 0      | mode = 1      | mode = 2                         |
|-------------------------------|---------------|---------------|----------------------------------|
| `123`                         | `"number"`    | `"number"`    | `"number"`                       |
| `NaN`                         | `"number"`    | `"number"`    | `"NaN-number"`                   |
| `Infinity`                    | `"number"`    | `"number"`    | `"Infinity-number"`              |
| `-Infinity`                   | `"number"`    | `"number"`    | `"-Infinity-number"`             |
| `new Number(123)`             | `"object"`    | `"Number"`    | `"Number"`                       |
| `new Number(NaN)`             | `"object"`    | `"Number"`    | `"NaN-Number"`                   |
| `new Number(Infinity)`        | `"object"`    | `"Number"`    | `"Infinity-Number"`              |
| `new Number(-Infinity)`       | `"object"`    | `"Number"`    | `"-Infinity-Number"`             |
| `'123'`                       | `"string"`    | `"string"`    | `"NonEmpty-string"`              |
| `''`                          | `"string"`    | `"string"`    | `"Empty-string"`                 |
| `new String('123')`           | `"object"`    | `"String"`    | `"NonEmpty-String"`              |
| `new String('')`              | `"object"`    | `"String"`    | `"Empty-String"`                 |
| `true`                        | `"boolean"`   | `"boolean"`   | `"boolean"`                      |
| `new Boolean(true)`           | `"object"`    | `"Boolean"`   | `"Boolean"`                      |
| `Symbol(1)`                   | `"symbol"`    | `"symbol"`    | `"symbol"`                       |
| `Object(Symbol(1)) `          | `"object"`    | `"Symbol"`    | `"Symbol"`                       |
| `1n`                          | `"bigint"`    | `"bigint"`    | `"bigint"`                       |
| `Object(1n)`                  | `"object"`    | `"BigInt"`    | `"BigInt"`                       |
| `undefined`                   | `"undefined"` | `"undefined"` | `"undefined"`                    |
| `Object(null)`                | `"null"`      | `"null"`      | `"null"`                         |
| `new Set()`                   | `"object"`    | `"Set"`       | `"Empty-Set"`                    |
| `new Set([1, 2, 3])`          | `"object"`    | `"Set"`       | `"NonEmpty-Set"`                 |
| `new Map()`                   | `"object"`    | `"Map"`       | `"Empty-Map"`                    |
| `new Map([['a', [1, 2, 3]]])` | `"object"`    | `"Map"`       | `"NonEmpty-Map"`                 |
| `[]`                          | `"object"`    | `"Array"`     | `"Empty-Array"`                  |
| `[1,2,3]`                     | `"object"`    | `"Array"`     | `"NonEmpty-Array"`               |
| `function() {}`               | `"object"`    | `"Function"`  | `"Function"`                     |
| `() => 1`                     | `"object"`    | `"Function"`  | `"Arrow-Function" \| "Function"` |
| `class MyClass{}`             | `"object"`    | `"Function"`  | `"Class" \| "Function"`          |
| `new MyClass()`               | `"object"`    | `"MyClass"`   | `"MyClass"`                      |
| `Promise.resolve(1)`          | `"object"`    | `"Promise"`   | `"Promise"`                      |
| `/123/`                       | `"object"`    | `"RegExp"`    | `"RegExp"`                       |
| ..... .                       | ......        | ......        | ......                           |

⚠️ If your code is translated, then when the mode is 2, the judgment result of the arrow function and class may be "Function".