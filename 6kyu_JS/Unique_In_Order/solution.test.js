const uniqueInOrder = require('./solution');

describe("uniqueInOrder", () => {
  it("returns the given array when it doesn't have duplicates", () => {
    expect(uniqueInOrder(['A'])).toBe(['A'])
  })
})