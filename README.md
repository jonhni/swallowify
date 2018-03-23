# swallowify 

![Blazing Fast][fast-badge]

Stop propagation of the current event.

## Install

```
$ npm install --save swallowify
```

## Usage

```js
const swallowify = require('swallowify');

const eventfulFunction = () => {
  /// Much STUFF
}

const swallowPropagationClick = swallowify(eventfulFunction);

```

[fast-badge]: https://img.shields.io/badge/🔥-Blazing%20Fast-red.svg?style=flat-square
