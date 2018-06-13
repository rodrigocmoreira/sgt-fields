const ROOT_PATH = process.cwd();
const { get, each } = require(ROOT_PATH);
const { assert } = require('chai');

describe('each field object', () => {
  const user = {
    name: 'Sargent Fields',
    age: 1,
    info: {
      adress: {
        name: 'name adress',
        number: 55
      },
      phone: {
        code: '55',
        number: '3697841231'
      }
    }
  }

  it(' object - return only root field names and values.', () => {
    let count = 0;
    each(user, (field, value) => {
        assert.strictEqual(value, user[field]);
        assert.typeOf(value, typeof user[field])
        count++;
    }, false);
    assert.strictEqual(count, 3);
  });

  it(' object - return root and nested field names and values.', () => {
    let count = 0;
    each(user, (field, value) => {
        assert.strictEqual(value, get(user, field));
        assert.typeOf(value, typeof get(user, field))
        count++;
    }, true);
    assert.strictEqual(count, 6);
  });

  it(' array - behave like a regular array forEach loop.', () => {
    const arr = [4, 8, 15, 16, 23, 42];
    let count = 0;
    each(arr, (item, index) => {
      assert.strictEqual(item, arr[index]);
      count++;
    });
    assert.strictEqual(count, arr.length);
  });

  it(' input is not object or array - return undefined', () => {
    each(null, (field) => {
      assert.strictEqual(undefined, field);
    });
  });
});
