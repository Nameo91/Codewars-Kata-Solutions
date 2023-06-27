const isPangram = require('./solution');

describe('isPangram', () => {
  test('returns false with one letter', () => {
    expect(isPangram('a')).toBeFalsy();
  });
  test('returns true when it is a pangram', () => {
    expect(isPangram('abcdefghijklmnopqrstuvwxyz')).toBeTruthy();
  });

  test('returns true with some uppercases', () => {
    expect(isPangram("The quick brown fox jumps over the lazy dog")).toBeTruthy();
  });
  test('ignores puncuation or numbers', () => {
    expect(isPangram("The quick brown fox jumps over the lazy dog.")).toBeTruthy();
  })
})