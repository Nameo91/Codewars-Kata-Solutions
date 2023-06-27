isPangram = (string) => {
  let allMatches = string.toLowerCase().match(/[a-z]/g || []);
  
  let uniqueMatches = allMatches.filter((letter, index) => {
    return allMatches.indexOf(letter) == index
  });

  return uniqueMatches.length === 26;
}

module.exports = isPangram;