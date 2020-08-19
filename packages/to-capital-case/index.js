const space = require("@oryginal/to-space-case")

const toCapitalCase = (string) => {
  return space(string).replace(/(^|\s)(\w)/g, function (
    matches,
    previous,
    letter
  ) {
    return previous + letter.toUpperCase()
  })
}

module.exports = toCapitalCase
