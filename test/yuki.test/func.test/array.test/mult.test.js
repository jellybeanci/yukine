const {mult} = require("../../../yuki/func/array/mult");
const {xs} = require("../../../constants/alpha-beta/xs");
const {ys} = require("../../../constants/alpha-beta/ys");
const {ds} = require("../../../constants/alpha-beta/ds");
const {es} = require("../../../constants/alpha-beta/es");

test("'mult' defined?", () => {
  expect(mult).toBeDefined();
  expect(mult).not.toBeNull();
})

test("does 'mult' has 'monkeyPatch'?", () => {
  expect(mult.monkeyPatch).toBeDefined();
  expect(mult.monkeyPatch).not.toBeNull();
  expect(typeof mult.monkeyPatch).toBe("function");
})

test("does 'mult' has 'removePatch' functions?", () => {
  expect(mult.removePatch).toBeDefined();
  expect(mult.removePatch).not.toBeNull();
  expect(typeof mult.removePatch).toBe("function");
})

test("'mult', is 'monkeyPatch' and 'removePatch' same?", () => {
  expect(mult.monkeyPatch === mult.removePatch).not.toBe(true);
})

/*
const xs = Object.freeze([1, 2, 3, 4, 5, 6]);
const ys = Object.freeze([-4, 2, -5, 10, -2, 1]);

const ds = Object.freeze([1, 2, 3, 4, 5, 6, 7, 6, 1]);
const es = Object.freeze([3, 1, 4, 1, 5, 9, 2, 6, 5]);
*/

test("is 'mult' working properly?", () => {
  expect(mult(xs, ys)).toEqual([-4, 4, -15, 40, -10, 6]);
  expect(mult(ds, es)).toEqual([3, 2, 12, 4, 25, 54, 14, 36, 5]);
  expect(mult([1, 2, 3, 4], [5, 6, 7, 8])).toEqual([5, 12, 21, 32]);
  expect(() => {
    mult([1, 2, 3, 4], [1, 2, 3]);
  }).toThrow(Error);
  expect(() => {
    mult([1, 2, 3, 4], [1, 2, 3]);
  }).toThrowErrorMatchingSnapshot("Array lengths must agree.");
})