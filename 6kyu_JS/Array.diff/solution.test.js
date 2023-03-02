const arrayDiff = require('./solution');

describe("arrayDiff", () => {
  test("should return an empty array with two empty arrays", () => {
    expect(arrayDiff([],[])).toEqual([]);
  });

  test("should return an empty array with nothing to be removed", () => {
    expect(arrayDiff([],[1])).toEqual([]);
  })
})