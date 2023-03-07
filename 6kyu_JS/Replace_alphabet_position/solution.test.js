const alphabetPosition = require('./solution')

describe("alphbetPosition", () => {
  test("should return 1 with a", () => {
    expect(alphabetPosition("a")).toBe("1");
  });
})