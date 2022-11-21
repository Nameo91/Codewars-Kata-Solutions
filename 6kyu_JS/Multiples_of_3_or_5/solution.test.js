const solution = require("./solution");

describe("solution", () => {
  test("should return 3", () => {
    expect(solution(3)).toBe(0);
  });

  test("should return the sum of 3 and 5", () => {
    expect(solution(5)).toBe(3);
  });

  test("should return the sum of 3, 5, 6 and 9", () => {
    expect(solution(10)).toBe(23);
  });

  test("should return the sum of 3, 5, 6, 9, 10 and 12", () => {
    expect(solution(15)).toBe(45);
  });

  test("should return 0", () => {
    expect(solution(0)).toBe(0);
  });

  test("should return 0", () => {
    expect(solution(-3)).toBe(0);
  });

  test("throws an error", () => {
    expect(() => solution("Hello")).toThrow("This is not a number!");
  });
});
