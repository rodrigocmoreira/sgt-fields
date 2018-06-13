const { each } = require('./each');
const { get } = require('./get');
const { getObject } = require('./get-object');
const { set } = require('./set');

const sgtFields = (() => {
  return {
    each,
    get,
    getObject,
    set
  };
})();

module.exports = sgtFields;
