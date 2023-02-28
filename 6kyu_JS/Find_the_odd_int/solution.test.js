const findOdd = require("./solution");

describe("findOdd", () => {
  test("should return 7", () => {
    expect(findOdd([7])).toBe(7);
  });

  test("should return 0", () => {
    expect(findOdd([0])).toBe(0);
  });
});