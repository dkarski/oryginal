import toSpaceCase from "@oryginal/to-space-case"

const toCapitalCase = (string: string) => {
  return toSpaceCase(string).replace(/(^|\s)(\w)/g, function (
    matches,
    previous,
    letter
  ) {
    return previous + letter.toUpperCase()
  })
}

export default toCapitalCase
