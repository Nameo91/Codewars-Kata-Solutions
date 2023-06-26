const toCamelCase = require('./solution');

describe("toCamelCase", () => {
  test("returns the original lowercase letter", () => {
    expect(toCamelCase('a')).toEqual('a');
  });

  test("returns the uppercase letter", () => {
    expect(toCamelCase('A')).toEqual('A');
  });

  test("eliminates dash or underscore", () => {
    expect(toCamelCase('A-B-C')).toEqual('ABC');
  });

  test("combines all the words", () => {
    expect(toCamelCase('The_Stealth_Warrior')).toEqual('TheStealthWarrior');
  });

  test("combines all the words", () => {
    expect(toCamelCase('The_Stealth-Warrior')).toEqual('TheStealthWarrior');
  });

  test("combines all the words", () => {
    expect(toCamelCase('The-Stealth-Warrior')).toEqual('TheStealthWarrior');
  });
  
  test("combines all the words", () => {
    expect(toCamelCase('The-Stealth-Warrior')).toEqual('TheStealthWarrior');
  });


  test("converts the first letter of each word into uppercase", () => {
    expect(toCamelCase('The-stealth-warrior')).toEqual('TheStealthWarrior');
  });


  test("combines all the words keeping the first letter", () => {
    expect(toCamelCase('the-Stealth-Warrior')).toEqual('theStealthWarrior');
  });
})