const fieldFunction = (() => {
    const set = (object, key, value) => {
      if (!key || typeof key !== 'string') {
        return object;
      }
  
      if ((typeof object !== 'object' && object !== undefined) || Array.isArray(object)) {
        return object;
      }
  
      const keys = key.split('.');
      const lastIndex = keys.length - 1;
      const result = object || {};
  
      keys.reduce((previous, current, index) => {
        if (index === lastIndex) {
          previous[current] = value;
          return previous[current];
        }
        if (previous[current] && !isPrototypePolluted(current)) {
          return previous[current];
        }
        previous[current] = {};
        return previous[current];
      }, result);
  
      return result;
    };

    const isPrototypePolluted = (key) => ['__proto__', 'constructor', 'prototype'].includes(key);
  
    return {
      set
    };
  })();
  
  module.exports = fieldFunction;
  