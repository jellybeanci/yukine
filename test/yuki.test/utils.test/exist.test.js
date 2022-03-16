const {exist} = require("../../yuki/utils/exist");

test("'exist' defined?", () => {
  expect(exist).toBeDefined();
  expect(exist).not.toBeNull();
})

test("is 'exist' working properly?", () => {
  expect(exist("Göksel")).toEqual(true);
  expect(exist(1)).toEqual(true);
  expect(exist(0)).toEqual(false);
  expect(exist({})).toEqual(true);
  expect(exist(null)).toEqual(false);
  expect(exist(undefined)).toEqual(false);
  expect(exist(-0)).toEqual(false);
  expect(exist(NaN)).toEqual(false);
})