const {arrayTanh} = require("../../../yuki/func/array/array-tanh");
const {as} = require("../../../constants/alpha-beta/as");
const {xs} = require("../../../constants/alpha-beta/xs");
const {js} = require("../../../constants/alpha-beta/js");
const {ks} = require("../../../constants/alpha-beta/ks");
const {nameArray} = require("../../../constants/name-array");
const {emptyArray} = require("../../../constants/empty-array");

test("'arrayTanh' defined?", () => {
  expect(arrayTanh).toBeDefined();
  expect(arrayTanh).not.toBeNull();
})

test("does 'arrayTanh' has 'monkeyPatch'?", () => {
  expect(arrayTanh.monkeyPatch).toBeDefined();
  expect(arrayTanh.monkeyPatch).not.toBeNull();
  expect(typeof arrayTanh.monkeyPatch).toBe("function");
})

test("does 'arrayTanh' has 'removePatch' functions?", () => {
  expect(arrayTanh.removePatch).toBeDefined();
  expect(arrayTanh.removePatch).not.toBeNull();
  expect(typeof arrayTanh.removePatch).toBe("function");
})

test("'arrayTanh', is 'monkeyPatch' and 'removePatch' same?", () => {
  expect(arrayTanh.monkeyPatch === arrayTanh.removePatch).not.toBe(true);
})

test("is 'monkeyPatch' work with 'arrayTanh'?", () => {
  arrayTanh.removePatch();
  expect(xs.tanh).not.toBeDefined();
  arrayTanh.monkeyPatch(); // Patch 🩹
  expect(xs.tanh).toBeDefined();
})

test("is 'arrayTanh' working properly?", () => {
  expect(arrayTanh(ks)).toEqual(ks.map(Math.tanh));
  expect(arrayTanh(js)).toEqual(js.map(Math.tanh));
  expect(arrayTanh(as)).toEqual(as.map(Math.tanh));
  expect(arrayTanh(nameArray)).toEqual([NaN, NaN, NaN, NaN]);
  expect(arrayTanh(emptyArray)).toEqual(emptyArray);
})

test("is 'arrayTanh' working properly with patch?", () => {
  expect(ks.tanh()).toEqual(ks.map(Math.tanh));
  expect(js.tanh()).toEqual(js.map(Math.tanh));
  expect(as.tanh()).toEqual(as.map(Math.tanh));
  expect(nameArray.tanh()).toEqual([NaN, NaN, NaN, NaN]);
  expect(emptyArray.tanh()).toEqual(emptyArray);
  arrayTanh.removePatch();
})