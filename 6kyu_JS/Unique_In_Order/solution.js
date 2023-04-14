const uniqueInOrder = (iterable) => {
  if(typeof(iterable) === 'string') {
    iterable = iterable.split('');
  }

  let uniqueArray = iterable.filter((item, i, array) => array.indexOf(item) === i);
  return uniqueArray;
}

module.exports = uniqueInOrder;