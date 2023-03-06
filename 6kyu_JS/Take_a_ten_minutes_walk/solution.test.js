const isValidWalk = require('./solution');

describe("isValidWalk", () => {
  test("should return false when the walk takes only one minute", () => {
    expect(isValidWalk(['w'])).toBe(false);
  });

  test("should return false when the walk takes two minutes", () => {
    expect(isValidWalk(['w', 's'])).toBe(false);
  });

  test("should return false when the walk takes three minutes", () => {
    expect(isValidWalk(['n', 'n', 's'])).toBe(false);
  });

  test("should return true when the walk returns to starting point in 10 movemnets", () => {
    expect(isValidWalk(['n','s','n','s','n','s','n','s','n','s'])).toBe(true);
  });

  test("should return true when the walk returns to starting point in 10 movemnets", () => {
    expect(isValidWalk(['w','e','w','e','w','e','w','e','w','e'])).toBe(true);
  });
})