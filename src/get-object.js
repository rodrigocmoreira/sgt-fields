const { get } = require('./get');
const { set } = require('./set');

const fieldFunction = (() => {
    const getObject = (object, list) => {
      if (!list || list.length < 1) {
        return undefined;
      }
  
      const newObject = {};
  
      list.forEach((element) => {
        const current = get(object, element);
        if(current) {
          set(newObject, element, current);
        }
      });
      return newObject;
    };
  
    return {
      getObject
    };
  })();
  
  module.exports = fieldFunction;
  