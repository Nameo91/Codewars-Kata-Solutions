solution = (number) => {
  if (typeof number !== "number") {
    throw new Error("This is not a number!");
  }

  const numbers = Array.from({ length: number - 1 }, (_, index) => index + 1);
  let newNumbers = [];
  numbers.forEach((number) => {
    if (number % 3 === 0 || number % 5 === 0) {
      newNumbers.push(number);
    }
  });

  return newNumbers.reduce((sum, a) => sum + a, 0);
};

module.exports = solution;
