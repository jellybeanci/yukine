const {removePatch} = require("../../yuki/patch/remove-patch")

test("'removePatch' defined?", () => {
  expect(removePatch).toBeDefined();
  expect(removePatch).not.toBeNull();
  expect(typeof removePatch).toBe("function");
})

test("is 'removePatch' working properly?", () => {
  let empty = void 0;
  expect(removePatch(empty)).toBe(undefined);
})