const arrayDiff = require('./solution');

describe("arrayDiff", () => {
  test("should return an empty array with two empty arrays", () => {
    expect(arrayDiff([],[])).toEqual([]);
  });

  test("should return an empty array with nothing to be removed", () => {
    expect(arrayDiff([],[1])).toEqual([]);
  });

  test("should return the original array when taking out nother", () => {
    expect(arrayDiff([1],[])).toEqual([1]);
  });

  test("should remove one value in the second array from the first one", () => {
    expect(arrayDiff([1,2],[1])).toEqual([2]);
  });

  test("should remove all values", () => {
    expect(arrayDiff([1,2,2,2,3],[2])).toEqual([1,3]);
  });

  test("should remove two values in the second array", () => {
    expect(arrayDiff([1,2,2,2,3],[1,2])).toEqual([3]);
  });
})