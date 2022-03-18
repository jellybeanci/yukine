const {divFrom} = require("../../../yuki/func/array/div-from");
const {div} = require("../../../yuki/func/array/div");
const {ds} = require("../../../constants/alpha-beta/ds");
const {es} = require("../../../constants/alpha-beta/es");
const {xs} = require("../../../constants/alpha-beta/xs");
const {emptyArray} = require("../../../constants/empty-array");
const {nameArray} = require("../../../constants/name-array");

test("'divFrom' defined?", () => {
  expect(divFrom).toBeDefined();
  expect(divFrom).not.toBeNull();
})

test("does 'divFrom' has 'monkeyPatch'?", () => {
  expect(divFrom.monkeyPatch).toBeDefined();
  expect(divFrom.monkeyPatch).not.toBeNull();
  expect(typeof divFrom.monkeyPatch).toBe("function");
})

test("does 'divFrom' has 'removePatch' functions?", () => {
  expect(divFrom.removePatch).toBeDefined();
  expect(divFrom.removePatch).not.toBeNull();
  expect(typeof divFrom.removePatch).toBe("function");
})

test("'divFrom', is 'monkeyPatch' and 'removePatch' same?", () => {
  expect(divFrom.monkeyPatch === divFrom.removePatch).not.toBe(true);
})

test("is 'monkeyPatch' work with 'divFrom'?", () => {
  divFrom.removePatch();
  expect(xs.divFrom).not.toBeDefined();
  divFrom.monkeyPatch(); // Patch 🩹
  expect(xs.divFrom).toBeDefined();
})

test("is 'divFrom' working properly?", () => {
  expect(divFrom(ds, 1)).toEqual(div(Array(ds.length).fill(1), ds));
  expect(divFrom(ds, 3.2)).toEqual(div(Array(ds.length).fill(3.2), ds));
  expect(divFrom(ds, 0)).toEqual(Array(ds.length).fill(0));
  expect(divFrom(es, -1.23456)).toEqual(div(Array(es.length).fill(-1.23456), es));
  expect(divFrom(nameArray, 420)).toEqual([NaN, NaN, NaN, NaN]);
  expect(divFrom(emptyArray)).toEqual(emptyArray);
})

test("is 'divFrom' working properly with patch?", () => {
  expect(ds.divFrom(1)).toEqual(div(Array(ds.length).fill(1), ds));
  expect(ds.divFrom(3.2)).toEqual(div(Array(ds.length).fill(3.2), ds));
  expect(ds.divFrom(0)).toEqual(Array(ds.length).fill(0));
  expect(es.divFrom(-1.23456)).toEqual(div(Array(es.length).fill(-1.23456), es));
  expect(nameArray.divFrom(420)).toEqual([NaN, NaN, NaN, NaN]);
  expect(emptyArray.divFrom()).toEqual(emptyArray);
  divFrom.removePatch();
})