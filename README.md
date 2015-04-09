#  [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-url]][daviddm-image]

> wire.js plugin to get environment variables in wire spec

## Description

Plugin for the [wire.js] IOC container to apply values of environment variables
while resolving the wire spec.

The plugin provides a `getenv` wire factory.

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

Apply `getenv` factory in spec

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

## Note

The `getenv` factory doesn't work within the definition of `literal`
components because the options of `literal` components are not
further resolved by [wire.js]. This is the intended operation of the built in `literal` factory of [wire.js].  (The same is true for other factory keywords than `getenv` 
within `literal` components.)

To workaround this stick with direct declaration of object literals without `literal` factory.

## License

MIT © [Volker Möbius]()


[npm-url]: https://npmjs.org/package/getenv-wire
[npm-image]: https://badge.fury.io/js/getenv-wire.svg
[travis-url]: https://travis-ci.org/vmoebius/getenv-wire
[travis-image]: https://travis-ci.org/vmoebius/getenv-wire.svg?branch=master
[daviddm-url]: https://david-dm.org/vmoebius/getenv-wire.svg?theme=shields.io
[daviddm-image]: https://david-dm.org/vmoebius/getenv-wire
[wire.js]: https://github.com/cujojs/wire
