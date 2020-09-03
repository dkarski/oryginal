const compose = require("compose-tiny")
const toUnique = require("@oryginal/to-unique")
const toCapitalCase = require("@oryginal/to-capital-case")

const capitalizeItems = (items) => items.map(toCapitalCase)

const toCollection = (items) =>
  compose(console.log, toUnique, capitalizeItems)(items)

module.exports = toCollection
