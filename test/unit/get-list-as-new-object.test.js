const ROOT_PATH = process.cwd();
const { getObject } = require(ROOT_PATH);
const { assert } = require('chai');

describe('get object from a list of fields', () => {
  const user = {
    name: 'Sargent Fields',
    age: 1,
    info: {
      address: {
        name: 'name address',
        number: 55
      },
      phone: {
        code: '55',
        number: '3697841231'
      }
    }
  }

  it.only('Return a newObject from fields inside a list.', () => {
    const expectedObject = {
      name: 'Sargent Fields',
      age: 1,
      info: {
        phone: {
          code: '55'
        }
      }
    };
    const resultObject = getObject(user, [ 'name', 'age', 'info.phones.code' ]);
    assert.strictEqual(expectedObject, resultObject);
  });
});
