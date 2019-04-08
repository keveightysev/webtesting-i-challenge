const enhancer = require('./enhancer.js');
// test away!

const testObject = {
  name: 'Kevin',
  durability: 50,
  enhancement: 10,
};

describe('enhancer.js', () => {
  describe('repair()', () => {
    it('should restore durability to 100', () => {
      expect(enhancer.repair(testObject)).toEqual(
        expect.objectContaining({
          durability: 100,
        }),
      );
    });
  });
});
