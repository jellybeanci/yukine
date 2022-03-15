const {add} = require("../../../yuki/func/array/add");
const {xs} = require("../../../constants/alpha-beta/xs");
const {ys} = require("../../../constants/alpha-beta/ys");
const {ds} = require("../../../constants/alpha-beta/ds");
const {es} = require("../../../constants/alpha-beta/es");

test("'add' defined?", () => {
  expect(add).toBeDefined();
  expect(add).not.toBeNull();
})

test("does 'add' has 'monkeyPatch'?", () => {
  expect(add.monkeyPatch).toBeDefined();
  expect(add.monkeyPatch).not.toBeNull();
  expect(typeof add.monkeyPatch).toBe("function");
})

test("does 'add' has 'removePatch' functions?", () => {
  expect(add.removePatch).toBeDefined();
  expect(add.removePatch).not.toBeNull();
  expect(typeof add.removePatch).toBe("function");
})

test("'add', is 'monkeyPatch' and 'removePatch' same?", () => {
  expect(add.monkeyPatch === add.removePatch).not.toBe(true);
})

test("is 'add' working properly?", () => {
  expect(add(xs, ys)).toEqual([-3, 4, -2, 14, 3, 7]);
  expect(add(ds, es)).toEqual([4, 3, 7, 5, 10, 15, 9, 12, 6]);
  expect(add([1, 2, 3, 4], [5, 6, 7, 8])).toEqual([6, 8, 10, 12]);
  expect(() => {
    add([1, 2, 3], [1, 2, 3, 4]);
  }).toThrow(Error);
  expect(() => {
    add([1, 2, 3], [1, 2, 3, 4]);
  }).toThrowErrorMatchingSnapshot("Array lengths must agree.");
})