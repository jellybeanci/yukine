const {multBy} = require("../../../yuki/func/array/mult-by");
const {mult} = require("../../../yuki/func/array/mult");
const {ds} = require("../../../constants/alpha-beta/ds");
const {es} = require("../../../constants/alpha-beta/es");
const {xs} = require("../../../constants/alpha-beta/xs");
const {emptyArray} = require("../../../constants/empty-array");
const {nameArray} = require("../../../constants/name-array");

test("'multBy' defined?", () => {
  expect(multBy).toBeDefined();
  expect(multBy).not.toBeNull();
})

test("does 'multBy' has 'monkeyPatch'?", () => {
  expect(multBy.monkeyPatch).toBeDefined();
  expect(multBy.monkeyPatch).not.toBeNull();
  expect(typeof multBy.monkeyPatch).toBe("function");
})

test("does 'multBy' has 'removePatch' functions?", () => {
  expect(multBy.removePatch).toBeDefined();
  expect(multBy.removePatch).not.toBeNull();
  expect(typeof multBy.removePatch).toBe("function");
})

test("'multBy', is 'monkeyPatch' and 'removePatch' same?", () => {
  expect(multBy.monkeyPatch === multBy.removePatch).not.toBe(true);
})

test("is 'monkeyPatch' work with 'multBy'?", () => {
  multBy.removePatch();
  expect(xs.multBy).not.toBeDefined();
  multBy.monkeyPatch(); // Patch 🩹
  expect(xs.multBy).toBeDefined();
})

test("is 'multBy' working properly?", () => {
  expect(multBy(ds, 1)).toEqual(ds);
  expect(multBy(ds, 3.2)).toEqual(mult(ds, Array(ds.length).fill(3.2)));
  expect(multBy(ds, 0)).toEqual(Array(ds.length).fill(0));
  expect(multBy(es, -1.23456)).toEqual(mult(es, Array(es.length).fill(-1.23456)));
  expect(multBy(nameArray, 420)).toEqual([NaN, NaN, NaN, NaN]);
  expect(multBy(emptyArray)).toEqual(emptyArray);
})

test("is 'multBy' working properly with patch?", () => {
  expect(ds.multBy(1)).toEqual(ds);
  expect(ds.multBy(3.2)).toEqual(mult(ds, Array(ds.length).fill(3.2)));
  expect(ds.multBy(0)).toEqual(Array(ds.length).fill(0));
  expect(es.multBy(-1.23456)).toEqual(mult(es, Array(es.length).fill(-1.23456)));
  expect(nameArray.multBy(420)).toEqual([NaN, NaN, NaN, NaN]);
  expect(emptyArray.multBy()).toEqual(emptyArray);
  multBy.removePatch();
})