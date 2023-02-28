findOdd = (numbers) => {
  let occurences = {};
  let oddInt;
  
  for (let i=0; i < numbers.length; i++) {
    if (occurences[numbers[i]]) {
      occurences[numbers[i]] += 1 
    } else {
      occurences[numbers[i]] = 1   
    }
  }
  
  for (let key in occurences) {
    if (occurences[key] % 2 === 1) {
      oddInt = Number(key); 
    }
  }

  return oddInt;
};

module.exports = findOdd;