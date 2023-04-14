const uniqueInOrder = (iterable) => {
  if(typeof(iterable) === 'string') {
    iterable = iterable.split('');
  }
  return iterable;
}

module.exports = uniqueInOrder;