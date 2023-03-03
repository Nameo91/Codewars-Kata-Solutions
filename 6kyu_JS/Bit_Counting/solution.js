const countBits = (n) => {
  // convert input to binary number
  const binary = n.toString(2);

  // seperate in an array
  const bits = binary.split('');

  // count 1 in the array
  let count = 0;
  bits.forEach((bit) => {
    console.log(bit);
    if (bit == 1) {
      count += 1
    }
    return count;
  });

  return count;
};

module.exports = countBits;