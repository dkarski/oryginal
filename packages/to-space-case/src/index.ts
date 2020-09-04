import toNoCase from "@oryginal/to-no-case"

const toSpaceCase = (string: string) => {
  return toNoCase(string)
    .replace(/[\W_]+(.|$)/g, function (matches, match) {
      return match ? " " + match : ""
    })
    .trim()
}

export default toSpaceCase
