const findOutlier = require('./solution');

describe("findOutlier", () => {
  it("returns one odd outlier", () => {
    expect(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36])).toBe(11);
  })
})