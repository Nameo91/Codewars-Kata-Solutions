arrayDiff = (a, b) => {
  // filter the item if the value in b
  const newArray = a.filter(n => !b.includes(n));
  return newArray;
}

module.exports = arrayDiff;