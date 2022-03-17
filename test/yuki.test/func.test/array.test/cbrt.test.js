const {cbrt} = require("../../../yuki/func/array/cbrt");
const {xs} = require("../../../constants/alpha-beta/xs");
const {ds} = require("../../../constants/alpha-beta/ds");
const {fs} = require("../../../constants/alpha-beta/fs");
const {hs} = require("../../../constants/alpha-beta/hs");
const {emptyArray} = require("../../../constants/empty-array");
const {nameArray} = require("../../../constants/name-array");

test("'cbrt' defined?", () => {
  expect(cbrt).toBeDefined();
  expect(cbrt).not.toBeNull();
})

test("does 'cbrt' has 'monkeyPatch'?", () => {
  expect(cbrt.monkeyPatch).toBeDefined();
  expect(cbrt.monkeyPatch).not.toBeNull();
  expect(typeof cbrt.monkeyPatch).toBe("function");
})

test("does 'cbrt' has 'removePatch' functions?", () => {
  expect(cbrt.removePatch).toBeDefined();
  expect(cbrt.removePatch).not.toBeNull();
  expect(typeof cbrt.removePatch).toBe("function");
})

test("'cbrt', is 'monkeyPatch' and 'removePatch' same?", () => {
  expect(cbrt.monkeyPatch === cbrt.removePatch).not.toBe(true);
})

test("is 'monkeyPatch' work with 'cbrt'?", () => {
  cbrt.removePatch();
  expect(xs.cbrt).not.toBeDefined();
  cbrt.monkeyPatch(); // Patch 🩹
  expect(xs.cbrt).toBeDefined();
})

test("is 'cbrt' working properly?", () => {
  expect(cbrt(ds)).toEqual([1, 1.2599210498948732, 1.4422495703074083, 1.5874010519681996, 1.709975946676697, 1.8171205928321397, 1.9129311827723892, 1.8171205928321397, 1]);
  expect(cbrt([1, 1, 1, 1, 1, 1])).toEqual([1, 1, 1, 1, 1, 1]);
  expect(cbrt(fs)).toEqual([-1, -1.2599210498948732, -1.4422495703074083, -1.5874010519681996, -1.709975946676697, -1.8171205928321397, -1.9129311827723892, -1.8171205928321397, -1]);
  expect(cbrt(hs)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  expect(cbrt(nameArray)).toEqual([NaN, NaN, NaN, NaN]);
  expect(cbrt(emptyArray)).toEqual(emptyArray);
})

test("is 'cbrt' working properly with patch?", () => {
  expect(ds.cbrt()).toEqual([1, 1.2599210498948732, 1.4422495703074083, 1.5874010519681996, 1.709975946676697, 1.8171205928321397, 1.9129311827723892, 1.8171205928321397, 1]);
  expect([1, 1, 1, 1, 1, 1]).toEqual([1, 1, 1, 1, 1, 1]);
  expect(fs.cbrt()).toEqual([-1, -1.2599210498948732, -1.4422495703074083, -1.5874010519681996, -1.709975946676697, -1.8171205928321397, -1.9129311827723892, -1.8171205928321397, -1]);
  expect(hs.cbrt()).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  expect(nameArray.cbrt()).toEqual([NaN, NaN, NaN, NaN]);
  expect(emptyArray.cbrt()).toEqual(emptyArray);
  cbrt.removePatch();
})