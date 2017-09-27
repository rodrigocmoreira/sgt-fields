const sgtFields = (() => {
  const loop = (obj, node, recursive, fn) => {
    Object.keys(obj).forEach((item) => {
      if (recursive && typeof obj[item] === 'object') {
        return loop(obj[item], `${node !== null ? (node + '.') : ''}${item}`, recursive, fn);
      }
      return fn(`${node !== null ? (node + '.') : ''}${item}`, obj[item]);
    });
  }

  const each = (object, fn, recursive) => {
    if (Array.isArray(object)) {
      return object.forEach(fn);
    }
    if (!object) {
      return undefined;
    } 
    return loop(object, null, recursive, fn);
  };

  const get = (object, key) => {
    if (!key || typeof key !== 'string') {
      return undefined;
    }
    const keys = key.split('.');
    return keys.reduce((previous, current) => {
      if (previous && current) {
        return previous[current];
      }
      return undefined;
    }, object);
  };

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
      if (previous[current]) {
        return previous[current];
      }
      previous[current] = {};
      return previous[current];
    }, result);

    return result;
  };

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
    each,
    get,
    getObject,
    set
  };
})();

module.exports = sgtFields;
