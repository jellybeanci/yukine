const {arrayLog10} = require("../../../yuki/func/array/array-log10");
const {as} = require("../../../constants/alpha-beta/as");
const {xs} = require("../../../constants/alpha-beta/xs");
const {js} = require("../../../constants/alpha-beta/js");
const {ks} = require("../../../constants/alpha-beta/ks");
const {nameArray} = require("../../../constants/name-array");
const {emptyArray} = require("../../../constants/empty-array");

test("'arrayLog10' defined?", () => {
  expect(arrayLog10).toBeDefined();
  expect(arrayLog10).not.toBeNull();
})

test("does 'arrayLog10' has 'monkeyPatch'?", () => {
  expect(arrayLog10.monkeyPatch).toBeDefined();
  expect(arrayLog10.monkeyPatch).not.toBeNull();
  expect(typeof arrayLog10.monkeyPatch).toBe("function");
})

test("does 'arrayLog10' has 'removePatch' functions?", () => {
  expect(arrayLog10.removePatch).toBeDefined();
  expect(arrayLog10.removePatch).not.toBeNull();
  expect(typeof arrayLog10.removePatch).toBe("function");
})

test("'arrayLog10', is 'monkeyPatch' and 'removePatch' same?", () => {
  expect(arrayLog10.monkeyPatch === arrayLog10.removePatch).not.toBe(true);
})

test("is 'monkeyPatch' work with 'arrayLog10'?", () => {
  arrayLog10.removePatch();
  expect(xs.log10).not.toBeDefined();
  arrayLog10.monkeyPatch(); // Patch 🩹
  expect(xs.log10).toBeDefined();
})

test("is 'arrayLog10' working properly?", () => {
  expect(arrayLog10(ks)).toEqual(ks.map(Math.log10));
  expect(arrayLog10(js)).toEqual(js.map(Math.log10));
  expect(arrayLog10(as)).toEqual(as.map(Math.log10));
  expect(arrayLog10(nameArray)).toEqual([NaN, NaN, NaN, NaN]);
  expect(arrayLog10(emptyArray)).toEqual(emptyArray);
})

test("is 'arrayLog10' working properly with patch?", () => {
  expect(ks.log10()).toEqual(ks.map(Math.log10));
  expect(js.log10()).toEqual(js.map(Math.log10));
  expect(as.log10()).toEqual(as.map(Math.log10));
  expect(nameArray.log10()).toEqual([NaN, NaN, NaN, NaN]);
  expect(emptyArray.log10()).toEqual(emptyArray);
  arrayLog10.removePatch();
})