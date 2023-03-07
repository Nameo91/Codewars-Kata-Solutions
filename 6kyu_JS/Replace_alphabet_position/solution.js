alphabetPosition = (text) => {
  // string of alphabets
  let alphabets = "abcdefghijklmnopqrstuvwxyz";

  // store converted number
  let numbers = "";  

  for (let i = 0; i < text.length; i++) {
    let char = text[i].toLowerCase(); // convert to lowercase 
    // find the index of each char in the string of alphabets
    if(alphabets.includes(char)) {
      numbers += (alphabets.indexOf(char) + 1) + ' '; // add space next to each number
    }
  }

  return numbers.trim();
}

module.exports = alphabetPosition;