const uniqueInOrder = (iterable) => {
  // convert all the inputs into an array
  if(typeof(iterable) === 'string') {
    iterable = iterable.split('');
  }

  let uniqueArray = iterable.filter((item, i) => 
    item !== iterable[i-1]  //Compare the current value with the previous value
  ); 
  return uniqueArray;
}

module.exports = uniqueInOrder;