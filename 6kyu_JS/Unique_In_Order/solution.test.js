const uniqueInOrder = require('./solution');

describe("uniqueInOrder", () => {
  it("returns the given array when it doesn't have duplicates", () => {
    expect(uniqueInOrder(['A'])).toEqual(['A']);
  })

  it("returns the given array of number without duplicates", () => {
    expect(uniqueInOrder([1])).toEqual([1]);
  })

  it("returns the array of letters without duplicates", () => {
    expect(uniqueInOrder(['A', 'B', 'C'])).toEqual(['A', 'B', 'C']);
  })

  it("returns the array of numbers without duplicates", () => {
    expect(uniqueInOrder([1, 2, 3])).toEqual([1, 2, 3]);
  })

  it("returns the array of each letter from a string", () => {
    expect(uniqueInOrder('ABC')).toEqual(['A', 'B', 'C']);
  })

  it("returns the array of each letter after removing any duplicates", () => {
    expect(uniqueInOrder(['A', 'A', 'B', 'C'])).toEqual(['A', 'B', 'C']);
  })

  it("returns the array of numbers after removing any duplicates", () => {
    expect(uniqueInOrder([1, 1, 2, 2, 3, 3, 4, 4, 5, 5])).toEqual([1, 2, 3, 4, 5]);
  })

  it("returns the array of numbers after removing any duplicates", () => {
    expect(uniqueInOrder('AAAaaaBBBbbbCCCccc')).toEqual(['A', 'a', 'B', 'b', 'C', 'c']);
  })
})