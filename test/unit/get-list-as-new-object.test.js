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

  it('Return a newObject from fields inside a list.', () => {
    const expectedObject = {
      name: 'Sargent Fields',
      age: 1,
      info: {
        phone: {
          code: '55'
        }
      }
    };
    const resultObject = getObject(user, [ 'name', 'age', 'info.phone.code' ]);
    assert.deepEqual(resultObject, expectedObject);
  });

  it('Return a newObject from fields inside a list. But one item of the list is not found', () => {
    const expectedObject = {
      name: 'Sargent Fields',
      age: 1
    };
    const resultObject = getObject(user, [ 'name', 'age', 'info.phones.code' ]);
    assert.deepEqual(resultObject, expectedObject);
  });

  it('Return undefined when list is null.', () => {
    const resultObject = getObject(user, null);
    assert.isUndefined(resultObject);
  });

  it('Return undefined when list is empty.', () => {
    const resultObject = getObject(user, []);
    assert.isUndefined(resultObject);
  });
});
