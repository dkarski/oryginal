const clean = require("@oryginal/to-no-case")

const toSpaceCase = (string) => {
  return clean(string)
    .replace(/[\W_]+(.|$)/g, function (matches, match) {
      return match ? " " + match : ""
    })
    .trim()
}

module.exports = toSpaceCase
