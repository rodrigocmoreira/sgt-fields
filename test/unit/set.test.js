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

  it('first parameter to equal "undefined" is invalid.', () => {
    const result = set(undefined, 'info.address.city', 'new city');
    assert.deepEqual(result, { info: { address: { city: 'new city' } } });
  });

  it('first parameter to equal "null" is invalid.', () => {
    const result = set(null, 'info.address.city', 'new city');
    assert.deepEqual(result, { info: { address: { city: 'new city' } } });
  });

  it('first parameter to equal "string" is invalid.', () => {
    const result = set('test', 'info.address.city', 'new city');
    assert.strictEqual(result, 'test');
  });

  it('first parameter to equal "array" is invalid.', () => {
    const result = set([1, 2, 3], 'info.address.city', 'new city');
    assert.deepEqual(result, [1, 2, 3]);
  });

  it('first parameter to equal "boolean" is invalid.', () => {
    const result = set(true, 'info.address.city', 'new city');
    assert.isTrue(result);
  });

  it('first parameter to equal "number" is invalid.', () => {
    const result = set(23.6, 'info.address.city', 'new city');
    assert.strictEqual(result, 23.6);
  });

  it('first parameter to equal "function" is invalid.', () => {
    const result = set(() => { return true }, 'info.address.city', 'new city');
    assert.isFunction(result);
  });

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

  it('third parameter to equal "array".', () => {
    const result = set({}, 'info.address.city', [1, 2, 3]);
    assert.deepEqual(result, { info: { address: { city: [1, 2, 3] } } });
  });

  it('third parameter to equal "number".', () => {
    const result = set({}, 'info.address.city', 1);
    assert.deepEqual(result, { info: { address: { city: 1 } } });
  });

  it('third parameter to equal "string".', () => {
    const result = set({}, 'info.address.city', 'test');
    assert.deepEqual(result, { info: { address: { city: 'test' } } });
  });

  it('third parameter to equal "boolean".', () => {
    const result = set({}, 'info.address.city', true);
    assert.deepEqual(result, { info: { address: { city: true } } });
  });

  it('third parameter to equal "object".', () => {
    const result = set({}, 'info.address.city', { a: { b: 'b' } });
    assert.deepEqual(result, { info: { address: { city: { a: { b: 'b' } } } } });
  });

  it('third parameter to equal "undefined".', () => {
    const result = set({}, 'info.address.city');
    assert.deepEqual(result, { info: { address: { city: undefined } } });
  });

  it('third parameter to equal "null".', () => {
    const result = set({}, 'info.address.city', null);
    assert.deepEqual(result, { info: { address: { city: null } } });
  });
});
