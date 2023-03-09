const duplicateCount = require('./solution');

describe("duplicateCount", () => {
  test("should return 0 with an empty string", () => {
    expect(duplicateCount("")).toBe(0);
  });

  test("should return 0 with no duplicates", () => {
    expect(duplicateCount("abcde")).toBe(0);
  });
})