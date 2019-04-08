const enhancer = require('./enhancer.js');
// test away!

const testObject = {
  name: 'Kevin',
  durability: 50,
  enhancement: 10,
};
const testObject2 = {
  name: 'Kevin',
  durability: 50,
  enhancement: 20,
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

  describe('succeed()', () => {
    it('should increase enhancement by 1', () => {
      expect(enhancer.succeed(testObject).enhancement).toBe(
        testObject.enhancement < 20 ? testObject.enhancement + 1 : 20,
      );
    });

    it('should not increase if enhancement is already 20', () => {
      expect(enhancer.succeed(testObject2).enhancement).toBe(20);
    });

    it('should not change durability', () => {
      expect(enhancer.succeed(testObject).durability).toBe(
        testObject.durability,
      );
    });
  });
});
