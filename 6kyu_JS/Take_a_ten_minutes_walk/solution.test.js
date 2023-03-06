const isValidWalk = require('./solution');

describe("isValidWalk", () => {
  test("should return false when the walk takes only one minute", () => {
    expect(isValidWalk(['w'])).toBeFalsy;
  });
})