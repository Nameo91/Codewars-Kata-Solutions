const duplicateCount = require('./solution');

describe("duplicateCount", () => {
  test("should return 0 with an empty string", () => {
    expect(duplicateCount("")).toBe(0);
  });

  test("should return 0 with no duplicates", () => {
    expect(duplicateCount("abcde")).toBe(0);
  });

  test("should return 1", () => {
    expect(duplicateCount("abbcde")).toBe(1);
  });

  test("should return 2", () => {
    expect(duplicateCount("aabbcde")).toBe(2);
  });

  test("should return 1", () => {
    expect(duplicateCount("indivisibility")).toBe(1);
  });

  test("should return 2 as it is case insensitive", () => {
    expect(duplicateCount("aabBcde")).toBe(2);
  });

  test("should return 2 as it is case insensitive", () => {
    expect(duplicateCount("Indivisibilities")).toBe(2);
  });
})