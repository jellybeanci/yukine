const {arrayTand} = require("../../../yuki/func/array/array-tand");
const {tand} = require("../../../yuki/func/math/tand");
const {as} = require("../../../constants/alpha-beta/as");
const {xs} = require("../../../constants/alpha-beta/xs");
const {js} = require("../../../constants/alpha-beta/js");
const {ks} = require("../../../constants/alpha-beta/ks");
const {nameArray} = require("../../../constants/name-array");
const {emptyArray} = require("../../../constants/empty-array");

test("'arrayTand' defined?", () => {
  expect(arrayTand).toBeDefined();
  expect(arrayTand).not.toBeNull();
})

test("does 'arrayTand' has 'monkeyPatch'?", () => {
  expect(arrayTand.monkeyPatch).toBeDefined();
  expect(arrayTand.monkeyPatch).not.toBeNull();
  expect(typeof arrayTand.monkeyPatch).toBe("function");
})

test("does 'arrayTand' has 'removePatch' functions?", () => {
  expect(arrayTand.removePatch).toBeDefined();
  expect(arrayTand.removePatch).not.toBeNull();
  expect(typeof arrayTand.removePatch).toBe("function");
})

test("'arrayTand', is 'monkeyPatch' and 'removePatch' same?", () => {
  expect(arrayTand.monkeyPatch === arrayTand.removePatch).not.toBe(true);
})

test("is 'monkeyPatch' work with 'arrayTand'?", () => {
  arrayTand.removePatch();
  expect(xs.tand).not.toBeDefined();
  arrayTand.monkeyPatch(); // Patch 🩹
  expect(xs.tand).toBeDefined();
})

test("is 'arrayTand' working properly?", () => {
  expect(arrayTand(ks)).toEqual(ks.map(tand));
  expect(arrayTand(js)).toEqual(js.map(tand));
  expect(arrayTand(as)).toEqual(as.map(tand));
  expect(arrayTand(nameArray)).toEqual([NaN, NaN, NaN, NaN]);
  expect(arrayTand(emptyArray)).toEqual(emptyArray);
})

test("is 'arrayTand' working properly with patch?", () => {
  expect(ks.tand()).toEqual(ks.map(tand));
  expect(js.tand()).toEqual(js.map(tand));
  expect(as.tand()).toEqual(as.map(tand));
  expect(nameArray.tand()).toEqual([NaN, NaN, NaN, NaN]);
  expect(emptyArray.tand()).toEqual(emptyArray);
  arrayTand.removePatch();
})