const countBits = require('./solution');

describe("countBits", () => {
  test("should return 0", () => {
    expect(countBits(0)).toBe(0);
  });
})