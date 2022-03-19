const {arrayTan} = require("../../../yuki/func/array/array-tan");
const {as} = require("../../../constants/alpha-beta/as");
const {xs} = require("../../../constants/alpha-beta/xs");
const {ys} = require("../../../constants/alpha-beta/ys");
const {js} = require("../../../constants/alpha-beta/js");
const {ks} = require("../../../constants/alpha-beta/ks");
const {nameArray} = require("../../../constants/name-array");
const {emptyArray} = require("../../../constants/empty-array");

test("'arrayTan' defined?", () => {
  expect(arrayTan).toBeDefined();
  expect(arrayTan).not.toBeNull();
})

test("does 'arrayTan' has 'monkeyPatch'?", () => {
  expect(arrayTan.monkeyPatch).toBeDefined();
  expect(arrayTan.monkeyPatch).not.toBeNull();
  expect(typeof arrayTan.monkeyPatch).toBe("function");
})

test("does 'arrayTan' has 'removePatch' functions?", () => {
  expect(arrayTan.removePatch).toBeDefined();
  expect(arrayTan.removePatch).not.toBeNull();
  expect(typeof arrayTan.removePatch).toBe("function");
})

test("'arrayTan', is 'monkeyPatch' and 'removePatch' same?", () => {
  expect(arrayTan.monkeyPatch === arrayTan.removePatch).not.toBe(true);
})

test("is 'monkeyPatch' work with 'arrayTan'?", () => {
  arrayTan.removePatch();
  expect(xs.tan).not.toBeDefined();
  arrayTan.monkeyPatch(); // Patch 🩹
  expect(xs.tan).toBeDefined();
})

test("is 'arrayTan' working properly?", () => {
  expect(arrayTan(xs)).toEqual([1.5574077246549023, -2.185039863261519, -0.1425465430742778, 1.1578212823495777, -3.380515006246586, -0.29100619138474915]);
  expect(arrayTan(ys)).toEqual([-1.1578212823495777, -2.185039863261519, 3.380515006246586, 0.6483608274590866, 2.185039863261519, 1.5574077246549023]);
  expect(arrayTan(ks)).toEqual(ks.map(Math.tan));
  expect(arrayTan(js)).toEqual(js.map(Math.tan));
  expect(arrayTan(as)).toEqual(as.map(Math.tan));
  expect(arrayTan(nameArray)).toEqual([NaN, NaN, NaN, NaN]);
  expect(arrayTan(emptyArray)).toEqual(emptyArray);
})

test("is 'arrayTan' working properly with patch?", () => {
  expect(xs.tan()).toEqual([1.5574077246549023, -2.185039863261519, -0.1425465430742778, 1.1578212823495777, -3.380515006246586, -0.29100619138474915]);
  expect(ys.tan()).toEqual([-1.1578212823495777, -2.185039863261519, 3.380515006246586, 0.6483608274590866, 2.185039863261519, 1.5574077246549023]);
  expect(ks.tan()).toEqual(ks.map(Math.tan));
  expect(js.tan()).toEqual(js.map(Math.tan));
  expect(as.tan()).toEqual(as.map(Math.tan));
  expect(nameArray.tan()).toEqual([NaN, NaN, NaN, NaN]);
  expect(emptyArray.tan()).toEqual(emptyArray);
  arrayTan.removePatch();
})