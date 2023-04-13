findOutlier = (integers) => {
  const odd = [];  //stores all odd numbers
  const even = []; //stores all even numbers
  
  // divide each number by two and push to each array
  for(const n of integers) {
    if(n%2 === 0) {
      even.push(n);
    } else {
      odd.push(n);
    }
  }

  // find the array has only one integer
  if(odd.length === 1 ) {
    return odd[0];
  } else if(even.length === 1) {
    return even[0];
  }
}

module.exports = findOutlier;