const {abs} = require("../../../yuki/func/array/abs");
const {as} = require("../../../constants/alpha-beta/as");
const {bs} = require("../../../constants/alpha-beta/bs");
const {ds} = require("../../../constants/alpha-beta/ds");
const {fs} = require("../../../constants/alpha-beta/fs");
const {hs} = require("../../../constants/alpha-beta/hs");
const {ks} = require("../../../constants/alpha-beta/ks");
const {ns} = require("../../../constants/alpha-beta/ns");
const {xs} = require("../../../constants/alpha-beta/xs");
const {ys} = require("../../../constants/alpha-beta/ys");
const {zs} = require("../../../constants/alpha-beta/zs");
const {emptyArray} = require("../../../constants/empty-array");
const {nameArray} = require("../../../constants/name-array");

test("'abs' defined?", () => {
  expect(abs).toBeDefined();
  expect(abs).not.toBeNull();
})

test("does 'abs' has 'monkeyPatch'?", () => {
  expect(abs.monkeyPatch).toBeDefined();
  expect(abs.monkeyPatch).not.toBeNull();
  expect(typeof abs.monkeyPatch).toBe("function");
})

test("does 'abs' has 'removePatch' functions?", () => {
  expect(abs.removePatch).toBeDefined();
  expect(abs.removePatch).not.toBeNull();
  expect(typeof abs.removePatch).toBe("function");
})

test("'abs', is 'monkeyPatch' and 'removePatch' same?", () => {
  expect(abs.monkeyPatch === abs.removePatch).not.toBe(true);
})

test("is 'monkeyPatch' work with 'abs'?", () => {
  abs.removePatch();
  expect(xs.abs).not.toBeDefined();
  abs.monkeyPatch(); // Patch 🩹
  expect(xs.abs).toBeDefined();
})

test("is 'abs' working properly?", () => {
  expect(abs(as)).toEqual([0, 1, 4, 9, 16]);
  expect(abs(bs)).toEqual([1.56, 2.67, 3.78, 4.89, 5.91]);
  expect(abs(xs)).toEqual([1, 2, 3, 4, 5, 6]);
  expect(abs(ys)).toEqual([4, 2, 5, 10, 2, 1]);
  expect(abs(zs)).toEqual([1, 2, 3, 4, 5, 6]);
  expect(abs(ks)).toEqual([1.2, 2.3, 3.4, 4.5, 5.6, 0]);
  expect(abs(ns)).toEqual([15, 30, 45, 60, 90, 135, 210]);
  expect(abs(hs)).toEqual([1, 8, 27, 64, 125, 216, 343, 512]);
  expect(abs(fs)).toEqual(ds);
  expect(abs(nameArray)).toEqual([NaN, NaN, NaN, NaN]);
  expect(abs(emptyArray)).toEqual([]);
})

test("is 'abs' working properly with patch?", () => {
  expect(as.abs()).toEqual([0, 1, 4, 9, 16]);
  expect(bs.abs()).toEqual([1.56, 2.67, 3.78, 4.89, 5.91]);
  expect(xs.abs()).toEqual([1, 2, 3, 4, 5, 6]);
  expect(ys.abs()).toEqual([4, 2, 5, 10, 2, 1]);
  expect(zs.abs()).toEqual([1, 2, 3, 4, 5, 6]);
  expect(ks.abs()).toEqual([1.2, 2.3, 3.4, 4.5, 5.6, 0]);
  expect(ns.abs()).toEqual([15, 30, 45, 60, 90, 135, 210]);
  expect(hs.abs()).toEqual([1, 8, 27, 64, 125, 216, 343, 512]);
  expect(fs.abs()).toEqual(ds);
  expect(nameArray.abs()).toEqual([NaN, NaN, NaN, NaN]);
  expect(emptyArray.abs()).toEqual([]);
})