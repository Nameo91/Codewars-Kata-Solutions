isValidWalk = (walk) => {
  //counter of each letter
  let n = 0;
  let s = 0;
  let w = 0;
  let e = 0;

  // iterate input array and icrement each counter
  walk.forEach(e => {
    if(e === 'n') {
      n++;;
    } else if(e === 's') {
      s++;
    } else if(e === 'w') {
      w++;
    } else {
      e++;
    }
  })

  if(n - s === 0 && w - e === 0) {
    return true;
  } else {
    return false;
  }
}

module.exports = isValidWalk;