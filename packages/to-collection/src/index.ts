import compose from "compose-tiny"
import toUnique from "@oryginal/to-unique"
import toCapitalCase from "@oryginal/to-capital-case"

const capitalizeItems = (items: string[]) => items.map(toCapitalCase)

const toCollection = (items: string[]) =>
  compose(toUnique, capitalizeItems)(items)

export default toCollection
