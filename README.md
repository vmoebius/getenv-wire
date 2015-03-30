#  [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-url]][daviddm-image]

> wire.js plugin to get environment variables in wire spec


## Install

```sh
$ npm install --save getenv-wire
```


## Usage

Register plugin in wire.js spec

```js
"$plugins": [
	{"module": "getenv-wire"}
]
```

Apply getenv factory in spec

Short form

```js
"property": {
    "getenv": "VARIABLE"
}
```

Long form with optional default value

```js
"property": {
    "getenv": {
        "variable": "VARIABLE",
        "default": "DEFAULT_VALUE"
    }
}
```

## License

MIT © [Volker Möbius]()


[npm-url]: https://npmjs.org/package/getenv-wire
[npm-image]: https://badge.fury.io/js/getenv-wire.svg
[travis-url]: https://travis-ci.org/vmoebius/getenv-wire
[travis-image]: https://travis-ci.org/vmoebius/getenv-wire.svg?branch=master
[daviddm-url]: https://david-dm.org/vmoebius/getenv-wire.svg?theme=shields.io
[daviddm-image]: https://david-dm.org/vmoebius/getenv-wire
