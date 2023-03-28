duplicateEncode = (word) => {
  return word.split("").map(char => char = "(").join("");
}

module.exports = duplicateEncode;