const findOutlier = require('./solution');

describe("findOutlier", () => {
  it("returns one odd outlier", () => {
    expect(findOutlier([2, 4, 5])).toBe(5);
  })

  it("returns one even outlier", () => {
    expect(findOutlier([1,2,3])).toBe(2);
  })
})