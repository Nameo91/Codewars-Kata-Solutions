duplicateCount = (text) => {
  let duplicates = [];

  // iterate over string to access each element
  for (let i = 0; i < text.length; i++) {
    let char = text[i]; //current character
    let string = text.slice(i+1); //rest of the string
 
    //check if the char includes in the rest of the string
    if(string.includes(char)) {
      duplicates.push(char);  // collect all the duplicates
    }
  }
  
  //remove all duplicates
  const unique_duplicates = [...new Set(duplicates)];
  return unique_duplicates.length;
}

module.exports = duplicateCount;