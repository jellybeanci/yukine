const {deepEquals} = require("../../../yuki/func/array/deep-equals");
const {arrayEquals} = require("../../../yuki/func/array/array-equals");
const {mult} = require("../../../yuki/func/array/mult");
const {xs} = require("../../../constants/alpha-beta/xs");
const {ds} = require("../../../constants/alpha-beta/ds");
const {es} = require("../../../constants/alpha-beta/es");
const {os} = require("../../../constants/alpha-beta/os");

const complexArray1 = [1, 2, 3, [4, 5], 6, 7];
const complexArray2 = [1, 2, 3, [4, 5], 6, 7];

test("'deepEquals' defined?", () => {
  expect(deepEquals).toBeDefined();
  expect(deepEquals).not.toBeNull();
})

test("does 'deepEquals' has 'monkeyPatch'?", () => {
  expect(deepEquals.monkeyPatch).toBeDefined();
  expect(deepEquals.monkeyPatch).not.toBeNull();
  expect(typeof deepEquals.monkeyPatch).toBe("function");
})

test("does 'deepEquals' has 'removePatch' functions?", () => {
  expect(deepEquals.removePatch).toBeDefined();
  expect(deepEquals.removePatch).not.toBeNull();
  expect(typeof deepEquals.removePatch).toBe("function");
})

test("'deepEquals', is 'monkeyPatch' and 'removePatch' same?", () => {
  expect(deepEquals.monkeyPatch === deepEquals.removePatch).not.toBe(true);
})

test("is 'monkeyPatch' work with 'deepEquals'?", () => {
  deepEquals.removePatch();
  expect(xs.deepEquals).not.toBeDefined();
  deepEquals.monkeyPatch(); // Patch 🩹
  expect(xs.deepEquals).toBeDefined();
})

test("is 'deepEquals' working properly?", () => {
  expect(deepEquals(os, mult(ds, es))).toBe(true);
  expect(deepEquals(mult(es, es), [1, 2, 3, 4, 5, 6, 7])).toBe(false);
  expect(deepEquals([], [])).toBe(true);
  expect(deepEquals([Number.NaN], [null])).toBe(false);
  expect(deepEquals([1, 2, 3], [])).toBe(false);
  expect(deepEquals([1, 2, 3], "hello")).toBe(false);
  expect(complexArray1 === complexArray2).toBe(false);
  expect(arrayEquals(complexArray1, complexArray2)).toBe(false);
  expect(deepEquals(complexArray1, complexArray2)).toBe(true);
})

test("is 'deepEquals' working properly with patch?", () => {
  expect(mult(ds, es).deepEquals(os)).toBe(true);
  expect(mult(es, es).deepEquals([1, 2, 3, 4, 5, 6, 7])).toBe(false);
  expect([].deepEquals([])).toBe(true);
  expect([Number.NaN].deepEquals([null])).toBe(false);
  expect([1, 2, 3].deepEquals([])).toBe(false);
  expect([1, 2, 3].deepEquals("hello")).toBe(false);
  expect(complexArray1 === complexArray2).toBe(false);
  expect(arrayEquals(complexArray1, complexArray2)).toBe(false);
  expect(complexArray1.deepEquals(complexArray2)).toBe(true);
  deepEquals.removePatch();
})