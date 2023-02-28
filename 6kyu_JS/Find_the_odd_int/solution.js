const findOdd = (A) => {
  let occurences = {};
  let oddInt;
  
  // count occurences of each integer 
  A.forEach((n) => {
    if(occurences[n]) {
      occurences[n] += 1;
    } else {
      occurences[n] = 1;     
    }
  });
  
  for (let key in occurences) {
    if (occurences[key] % 2 !== 0) {
      oddInt = Number(key); 
    }
  }

  return oddInt;
};

module.exports = findOdd;