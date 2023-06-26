const toCamelCase = require('./solution');

describe("toCamelCase", () => {
  test("returns the original lowercase letter", () => {
    expect(toCamelCase('a')).toEqual('a');
  });
})