isValidWalk = (walk) => {
  //counter of each letter
  let n = 0;
  let s = 0;
  let w = 0;
  let e = 0;

  // iterate input array and icrement each counter
  walk.forEach(direction => {
    if(direction === 'n') {
      n++;;
    } else if(direction === 's') {
      s++;
    } else if(direction === 'w') {
      w++;
    } else {
      e++;
    }
  })
  
  if(n - s === 0 && w - e === 0) {  // calculate movements of opposite direction
    return true;
  } else {
    return false;
  }
}

module.exports = isValidWalk;