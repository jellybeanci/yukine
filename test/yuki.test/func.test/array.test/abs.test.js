const {abs} = require("../../../yuki/func/array/abs");
const {as} = require("../../../constants/as");
const {bs} = require("../../../constants/bs");
const {xs} = require("../../../constants/xs");
const {ys} = require("../../../constants/ys");
const {zs} = require("../../../constants/zs");
const {hs} = require("../../../constants/hs");
const {ks} = require("../../../constants/ks");
const {ns} = require("../../../constants/ns");
const {emptyArray} = require("../../../constants/empty-array");
const {nameArray} = require("../../../constants/name-array");

test("'abs' defined?", () => {
  expect(abs).toBeDefined();
  expect(abs).not.toBeNull();
})

test("does 'abs' has 'monkeyPatch'?", () => {
  expect(abs.removePatch).toBeDefined();
  expect(abs.removePatch).not.toBeNull();
  expect(typeof abs.removePatch).toBe("function");
})

test("does 'abs' has 'removePatch' functions?", () => {
  expect(abs.monkeyPatch).toBeDefined();
  expect(abs.monkeyPatch).not.toBeNull();
  expect(typeof abs.monkeyPatch).toBe("function");
})

test("'abs', is 'monkeyPatch' and 'removePatch' same?", () => {
  expect(abs.monkeyPatch === abs.removePatch).not.toBe(true);
})

test("is 'abs' working properly?", () => {
  expect(abs(as)).toEqual([0, 1, 4, 9, 16]);
  expect(abs(bs)).toEqual([1.56, 2.67, 3.78, 4.89, 5.91]);
  expect(abs(xs)).toEqual([1, 2, 3, 4, 5, 6]);
  expect(abs(ys)).toEqual([4, 2, 5, 10, 2, 1]);
  expect(abs(zs)).toEqual([1, 2, 3, 4, 5, 6]);
  expect(abs(ks)).toEqual([1.2, 2.3, 3.4, 4.5, 5.6, 0]);
  expect(abs(ns)).toEqual([15, 30, 45, 60, 90, 135, 210]);
  expect(abs(hs)).toEqual([1, 8, 27, 64, 125, 216, 343, 512]);
  expect(abs(nameArray)).toEqual([NaN, NaN, NaN, NaN]);
  expect(abs(emptyArray)).toEqual([]);
})

// test("is 'monkeyPatch' work with 'abs'?", () => {
//   expect(abs.monkeyPatch).toBeDefined();
//   expect(typeof abs.monkeyPatch).toBe("function");
//   expect(xs.abs).not.toBeDefined(); // potantial mess
//   abs.monkeyPatch(); // Patch 🩹
//   expect(xs.abs).toBeDefined();
// })