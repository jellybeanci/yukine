const {zip} = require("../../../yuki/func/array/zip");
const {xs} = require("../../../constants/alpha-beta/xs");
const {zipArray} = require("../../../constants/zip-array");
const {simpleArray} = require("../../../constants/simple-array");

test("'zip' defined?", () => {
  expect(zip).toBeDefined();
  expect(zip).not.toBeNull();
})

test("does 'zip' has 'monkeyPatch'?", () => {
  expect(zip.monkeyPatch).toBeDefined();
  expect(zip.monkeyPatch).not.toBeNull();
  expect(typeof zip.monkeyPatch).toBe("function");
})

test("does 'zip' has 'removePatch' functions?", () => {
  expect(zip.removePatch).toBeDefined();
  expect(zip.removePatch).not.toBeNull();
  expect(typeof zip.removePatch).toBe("function");
})

test("'zip', is 'monkeyPatch' and 'removePatch' same?", () => {
  expect(zip.monkeyPatch === zip.removePatch).not.toBe(true);
})

test("is 'monkeyPatch' work with 'zip'?", () => {
  zip.removePatch();
  expect(xs.zip).not.toBeDefined();
  zip.monkeyPatch(); // Patch 🩹
  expect(xs.zip).toBeDefined();
})

test("is 'zip' working properly?", () => {
  expect(zip(zipArray)).toEqual([['a', 1, 'x', 'i'], ['b', 2, 'y', 'j'], ['c', 3, 'z', 'k']]);
  expect(zip(simpleArray)).toEqual([[1], [2], [3], [4]]);
})

test("is 'zip' working properly with patch?", () => {
  expect(zipArray.zip()).toEqual([['a', 1, 'x', 'i'], ['b', 2, 'y', 'j'], ['c', 3, 'z', 'k']]);
  expect(simpleArray.zip()).toEqual([[1], [2], [3], [4]]);
  zip.removePatch();
})