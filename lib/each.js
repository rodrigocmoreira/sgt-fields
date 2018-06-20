const { loop } = require('./loop');

const fieldFunction = (() => {
    const each = (object, fn, recursive) => {
      if (Array.isArray(object)) {
        return object.forEach(fn);
      }
      if (!object) {
        return undefined;
      } 
      return loop(object, null, recursive, fn);
    };
  
    return {
      each
    };
  })();
  
  module.exports = fieldFunction;
  