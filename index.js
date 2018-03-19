'use strict';
module.exports = function(fn) {
  return function(event) {
    event.stopPropagation();
    return typeof fn === 'function' && fn(event);
  };
};