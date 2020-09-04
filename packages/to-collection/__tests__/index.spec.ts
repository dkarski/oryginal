import toCollection from "../index"

test("result list is unique ", () => {
  const result = toCollection(["A", "A", "a", "B"])
  expect(result).toHaveLength(2)
})
