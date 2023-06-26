const toCamelCase = require('./solution');

describe("toCamelCase", () => {
  test("returns the original lowercase letter", () => {
    expect(toCamelCase('a')).toEqual('a');
  });

  test("returns the uppercase letter", () => {
    expect(toCamelCase('A')).toEqual('A');
  })

  test("eliminates dash or underscore", () => {
    expect(toCamelCase('A-B-C')).toEqual('ABC');
  })

  test("combines all the words without any special characters", () => {
    expect(toCamelCase('The_Stealth_Warrior'))
  })

  test("combines all the words without any special characters", () => {
    expect(toCamelCase('The_Stealth-Warrior'))
  })

  test("combines all the words without any special characters", () => {
    expect(toCamelCase('The-Stealth-Warrior'))
  })
})