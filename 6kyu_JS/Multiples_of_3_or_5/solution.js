solution = (number) => {
  if (typeof number !== "number") {
    throw new Error("This is not a number!");
  }

  const numbers = Array.from({ length: number - 1 }, (_, index) => index + 1);
  const newNumbers = numbers.map((number) => {
    if (number % 3 === 0 || number % 5 === 0) {
      return number;
    } else {
      return 0;
    }
  });

  return newNumbers.reduce((sum, a) => sum + a, 0);
};

module.exports = solution;
