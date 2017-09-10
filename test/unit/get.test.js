const ROOT_PATH = process.cwd();
const { get } = require(ROOT_PATH);
const { assert } = require('chai');

describe('get field object', () => {
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

  it('return success object value field in the object.', () => {
    const phone = get(user, 'info.phone');
    assert.deepEqual(phone, user.info.phone);
  });

  it('return undefined, invalid struct second parameter.', () => {
    const phoneCode = get(user, 'info.name.code');
    assert.isUndefined(phoneCode);
  });

  it('return success string value field in the object.', () => {
    const phoneCode = get(user, 'info.phone.code');
    assert.strictEqual(phoneCode, '55', 'these string are strictly equal.');
  });

  it('return success string value field (first nivel) in the object.', () => {
    const name = get(user, 'name');
    assert.strictEqual(name, 'Sargent Fields', 'these string are strictly equal.');
  });

  it('return undefined, parameter object to equal "undefined".', () => {
    let undefinedObject;
    const phoneCode = get(undefinedObject, 'info.phone.code');
    assert.isUndefined(phoneCode);
  });

  it('return undefined, parameter object to equal "null".', () => {
    let nullObject = null;
    const phoneCode = get(nullObject, 'info.phone.code');
    assert.isUndefined(phoneCode);
  });

  it('return undefined, parameter is not object. (boolean)', () => {
    const phoneCode = get(true, 'info.phone.code');
    assert.isUndefined(phoneCode);
  });

  it('return undefined, parameter is not object. (string)', () => {
    const phoneCode = get('test', 'info.phone.code');
    assert.isUndefined(phoneCode);
  });

  it('return undefined, parameter is not object. (number)', () => {
    const phoneCode = get(10, 'info.phone.code');
    assert.isUndefined(phoneCode);
  });

  it('return undefined, undefined second parameter.', () => {
    const phone = get(user);
    assert.isUndefined(phone);
  });

  it('return undefined, parameter different of "string". (object)', () => {
    const phone = get(user, {});
    assert.isUndefined(phone);
  });

  it('return undefined, parameter different of "string". (boolean)', () => {
    const phone = get(user, true);
    assert.isUndefined(phone);
  });

  it('return undefined, parameter different of "string". (number)', () => {
    const phone = get(user, true);
    assert.isUndefined(phone);
  });

  it('return undefined, parameter different of "string". (null)', () => {
    const phone = get(user, true);
    assert.isUndefined(phone);
  });
});
