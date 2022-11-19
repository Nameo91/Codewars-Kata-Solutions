const likes = require("./whoLikesIt");

describe("likes", () => {
  test("should return a string with an empty array", () => {
    expect(likes([])).toBe("no one likes this");
  });

  test("should return a string who likes it", () => {
    expect(likes(["Peter"])).toBe("Peter likes this");
  });

  test("should return two names who like it", () => {
    expect(likes(["Jacob", "Alex"])).toBe("Jacob and Alex like this");
  });

  test("should return three names who like it", () => {
    expect(likes(["Max", "John", "Mark"])).toBe("Max, John and Mark like this");
  });

  test("should return four names who like it", () => {
    expect(likes(["Alex", "Jacob", "Mark", "Max"])).toBe(
      "Alex, Jacob and 2 others like this"
    );
  });
});
