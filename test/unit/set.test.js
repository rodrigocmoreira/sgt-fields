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
    set(user, 'info.address.city', 'new city');
    assert.strictEqual(user.info.address.city, 'new city');
  });

  it('return the object with the field(second parameter) created and with the value(third parameter) in the object.', () => {
    const result = set(user, 'info.address.city', 'new city');
    assert.strictEqual(result.info.address.city, 'new city');
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



  // it('return undefined, invalid struct second parameter.', () => {
  //   const phoneCode = get(user, 'info.name.code');
  //   assert.isUndefined(phoneCode);
  // });
  //
  // it('return success string value field in the object.', () => {
  //   const phoneCode = get(user, 'info.phone.code');
  //   assert.strictEqual(phoneCode, '55', 'these string are strictly equal.');
  // });
  //
  // it('return success string value field (first nivel) in the object.', () => {
  //   const name = get(user, 'name');
  //   assert.strictEqual(name, 'Sargent Fields', 'these string are strictly equal.');
  // });
  //
  // it('return undefined, parameter object to equal "undefined".', () => {
  //   let undefinedObject;
  //   const phoneCode = get(undefinedObject, 'info.phone.code');
  //   assert.isUndefined(phoneCode);
  // });
  //
  // it('return undefined, parameter object to equal "null".', () => {
  //   let nullObject = null;
  //   const phoneCode = get(nullObject, 'info.phone.code');
  //   assert.isUndefined(phoneCode);
  // });
  //
  // it('return undefined, parameter is not object. (boolean)', () => {
  //   const phoneCode = get(true, 'info.phone.code');
  //   assert.isUndefined(phoneCode);
  // });
  //
  // it('return undefined, parameter is not object. (string)', () => {
  //   const phoneCode = get('test', 'info.phone.code');
  //   assert.isUndefined(phoneCode);
  // });
  //
  // it('return undefined, parameter is not object. (number)', () => {
  //   const phoneCode = get(10, 'info.phone.code');
  //   assert.isUndefined(phoneCode);
  // });
  //
  // it('return undefined, undefined second parameter.', () => {
  //   const phone = get(user);
  //   assert.isUndefined(phone);
  // });
  //
  // it('return undefined, parameter different of "string". (object)', () => {
  //   const phone = get(user, {});
  //   assert.isUndefined(phone);
  // });
  //
  // it('return undefined, parameter different of "string". (boolean)', () => {
  //   const phone = get(user, true);
  //   assert.isUndefined(phone);
  // });
  //
  // it('return undefined, parameter different of "string". (number)', () => {
  //   const phone = get(user, true);
  //   assert.isUndefined(phone);
  // });
  //
  // it('return undefined, parameter different of "string". (null)', () => {
  //   const phone = get(user, true);
  //   assert.isUndefined(phone);
  // });
});
