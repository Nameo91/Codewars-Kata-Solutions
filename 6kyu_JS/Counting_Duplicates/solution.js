duplicateCount = (text) => {
  let duplicates = [];
  const new_text = text.toLowerCase(); //case insensitivity

  // iterate over string to access each element
  for (let i = 0; i < new_text.length; i++) {
    let char = new_text[i]; //current character
    let string = new_text.slice(i+1); //rest of the string
 
    //check if the char includes in the rest of the string
    if(string.includes(char)) {
      duplicates.push(char);  // collect all the duplicates
    }
  }
  
  //remove all duplicates
  const unique_duplicates = [...new Set(duplicates)];
  const count = unique_duplicates.length;

  return count;
}

module.exports = duplicateCount;