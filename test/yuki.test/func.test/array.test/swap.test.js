const {swap} = require("../../../yuki/func/array/swap");
const {xs} = require("../../../constants/alpha-beta/xs");
const {os} = require("../../../constants/alpha-beta/os");

test("'swap' defined?", () => {
  expect(swap).toBeDefined();
  expect(swap).not.toBeNull();
})

test("does 'swap' has 'monkeyPatch'?", () => {
  expect(swap.monkeyPatch).toBeDefined();
  expect(swap.monkeyPatch).not.toBeNull();
  expect(typeof swap.monkeyPatch).toBe("function");
})

test("does 'swap' has 'removePatch' functions?", () => {
  expect(swap.removePatch).toBeDefined();
  expect(swap.removePatch).not.toBeNull();
  expect(typeof swap.removePatch).toBe("function");
})

test("'swap', is 'monkeyPatch' and 'removePatch' same?", () => {
  expect(swap.monkeyPatch === swap.removePatch).not.toBe(true);
})

test("is 'monkeyPatch' work with 'swap'?", () => {
  swap.removePatch();
  expect(xs.swap).not.toBeDefined();
  swap.monkeyPatch(); // Patch 🩹
  expect(xs.swap).toBeDefined();
})

test("is 'swap' working properly?", () => {
  const testArray = os.slice();
  swap(testArray, 1, 5);
  expect(testArray).toEqual([3, 54, 12, 4, 25, 2, 14, 36, 5]);
  swap(testArray, 3, 4);
  expect(testArray).toEqual([3, 54, 12, 25, 4, 2, 14, 36, 5]);
  swap(testArray, 0, 8);
  expect(testArray).toEqual([5, 54, 12, 25, 4, 2, 14, 36, 3]);
})

test("is 'swap' working properly with patch?", () => {
  const testArray = os.slice();
  testArray.swap(1, 5);
  expect(testArray).toEqual([3, 54, 12, 4, 25, 2, 14, 36, 5]);
  testArray.swap(3, 4);
  expect(testArray).toEqual([3, 54, 12, 25, 4, 2, 14, 36, 5]);
  testArray.swap(0, 8);
  expect(testArray).toEqual([5, 54, 12, 25, 4, 2, 14, 36, 3]);
  swap.removePatch();
})