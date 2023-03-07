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
})