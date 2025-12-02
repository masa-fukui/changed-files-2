import { formatDate, capitalize } from '../src/utils/helpers';

describe('helpers', () => {
  describe('formatDate', () => {
    it('should format date correctly', () => {
      const date = new Date('2025-12-02');
      expect(formatDate(date)).toBe('2025-12-02');
    });
  });

  describe('capitalize', () => {
    it('should capitalize first letter', () => {
      expect(capitalize('hello')).toBe('Hello');
    });
  });
});
