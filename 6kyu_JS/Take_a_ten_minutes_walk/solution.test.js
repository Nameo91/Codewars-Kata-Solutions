const isValidWalk = require('./solution');

describe("isValidWalk", () => {
  test("should return false when the walk takes only one minute", () => {
    expect(isValidWalk(['w'])).toBe(false);
  });

  test("should return false when the walk takes two minutes", () => {
    expect(isValidWalk(['w', 's'])).toBe(false);
  });

})