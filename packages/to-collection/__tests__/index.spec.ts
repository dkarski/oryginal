// @ts-ignore
import toCollection from "../src";

test("result list is unique ", () => {
  const result = toCollection(["A", "A", "a", "B"])
  expect(result).toHaveLength(2)
})
