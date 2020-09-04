const hasSpace = /\s/
const hasSeparator = /(_|-|\.|:)/
const hasCamel = /([a-z][A-Z]|[A-Z][a-z])/

const toNoCase = (string: string) => {
  if (hasSpace.test(string)) return string.toLowerCase()
  if (hasSeparator.test(string))
    return (unseparate(string) || string).toLowerCase()
  if (hasCamel.test(string)) return uncamelize(string).toLowerCase()
  return string.toLowerCase()
}

const separatorSplitter = /[\W_]+(.|$)/g

const unseparate = (string: string) => {
  return string.replace(separatorSplitter, function (m, next) {
    return next ? " " + next : ""
  })
}

const camelSplitter = /(.)([A-Z]+)/g

function uncamelize(string: string) {
  return string.replace(camelSplitter, function (m, previous, uppers) {
    return previous + " " + uppers.toLowerCase().split("").join(" ")
  })
}

export default toNoCase
