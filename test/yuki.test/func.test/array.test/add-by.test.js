const {addBy} = require("../../../yuki/func/array/add-by");
const {bs} = require("../../../constants/alpha-beta/bs");
const {ds} = require("../../../constants/alpha-beta/ds");
const {es} = require("../../../constants/alpha-beta/es");
const {xs} = require("../../../constants/alpha-beta/xs");
const {emptyArray} = require("../../../constants/empty-array");
const {nameArray} = require("../../../constants/name-array");

test("'addBy' defined?", () => {
  expect(addBy).toBeDefined();
  expect(addBy).not.toBeNull();
})

test("does 'addBy' has 'monkeyPatch'?", () => {
  expect(addBy.monkeyPatch).toBeDefined();
  expect(addBy.monkeyPatch).not.toBeNull();
  expect(typeof addBy.monkeyPatch).toBe("function");
})

test("does 'addBy' has 'removePatch' functions?", () => {
  expect(addBy.removePatch).toBeDefined();
  expect(addBy.removePatch).not.toBeNull();
  expect(typeof addBy.removePatch).toBe("function");
})

test("'addBy', is 'monkeyPatch' and 'removePatch' same?", () => {
  expect(addBy.monkeyPatch === addBy.removePatch).not.toBe(true);
})

test("is 'monkeyPatch' work with 'addBy'?", () => {
  addBy.removePatch();
  expect(xs.addBy).not.toBeDefined();
  addBy.monkeyPatch(); // Patch 🩹
  expect(xs.addBy).toBeDefined();
})

test("is 'addBy' working properly?", () => {
  expect(addBy(ds, 5)).toEqual([6, 7, 8, 9, 10, 11, 12, 11, 6]);
  expect(addBy(ds, 0)).toEqual(ds);
  expect(addBy(es, 10)).toEqual([13, 11, 14, 11, 15, 19, 12, 16, 15]);
  expect(addBy(bs, 4)).toEqual([2.44, 1.33, 0.2200000000000002, -0.8899999999999997, -1.9100000000000001]);
  expect(addBy(nameArray, 5)).toEqual(["Göksel5", "Arda5", "Kaan5", "Ezgi5"]);
  expect(addBy(emptyArray)).toEqual(emptyArray);
})

test("is 'addBy' working properly with patch?", () => {
  expect(ds.addBy(5)).toEqual([6, 7, 8, 9, 10, 11, 12, 11, 6]);
  expect(ds.addBy(0)).toEqual(ds);
  expect(es.addBy(10)).toEqual([13, 11, 14, 11, 15, 19, 12, 16, 15]);
  expect(bs.addBy(4)).toEqual([2.44, 1.33, 0.2200000000000002, -0.8899999999999997, -1.9100000000000001]);
  expect(nameArray.addBy(5)).toEqual(["Göksel5", "Arda5", "Kaan5", "Ezgi5"]);
  expect(emptyArray.addBy()).toEqual(emptyArray);
  addBy.removePatch();
})