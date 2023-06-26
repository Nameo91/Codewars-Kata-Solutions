const toCamelCase = require('./solution');

describe("toCamelCase", () => {
  test("returns the original lowercase letter", () => {
    expect(toCamelCase('a')).toEqual('a');
  });

  test("returns the uppercase letter", () => {
    expect(toCamelCase('A')).toEqual('A');
  })
})