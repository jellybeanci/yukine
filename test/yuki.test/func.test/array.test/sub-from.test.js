const {subFrom} = require("../../../yuki/func/array/sub-from");
const {ds} = require("../../../constants/alpha-beta/ds");
const {es} = require("../../../constants/alpha-beta/es");
const {xs} = require("../../../constants/alpha-beta/xs");
const {emptyArray} = require("../../../constants/empty-array");
const {nameArray} = require("../../../constants/name-array");

test("'subFrom' defined?", () => {
  expect(subFrom).toBeDefined();
  expect(subFrom).not.toBeNull();
})

test("does 'subFrom' has 'monkeyPatch'?", () => {
  expect(subFrom.monkeyPatch).toBeDefined();
  expect(subFrom.monkeyPatch).not.toBeNull();
  expect(typeof subFrom.monkeyPatch).toBe("function");
})

test("does 'subFrom' has 'removePatch' functions?", () => {
  expect(subFrom.removePatch).toBeDefined();
  expect(subFrom.removePatch).not.toBeNull();
  expect(typeof subFrom.removePatch).toBe("function");
})

test("'subFrom', is 'monkeyPatch' and 'removePatch' same?", () => {
  expect(subFrom.monkeyPatch === subFrom.removePatch).not.toBe(true);
})

test("is 'monkeyPatch' work with 'subFrom'?", () => {
  subFrom.removePatch();
  expect(xs.subFrom).not.toBeDefined();
  subFrom.monkeyPatch(); // Patch 🩹
  expect(xs.subFrom).toBeDefined();
})

test("is 'subFrom' working properly?", () => {
  expect(subFrom(ds, 1)).toEqual([0, -1, -2, -3, -4, -5, -6, -5, 0]);
  expect(subFrom(ds, 0)).toEqual([-1, -2, -3, -4, -5, -6, -7, -6, -1]);
  expect(subFrom(es, 5)).toEqual([2, 4, 1, 4, 0, -4, 3, -1, 0]);
  expect(subFrom(nameArray, 5)).toEqual([NaN, NaN, NaN, NaN]);
  expect(subFrom(emptyArray)).toEqual(emptyArray);
})

test("is 'subFrom' working properly with patch?", () => {
  expect(ds.subFrom(1)).toEqual([0, -1, -2, -3, -4, -5, -6, -5, 0]);
  expect(ds.subFrom(0)).toEqual([-1, -2, -3, -4, -5, -6, -7, -6, -1]);
  expect(es.subFrom(5)).toEqual([2, 4, 1, 4, 0, -4, 3, -1, 0]);
  expect(nameArray.subFrom(5)).toEqual([NaN, NaN, NaN, NaN]);
  expect(emptyArray.subFrom()).toEqual(emptyArray);
  subFrom.removePatch();
})