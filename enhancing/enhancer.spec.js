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

const testObject3 = {
  name: 'Kevin',
  durability: 50,
  enhancement: 0,
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
      expect(enhancer.succeed(testObject).enhancement).toBe(11);
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

  describe('fail()', () => {
    it('should decrease durability by 5 if enhancement < 15', () => {
      expect(enhancer.fail(testObject).durability).toBe(45);
    });

    it('should decrease durability by 10 if enhancement >= 15', () => {
      expect(enhancer.fail(testObject2).durability).toBe(40);
    });

    it('should decrease enhancement by 1 if enhancement > 16', () => {
      expect(enhancer.fail(testObject2).enhancement).toBe(18);
    });
  });

  describe('get()', () => {
    it('should not modify name if enhancement is 0', () => {
      expect(enhancer.get(testObject3).name).toBe('Kevin');
    });

    it('should add the enhancement to name if enhancement is more than 0', () => {
      expect(enhancer.get(testObject).name).toBe('[+10] Kevin');
    });
  });
});
