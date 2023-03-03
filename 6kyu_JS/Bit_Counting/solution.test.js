const countBits = require('./solution');

describe("countBits", () => {
  test("should return 0 for 0000", () => {
    expect(countBits(0)).toBe(0);
  });

  test("should return 1 for 0001", () => {
    expect(countBits(1)).toBe(1);
  });

  test("should return 1 for 0010", () => {
    expect(countBits(2)).toBe(1);
  });

  test("should return 1 for 1000", () => {
    expect(countBits(4)).toBe(1);
  });

  test("should return 3 for 0111", () => {
    expect(countBits(7)).toBe(3);
  });

  test("should return 2 for 1001", () => {
    expect(countBits(9)).toBe(2);
  });

  test("should return 2 for 1010", () => {
    expect(countBits(10)).toBe(2);
  });

  test("should return 2 for 1101111", () => {
    expect(countBits(111)).toBe(6);
  });

  test("should return 2 for 10011010010", () => {
    expect(countBits(1234)).toBe(5);
  });
})