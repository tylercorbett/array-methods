const { map } = require('../lib/index');
const { filter } = require('../lib/index');
const { indexOf } = require('../lib/index');
const { reduce } = require('../lib/index');
const { every } = require('../lib/index');

describe('array methods', () => {
  
  describe('assumptions', () => {
    describe('map', () => {
      it('adds 3 to each number', () => {
        const plusThree = [1, 2, 3].map(ele => {
          return ele + 3;
        });
        expect(plusThree).toEqual([4, 5, 6]);
      });
      it('adds 3 to each number and skips holes', () => {
        const arr = [1, 2, , 3];
        const results = arr.map(ele => {
          return ele + 3;
        });
        expect(results).toEqual([4, 5, , 6]);
      });
    });
    describe('filter', () => {
      it('takes out odd numbers', () => {
        const filtered = [1, 2, 3].filter(ele => {
          return ele % 2 === 0;
        });
        expect(filtered).toEqual([2]);
      });
    });
    describe('findIndex', () => {
      it('finds first index greater than 4', () => {
        const indexed = [1, 2, 3, 4, 5, 6, 7, 8].findIndex(ele => {
          return ele > 4;
        });
        expect(indexed).toEqual(4);
      });
    });
    describe('reduce', () => {
      it('adds all numbers together', () => {
        const reduced = [1, 2, 3].reduce((acc, ele) => {
          return acc += ele;
        }, 0);
        expect(reduced).toEqual(6);
      });
    });
    describe('every', () => {
      it('returns true if all items are greater than 0', () => {
        const results = [1, 2, 3].every(ele => {
          return ele > 0;
        });
        expect(results).toEqual(true);
      });
    });
  });

  describe('implementation', () => {
    describe('map', () => {
      it('can double every item in an array', () => {
        const results = map([2, 4, 6], ele => {
          return ele * 2;
        });
        expect(results).toEqual([4, 8, 12]);
      });
      it('doubles every item and skips holes', () => {
        const results = map([1, 2, , 3], ele => {
          return ele * 2;
        });
        expect(results).toEqual([2, 4, , 6]);
      });
    });
    describe('filter', () => {
      it('remove even numbers from an array', () => {
        const results = filter([1, 2, 3, 4, 5, 6, 7, 8], ele => {
          return ele % 2 !== 0;
        });
        expect(results).toEqual([1, 3, 5, 7]);
      });
    });
    describe('indexOf', () => {
      it('returns first index greater than 3', () => {
        const results = indexOf([1, 2, 3, 4, 5, 6], ele => {
          return ele > 3;
        });
        expect(results).toEqual(3);
      });
    });
    describe('reduce', () => {
      it('adds all numbers in array together', () => {
        const results = reduce([1, 2, 3], (acc, ele) => {
          return acc += ele;
        }, 0);
        expect(results).toEqual(6);
      });
    });
    describe('every', () => {
      it('returns true if every number is greater than 0', () => {
        const results = every([1, 2, 3], ele => {
          return ele > 0;
        });
        expect(results).toEqual(true);
      });
    });
  });
});
