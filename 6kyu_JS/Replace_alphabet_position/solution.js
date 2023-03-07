alphabetPosition = (text) => {
  for (let i = 0; i < text.length; i++) {
    if(text[i] === "a") {
      return "1";
    } else if(text[i] === "b") {
      return "2";
    } else {
      return "3";
    }
  }
}

module.exports = alphabetPosition;