const spinWords = require("./spinningWord");

describe("spinWords", () => {
  it("returns the string of one letter word", () => {
    expect(spinWords("A")).toBe("A");
  });

  it("returns the string of two letter word", () => {
    expect(spinWords("Hi")).toBe("Hi");
  });

  it("returns the string of three letter word", () => {
    expect(spinWords("Sun")).toBe("Sun");
  });

  it("returns the string of three letter word", () => {
    expect(spinWords("code")).toBe("code");
  });

  it("reverses a word of more than 5 letters", () => {
    expect(spinWords("melon")).toBe("nolem");
  });

  it("returns the string of two words of less than 5 letters", () => {
    expect(spinWords("A test")).toBe("A test");
  });

  it("returns the formatted sting depending on the number of letters", () => {
    expect(spinWords("Hey fellow warriors")).toBe("Hey wollef sroirraw");
  });
});
