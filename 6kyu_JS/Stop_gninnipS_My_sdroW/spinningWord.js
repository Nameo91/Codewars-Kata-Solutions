spinWords = (string) => {
  const words = string.split(" ");
  const newWords = [];

  words.forEach((word) => {
    if (word.length > 4) {
      newWords.push(word.split("").reverse().join(""));
    } else {
      newWords.push(word);
    }
  });

  return newWords.join(" ");
};

module.exports = spinWords;
