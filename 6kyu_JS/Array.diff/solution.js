arrayDiff = (a, b) => {
  // filter the item if the value in b
  return a.filter(n => !b.includes(n));
}

module.exports = arrayDiff;