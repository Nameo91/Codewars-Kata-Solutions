const duplicateEncode = require("./solution");

describe("duplicateEncode", () => {
  test("should return encoded string without duplicates", () => {
    expect(duplicateEncode('a')).toBe('(');
  })

  test("should return encoded string without duplicates", () => {
    expect(duplicateEncode('ab')).toBe('((');
  })
})