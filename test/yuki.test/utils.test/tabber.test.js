const {tabber} = require("../../yuki/utils/tabber");

test("'tabber' defined?", () => {
  expect(tabber).toBeDefined();
  expect(tabber).not.toBeNull();
})

test("is 'tabber' working properly?", () => {
  expect(tabber()).toEqual("  ");
  expect(tabber(2)).toEqual("    ");
  expect(tabber(2, " ")).toEqual("  ");
  expect(tabber(4)).toEqual("        ");
  expect(tabber(3, "#_")).toEqual("#_#_#_");
  expect(tabber(0, "GÖKSEL")).toEqual("");
})