'use strict';
module.exports = function(fn) {
  return typeof fn === 'function'
    ? function(event) {
        event.stopPropagation();
        return fn(event);
      }
    : function() {
        return false;
      };
};
