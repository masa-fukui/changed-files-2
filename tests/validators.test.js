import { isValidEmail, isValidUrl } from '../src/utils/validators';

describe('validators', () => {
  test('isValidEmail should validate email addresses', () => {
    expect(isValidEmail('test@example.com')).toBe(true);
    expect(isValidEmail('invalid')).toBe(false);
  });

  test('isValidUrl should validate URLs', () => {
    expect(isValidUrl('https://example.com')).toBe(true);
    expect(isValidUrl('not a url')).toBe(false);
  });
});
