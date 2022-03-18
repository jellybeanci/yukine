const {divBy} = require("../../../yuki/func/array/div-by");
const {div} = require("../../../yuki/func/array/div");
const {ds} = require("../../../constants/alpha-beta/ds");
const {es} = require("../../../constants/alpha-beta/es");
const {xs} = require("../../../constants/alpha-beta/xs");
const {emptyArray} = require("../../../constants/empty-array");
const {nameArray} = require("../../../constants/name-array");

test("'divBy' defined?", () => {
  expect(divBy).toBeDefined();
  expect(divBy).not.toBeNull();
})

test("does 'divBy' has 'monkeyPatch'?", () => {
  expect(divBy.monkeyPatch).toBeDefined();
  expect(divBy.monkeyPatch).not.toBeNull();
  expect(typeof divBy.monkeyPatch).toBe("function");
})

test("does 'divBy' has 'removePatch' functions?", () => {
  expect(divBy.removePatch).toBeDefined();
  expect(divBy.removePatch).not.toBeNull();
  expect(typeof divBy.removePatch).toBe("function");
})

test("'divBy', is 'monkeyPatch' and 'removePatch' same?", () => {
  expect(divBy.monkeyPatch === divBy.removePatch).not.toBe(true);
})

test("is 'monkeyPatch' work with 'divBy'?", () => {
  divBy.removePatch();
  expect(xs.divBy).not.toBeDefined();
  divBy.monkeyPatch(); // Patch 🩹
  expect(xs.divBy).toBeDefined();
})

test("is 'divBy' working properly?", () => {
  expect(divBy(ds, 1)).toEqual(ds);
  expect(divBy(ds, 3.2)).toEqual(div(ds, Array(ds.length).fill(3.2)));
  expect(divBy(ds, 0)).toEqual(Array(ds.length).fill(Infinity));
  expect(divBy(es, -1.23456)).toEqual(div(es, Array(es.length).fill(-1.23456)));
  expect(divBy(nameArray, 420)).toEqual([NaN, NaN, NaN, NaN]);
  expect(divBy(emptyArray)).toEqual(emptyArray);
})

test("is 'divBy' working properly with patch?", () => {
  expect(ds.divBy(1)).toEqual(ds);
  expect(ds.divBy(3.2)).toEqual(div(ds, Array(ds.length).fill(3.2)));
  expect(ds.divBy(0)).toEqual(Array(ds.length).fill(Infinity));
  expect(es.divBy(-1.23456)).toEqual(div(es, Array(es.length).fill(-1.23456)));
  expect(nameArray.divBy(420)).toEqual([NaN, NaN, NaN, NaN]);
  expect(emptyArray.divBy()).toEqual(emptyArray);
  divBy.removePatch();
})