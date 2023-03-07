const alphabetPosition = require('./solution')

describe("alphbetPosition", () => {
  test("should return 1 with a string with single letter a", () => {
    expect(alphabetPosition("a")).toBe("1");
  });

  test("should return 2 with a string with single letter b", () => {
    expect(alphabetPosition("b")).toBe("2");
  });

  test("should return 2 with a string with single letter c", () => {
    expect(alphabetPosition("c")).toBe("3");
  });

  test("should convert a string with two letters", () => {
    expect(alphabetPosition("ab")).toBe("1 2");
  });

  test("should convert a string with three letters", () => {
    expect(alphabetPosition("abc")).toBe("1 2 3");
  });

  test("should convert a string with four letters", () => {
    expect(alphabetPosition("abcd")).toBe("1 2 3 4");
  });

  test("should convert a string with five letters", () => {
    expect(alphabetPosition("abcde")).toBe("1 2 3 4 5");
  });

  test("should convert a string without letters", () => {
    expect(alphabetPosition("!")).toBe("");
  });

  test("should convert a string with a capital letter", () => {
    expect(alphabetPosition("A")).toBe("1");
  });

  xtest("should convert a string with some words", () => {
    expect(alphabetPosition("The narwhal bacons at midnight.") ).toBe("20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20");
  });
})