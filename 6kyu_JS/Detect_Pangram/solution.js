isPangram = (string) => {
  return (string.match(/([a-z])(?!.*\1)/ig) || []).length === 26;
  // let allMatches = string.toLowerCase().match(/[a-z]/g || []);
  
  // let uniqueMatches = allMatches.filter((letter, index) => {
  //   return allMatches.indexOf(letter) == index
  // });

  // return uniqueMatches.length === 26;
}

module.exports = isPangram;