const duplicateCount = require('./solution');

describe("duplicateCount", () => {
  test("should return 0 with an empty string", () => {
    expect(duplicateCount("")).toBe(0);
  })
})