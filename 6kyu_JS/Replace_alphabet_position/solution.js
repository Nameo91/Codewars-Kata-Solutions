alphabetPosition = (text) => {
  // string of alphabets
  let alphabets = "abcdefghijklmnopqrxtuvwxyz";

  // store converted number
  let numbers = "";  

  for (let i = 0; i < text.length; i++) {
    let char = text[i];
    // find the index of each char in the string of alphabets
    if(alphabets.includes(char)) {
      numbers += alphabets.indexOf(char) + 1;
    }
  }

  return numbers;
}

module.exports = alphabetPosition;