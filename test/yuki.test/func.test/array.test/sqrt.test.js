const {sqrt} = require("../../../yuki/func/array/sqrt");
const {xs} = require("../../../constants/alpha-beta/xs");
const {ds} = require("../../../constants/alpha-beta/ds");
const {fs} = require("../../../constants/alpha-beta/fs");
const {gs} = require("../../../constants/alpha-beta/gs");
const {emptyArray} = require("../../../constants/empty-array");
const {nameArray} = require("../../../constants/name-array");

test("'sqrt' defined?", () => {
  expect(sqrt).toBeDefined();
  expect(sqrt).not.toBeNull();
})

test("does 'sqrt' has 'monkeyPatch'?", () => {
  expect(sqrt.monkeyPatch).toBeDefined();
  expect(sqrt.monkeyPatch).not.toBeNull();
  expect(typeof sqrt.monkeyPatch).toBe("function");
})

test("does 'sqrt' has 'removePatch' functions?", () => {
  expect(sqrt.removePatch).toBeDefined();
  expect(sqrt.removePatch).not.toBeNull();
  expect(typeof sqrt.removePatch).toBe("function");
})

test("'sqrt', is 'monkeyPatch' and 'removePatch' same?", () => {
  expect(sqrt.monkeyPatch === sqrt.removePatch).not.toBe(true);
})

test("is 'monkeyPatch' work with 'sqrt'?", () => {
  sqrt.removePatch();
  expect(xs.sqrt).not.toBeDefined();
  sqrt.monkeyPatch(); // Patch 🩹
  expect(xs.sqrt).toBeDefined();
})

test("is 'sqrt' working properly?", () => {
  expect(sqrt(ds)).toEqual([1, 1.4142135623730951, 1.7320508075688772, 2, 2.23606797749979, 2.449489742783178, 2.6457513110645907, 2.449489742783178, 1]);
  expect(sqrt([1, 1, 1, 1, 1, 1])).toEqual([1, 1, 1, 1, 1, 1]);
  expect(sqrt(fs)).toEqual([NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN]);
  expect(sqrt(gs)).toEqual(ds);
  expect(sqrt(nameArray)).toEqual([NaN, NaN, NaN, NaN]);
  expect(sqrt(emptyArray)).toEqual(emptyArray);
})

test("is 'sqrt' working properly with patch?", () => {
  expect(ds.sqrt()).toEqual([1, 1.4142135623730951, 1.7320508075688772, 2, 2.23606797749979, 2.449489742783178, 2.6457513110645907, 2.449489742783178, 1]);
  expect([1, 1, 1, 1, 1, 1].sqrt()).toEqual([1, 1, 1, 1, 1, 1]);
  expect(fs.sqrt()).toEqual([NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN]);
  expect(gs.sqrt()).toEqual(ds);
  expect(nameArray.sqrt()).toEqual([NaN, NaN, NaN, NaN]);
  expect(emptyArray.sqrt()).toEqual(emptyArray);
  sqrt.removePatch();
})