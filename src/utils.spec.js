import { sum } from './utils';

describe('utils', () => {
  describe('sum', () => {
    it('sum', () => {
      expect(sum(1, 2)).toBe(3);
    });
  });
});
