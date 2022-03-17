const {subBy} = require("../../../yuki/func/array/sub-by");
const {bs} = require("../../../constants/alpha-beta/bs");
const {ds} = require("../../../constants/alpha-beta/ds");
const {es} = require("../../../constants/alpha-beta/es");
const {xs} = require("../../../constants/alpha-beta/xs");
const {emptyArray} = require("../../../constants/empty-array");
const {nameArray} = require("../../../constants/name-array");

test("'subBy' defined?", () => {
  expect(subBy).toBeDefined();
  expect(subBy).not.toBeNull();
})

test("does 'subBy' has 'monkeyPatch'?", () => {
  expect(subBy.monkeyPatch).toBeDefined();
  expect(subBy.monkeyPatch).not.toBeNull();
  expect(typeof subBy.monkeyPatch).toBe("function");
})

test("does 'subBy' has 'removePatch' functions?", () => {
  expect(subBy.removePatch).toBeDefined();
  expect(subBy.removePatch).not.toBeNull();
  expect(typeof subBy.removePatch).toBe("function");
})

test("'subBy', is 'monkeyPatch' and 'removePatch' same?", () => {
  expect(subBy.monkeyPatch === subBy.removePatch).not.toBe(true);
})

test("is 'monkeyPatch' work with 'subBy'?", () => {
  subBy.removePatch();
  expect(xs.subBy).not.toBeDefined();
  subBy.monkeyPatch(); // Patch 🩹
  expect(xs.subBy).toBeDefined();
})

test("is 'subBy' working properly?", () => {
  expect(subBy(ds, 1)).toEqual([0, 1, 2, 3, 4, 5, 6, 5, 0]);
  expect(subBy(ds, 0)).toEqual(ds);
  expect(subBy(es, 5)).toEqual([-2, -4, -1, -4, 0, 4, -3, 1, 0]);
  expect(subBy(bs, 1.22)).toEqual([-2.7800000000000002, -3.8899999999999997, -5.00, -6.109999999999999, -7.13]);
  expect(subBy(nameArray, 5)).toEqual([NaN, NaN, NaN, NaN]);
  expect(subBy(emptyArray)).toEqual(emptyArray);
})

test("is 'subBy' working properly with patch?", () => {
  expect(ds.subBy(1)).toEqual([0, 1, 2, 3, 4, 5, 6, 5, 0]);
  expect(ds.subBy(0)).toEqual(ds);
  expect(es.subBy(5)).toEqual([-2, -4, -1, -4, 0, 4, -3, 1, 0]);
  expect(bs.subBy(1.22)).toEqual([-2.7800000000000002, -3.8899999999999997, -5.00, -6.109999999999999, -7.13]);
  expect(nameArray.subBy(5)).toEqual([NaN, NaN, NaN, NaN]);
  expect(emptyArray.subBy()).toEqual(emptyArray);
  subBy.removePatch();
})