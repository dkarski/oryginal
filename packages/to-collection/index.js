const compose = require("compose-tiny")
const toUnique = require("@oryginal/to-unique")
const toCapitalCase = require("@oryginal/to-capital-case")

const words = [
  "background",
  "service-desk",
  "conglomeration",
  "service desk",
  "User-centric",
]

const capitalizeItems = (items) => items.map(toCapitalCase)

const toCollection = (items) => compose(toUnique, capitalizeItems)(items)

module.exports = toCollection
