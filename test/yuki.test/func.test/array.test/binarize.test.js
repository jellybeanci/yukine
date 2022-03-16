const {binarize} = require("../../../yuki/func/array/binarize");
const {xs} = require("../../../constants/alpha-beta/xs");
const {booleanArray} = require("../../../constants/boolean-array");
const {numberArray} = require("../../../constants/number-array");
const {nameArray} = require("../../../constants/name-array");
const {emptyArray} = require("../../../constants/empty-array");
const {garbageArray} = require("../../../constants/garbage-array");

test("'binarize' defined?", () => {
  expect(binarize).toBeDefined();
  expect(binarize).not.toBeNull();
})

test("does 'binarize' has 'monkeyPatch'?", () => {
  expect(binarize.monkeyPatch).toBeDefined();
  expect(binarize.monkeyPatch).not.toBeNull();
  expect(typeof binarize.monkeyPatch).toBe("function");
})

test("does 'binarize' has 'removePatch' functions?", () => {
  expect(binarize.removePatch).toBeDefined();
  expect(binarize.removePatch).not.toBeNull();
  expect(typeof binarize.removePatch).toBe("function");
})

test("'binarize', is 'monkeyPatch' and 'removePatch' same?", () => {
  expect(binarize.monkeyPatch === binarize.removePatch).not.toBe(true);
})

test("is 'monkeyPatch' work with 'binarize'?", () => {
  binarize.removePatch();
  expect(xs.binarize).not.toBeDefined();
  binarize.monkeyPatch(); // Patch 🩹
  expect(xs.binarize).toBeDefined();
})

test("is 'binarize' working properly?", () => {
  expect(binarize(booleanArray)).toEqual(numberArray);
  expect(binarize(garbageArray)).toEqual([1, 1, 0, 0, 0, 1, 1, 1, 1]);
  expect(binarize(nameArray)).toEqual([1, 1, 1, 1]);
  expect(binarize(numberArray)).toEqual(numberArray);
  expect(binarize(emptyArray)).toEqual([]);
})

test("is 'binarize' working properly with patch?", () => {
  expect(booleanArray.binarize()).toEqual(numberArray);
  expect(nameArray.binarize()).toEqual([1, 1, 1, 1]);
  expect(garbageArray.binarize()).toEqual([1, 1, 0, 0, 0, 1, 1, 1, 1]);
  expect(numberArray.binarize()).toEqual(numberArray);
  expect(emptyArray.binarize()).toEqual([]);
  binarize.removePatch();
})