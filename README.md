# swallowify 
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

