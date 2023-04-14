const uniqueInOrder = (iterable) => {
  if(typeof(iterable) === 'string') {
    iterable = iterable.split('');
  }

  let uniqueArray = iterable.filter((item, i) => 
    i === 0 || item !== iterable[i-1]  //Compare the current value with the previous value
  ); 
  return uniqueArray;
}

module.exports = uniqueInOrder;