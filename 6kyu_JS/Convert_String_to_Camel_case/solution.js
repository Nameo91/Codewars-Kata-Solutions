toCamelCase = (str) => {
  let newStr = str.replace(/[_-]/gi, ' ').split(' ');
  
  const newWords = newStr.map((word, index) => {
    return index == 0 ? word : word.charAt(0).toUpperCase() + word.slice(1);
  })
  return newWords.join('');
}

module.exports = toCamelCase;