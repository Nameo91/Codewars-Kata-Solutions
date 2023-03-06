isValidWalk = (walk) => {

  let ns = 0;  // counter of North and South
  let we = 0;  // counter of West and East
  let movements = walk.length;  // Total movements

  // iterate input array and icrement each counter
  walk.forEach(direction => {
    switch (direction) {
      case 'n': ns++ ; break
      case 's': ns-- ; break
      case 'w': we++ ; break
      case 'e': we-- ; break
    }
  })
  
  return ns === 0 && we === 0 && movements === 10  // only condition to be true
}

module.exports = isValidWalk;