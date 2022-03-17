const {toBitString} = require("../../../yuki/func/array/to-bit-string");
const {xs} = require("../../../constants/alpha-beta/xs");
const {booleanArray} = require("../../../constants/boolean-array");
const {numberArray} = require("../../../constants/number-array");
const {nameArray} = require("../../../constants/name-array");
const {emptyArray} = require("../../../constants/empty-array");
const {garbageArray} = require("../../../constants/garbage-array");

test("'toBitString' defined?", () => {
  expect(toBitString).toBeDefined();
  expect(toBitString).not.toBeNull();
})

test("does 'toBitString' has 'monkeyPatch'?", () => {
  expect(toBitString.monkeyPatch).toBeDefined();
  expect(toBitString.monkeyPatch).not.toBeNull();
  expect(typeof toBitString.monkeyPatch).toBe("function");
})

test("does 'toBitString' has 'removePatch' functions?", () => {
  expect(toBitString.removePatch).toBeDefined();
  expect(toBitString.removePatch).not.toBeNull();
  expect(typeof toBitString.removePatch).toBe("function");
})

test("'toBitString', is 'monkeyPatch' and 'removePatch' same?", () => {
  expect(toBitString.monkeyPatch === toBitString.removePatch).not.toBe(true);
})

test("is 'monkeyPatch' work with 'toBitString'?", () => {
  toBitString.removePatch();
  expect(xs.toBitString).not.toBeDefined();
  toBitString.monkeyPatch(); // Patch 🩹
  expect(xs.toBitString).toBeDefined();
})

test("is 'toBitString' working properly?", () => {
  expect(toBitString(booleanArray)).toEqual("1001111001");
  expect(toBitString(nameArray)).toEqual("1111");
  expect(toBitString(garbageArray)).toEqual("110001111");
  expect(toBitString(numberArray)).toEqual("1001111001");
  expect(toBitString(emptyArray)).toEqual("");
})

test("is 'toBitString' working properly with patch?", () => {
  expect(booleanArray.toBitString()).toEqual("1001111001");
  expect(nameArray.toBitString()).toEqual("1111");
  expect(garbageArray.toBitString()).toEqual("110001111");
  expect(numberArray.toBitString()).toEqual("1001111001");
  expect(emptyArray.toBitString()).toEqual("");
  toBitString.removePatch();
})