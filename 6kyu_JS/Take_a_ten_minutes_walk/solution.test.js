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

  test("should return false when not returning to starting point in 10 movemnets", () => {
    expect(isValidWalk(['n','s','n','s','n','s','n','n','n','n'])).toBe(false);
  });

  test("should return false when not returning to starting point in 10 movemnets", () => {
    expect(isValidWalk(['w','e','w','e','w','e','w','w','w','w'])).toBe(false);
  });

  test("should return false when not returning to starting point in 10 movemnets", () => {
    expect(isValidWalk(['w','e','n','s','w','e','n','s','w','w'])).toBe(false);
  });

  test("should return true when returning to starting point in 10 movemnets", () => {
    expect(isValidWalk(['w','e','n','s','w','e','n','s','w','e'])).toBe(true);
  });

  // test("should return false for more than 10 movemnets", () => {
  //   expect(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e'])).toBe(false);
  // });
})