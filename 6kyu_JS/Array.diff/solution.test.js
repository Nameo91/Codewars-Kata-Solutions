const arrayDiff = require('./solution');

describe("arrayDiff", () => {
  test("should return an empty array with two empty arrays", () => {
    expect(arrayDiff([],[])).toEqual([]);
  });
})