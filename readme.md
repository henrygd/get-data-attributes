# get-data-attributes [![npm][npm-image]][npm-url] [![File Size][size-image]][cdn-url]

[npm-image]: https://badgen.net/npm/v/get-data-attributes
[npm-url]: https://www.npmjs.com/package/get-data-attributes
[size-image]: https://badgen.net/badgesize/gzip/henrygd/get-data-attributes/master/dist/get-data-attributes.iife.js
[cdn-url]: https://cdn.jsdelivr.net/npm/get-data-attributes/dist/get-data-attributes.iife.js

Minimal function that returns an element's data attributes as an object.

Make sure you escape your attributes if they're not extremely simple.

https://henrygd.me/get-data-attributes

## Install

```
$ npm install get-data-attributes
```

## Usage

```js
import getDataAttributes from 'get-data-attributes'
```

```html
<div
	id="example"
	data-example="one"
	data-my-string="it is a string"
	data-my-array='["one", true, 3]'
	data-my-object='{"The Last of Us": 10, "The Last of Us Part II": 10, "10 of 10 games": ["The Last of Us", "The Last of Us Part II"]}'
></div>
```

```js
let data = getDataAttributes(document.getElementById('example'))

// data will be this
{
  example: "one",
  myString: "it is a string",
  myArray: [
    "one",
    true,
    3
  ],
  myObject: {
    "The Last of Us": 10,
    "The Last of Us Part II": 10,
    "10 of 10 games": [
      "The Last of Us",
      "The Last of Us Part II"
    ]
  }
}
```

## License

MIT
