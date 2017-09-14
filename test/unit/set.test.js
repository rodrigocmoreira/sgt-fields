const ROOT_PATH = process.cwd();
const { set } = require(ROOT_PATH);
const { assert } = require('chai');

describe('set field object', () => {
  let user;

  beforeEach(() => {
    user = {
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
    };
  });

  it('set field object value field in the object. (by reference)', () => {
    const resultExpected = JSON.parse(JSON.stringify(user));
    Object.assign(resultExpected.info.address, { city: 'new city' });

    set(user, 'info.address.city', 'new city');
    assert.deepEqual(user, resultExpected);
  });

  it('return the object with the field(second parameter) created and with the value(third parameter) in the object.', () => {
    const resultExpected = JSON.parse(JSON.stringify(user));
    Object.assign(resultExpected.info.address, { city: 'new city' });

    const result = set(user, 'info.address.city', 'new city');
    assert.deepEqual(result, resultExpected);
  });



  // first parameter invalid
  it('first parameter to equal "undefined" is invalid.', () => {
    const result = set(undefined, 'info.address.city', 'new city');
    assert.deepEqual(result, { info: { address: { city: 'new city' } } });
  });

  it('first parameter to equal "null" is invalid.', () => {
    const result = set(null, 'info.address.city', 'new city');
    assert.deepEqual(result, { info: { address: { city: 'new city' } } });
  });

  it.only('first parameter to equal "string" is invalid.', () => {
    const result = set('test', 'info.address.city', 'new city');
    assert.deepEqual(result, { info: { address: { city: 'new city' } } });
  });





  // second parameter invalid
  it('return object without modifying it, undefined second parameter.', () => {
    const result = set(user);
    assert.deepEqual(result, user);
  });

  it('return object without modifying it, second parameter different of "string". (object)', () => {
    const result = set(user, {});
    assert.deepEqual(result, user);
  });

  it('return object without modifying it, second parameter different of "string". (boolean)', () => {
    const result = set(user, true);
    assert.deepEqual(result, user);
  });

  it('return object without modifying it, second parameter different of "string". (number)', () => {
    const result = set(user, 10);
    assert.deepEqual(result, user);
  });

  it('return object without modifying it, second parameter different of "string". (null)', () => {
    const result = set(user, true);
    assert.deepEqual(result, user);
  });
});
