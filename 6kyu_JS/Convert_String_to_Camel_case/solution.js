toCamelCase = (str) => {
  let newStr = str.replace(/[_-]/gi, ' ').split(' ');
  
  const newWords = newStr.map((word, index) => {
    if(index == 0) {
      return word
    } else {
      return word.charAt(0).toUpperCase() + word.slice(1)
    }
  })
  return newWords.join('');
}

module.exports = toCamelCase;