const countBits = require('./solution');

describe("countBits", () => {
  test("should return 0 for 0000", () => {
    expect(countBits(0)).toBe(0);
  });

  test("should return 1 for 0001", () => {
    expect(countBits(1)).toBe(1);
  })
})