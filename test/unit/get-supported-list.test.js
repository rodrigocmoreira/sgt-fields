const ROOT_PATH = process.cwd();
const { get } = require(ROOT_PATH);
const { assert } = require('chai');

describe('get field supported list object', () => {
  const user = {
    info: {
      phones: [{
        code: '11',
        number: '3697841231'
      }, {
        code: '22',
        number: '3697841231'
      }]
    }
  };

  it('Return "string" of fields from given position of array.', () => {
    const result = get(user, 'info.phones.0.code');
    assert.strictEqual(result, '11');
  });

  it('Return "object" of fields from given position of array.', () => {
    const result = get(user, 'info.phones.1');
    assert.deepEqual(result, user.info.phones[1]);
  });

  it('Return undefined. Invalid position array.', () => {
    const result = get(user, 'info.phones.10');
    assert.isUndefined(result);
  });
});
