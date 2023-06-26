toCamelCase = (str) => {
  return str.replace(/[^\w\s]/gi, '')
}

module.exports = toCamelCase;