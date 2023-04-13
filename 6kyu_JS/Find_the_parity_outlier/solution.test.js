const findOutlier = require('./solution');

describe("findOutlier", () => {
  it("returns one odd outlier", () => {
    expect(findOutlier([2, 4, 5])).toBe(5);
  })

  it("returns one even outlier", () => {
    expect(findOutlier([1,2,3])).toBe(2);
  })

  it("returns one odd outlier", () => {
    expect(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36])).toBe(11);
  })

  it("returns one even outlier", () => {
    expect(findOutlier([160, 3, 1719, 19, 11, 13, -21])).toBe(160);
  })

  it("returns one odd outlier", () => {
    expect(findOutlier([1,3,5,7,9,-10,11])).toBe(-10);
  })
})