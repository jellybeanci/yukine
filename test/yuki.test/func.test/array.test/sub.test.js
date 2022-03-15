const {sub} = require("../../../yuki/func/array/sub");
const {xs} = require("../../../constants/alpha-beta/xs");
const {ys} = require("../../../constants/alpha-beta/ys");
const {ds} = require("../../../constants/alpha-beta/ds");
const {es} = require("../../../constants/alpha-beta/es");

test("'sub' defined?", () => {
  expect(sub).toBeDefined();
  expect(sub).not.toBeNull();
})

test("does 'sub' has 'monkeyPatch'?", () => {
  expect(sub.monkeyPatch).toBeDefined();
  expect(sub.monkeyPatch).not.toBeNull();
  expect(typeof sub.monkeyPatch).toBe("function");
})

test("does 'sub' has 'removePatch' functions?", () => {
  expect(sub.removePatch).toBeDefined();
  expect(sub.removePatch).not.toBeNull();
  expect(typeof sub.removePatch).toBe("function");
})

test("'sub', is 'monkeyPatch' and 'removePatch' same?", () => {
  expect(sub.monkeyPatch === sub.removePatch).not.toBe(true);
})

test("is 'sub' working properly?", () => {
  expect(sub(ys, xs)).toEqual([-5, 0, -8, 6, -7, -5]);
  expect(sub(ds, es)).toEqual([-2, 1, -1, 3, 0, -3, 5, 0, -4]);
  expect(sub([1, 2, 3, 4], [5, 6, 7, 8])).toEqual([-4, -4, -4, -4]);
  expect(() => {
    sub([1, 2, 3, 4], [1, 2, 3]);
  }).toThrow(Error);
  expect(() => {
    sub([1, 2, 3, 4], [1, 2, 3]);
  }).toThrowErrorMatchingSnapshot("Array lengths must agree.");
})