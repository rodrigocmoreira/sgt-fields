const fieldFunction = (() => {
    const loop = (obj, node, recursive, fn) => {
      Object.keys(obj).forEach((item) => {
        if (recursive && typeof obj[item] === 'object') {
          return loop(obj[item], `${node !== null ? (node + '.') : ''}${item}`, recursive, fn);
        }
        return fn(`${node !== null ? (node + '.') : ''}${item}`, obj[item]);
      });
    }

    return {
      loop
    };
  })();
  
  module.exports = fieldFunction;
  