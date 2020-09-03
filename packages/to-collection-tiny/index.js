const toUnique = require("@oryginal/to-unique")
const toCapitalCase = require("@oryginal/to-capital-case")

const capitalizeItems = (items) => items.map(toCapitalCase)

const toCollection = (items) => toUnique(capitalizeItems(items))

module.exports = toCollection
