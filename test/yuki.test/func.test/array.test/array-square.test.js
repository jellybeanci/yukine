const {arraySquare} = require("../../../yuki/func/array/array-square");
const {pow} = require("../../../yuki/func/array/pow");
const {as} = require("../../../constants/alpha-beta/as");
const {bs} = require("../../../constants/alpha-beta/bs");
const {fs} = require("../../../constants/alpha-beta/fs");
const {hs} = require("../../../constants/alpha-beta/hs");
const {ks} = require("../../../constants/alpha-beta/ks");
const {ns} = require("../../../constants/alpha-beta/ns");
const {xs} = require("../../../constants/alpha-beta/xs");
const {ys} = require("../../../constants/alpha-beta/ys");
const {zs} = require("../../../constants/alpha-beta/zs");
const {emptyArray} = require("../../../constants/empty-array");
const {nameArray} = require("../../../constants/name-array");

test("'arraySquare' defined?", () => {
  expect(arraySquare).toBeDefined();
  expect(arraySquare).not.toBeNull();
})

test("does 'arraySquare' has 'monkeyPatch'?", () => {
  expect(arraySquare.monkeyPatch).toBeDefined();
  expect(arraySquare.monkeyPatch).not.toBeNull();
  expect(typeof arraySquare.monkeyPatch).toBe("function");
})

test("does 'arraySquare' has 'removePatch' functions?", () => {
  expect(arraySquare.removePatch).toBeDefined();
  expect(arraySquare.removePatch).not.toBeNull();
  expect(typeof arraySquare.removePatch).toBe("function");
})

test("'arraySquare', is 'monkeyPatch' and 'removePatch' same?", () => {
  expect(arraySquare.monkeyPatch === arraySquare.removePatch).not.toBe(true);
})

test("is 'monkeyPatch' work with 'arraySquare'?", () => {
  arraySquare.removePatch();
  expect(xs.square).not.toBeDefined();
  arraySquare.monkeyPatch(); // Patch 🩹
  expect(xs.square).toBeDefined();
})

test("is 'arraySquare' working properly?", () => {
  expect(arraySquare(as)).toEqual(pow(as, 2));
  expect(arraySquare(bs)).toEqual(pow(bs, 2));
  expect(arraySquare(xs)).toEqual(pow(xs, 2));
  expect(arraySquare(ys)).toEqual(pow(ys, 2));
  expect(arraySquare(zs)).toEqual(pow(zs, 2));
  expect(arraySquare(ks)).toEqual(pow(ks, 2));
  expect(arraySquare(ns)).toEqual(pow(ns, 2));
  expect(arraySquare(hs)).toEqual(pow(hs, 2));
  expect(arraySquare(fs)).toEqual(pow(fs, 2));
  expect(arraySquare(nameArray)).toEqual([NaN, NaN, NaN, NaN]);
  expect(arraySquare(emptyArray)).toEqual([]);
})

test("is 'arraySquare' working properly with patch?", () => {
  expect(as.square()).toEqual(pow(as, 2));
  expect(bs.square()).toEqual(pow(bs, 2));
  expect(xs.square()).toEqual(pow(xs, 2));
  expect(ys.square()).toEqual(pow(ys, 2));
  expect(zs.square()).toEqual(pow(zs, 2));
  expect(ks.square()).toEqual(pow(ks, 2));
  expect(ns.square()).toEqual(pow(ns, 2));
  expect(hs.square()).toEqual(pow(hs, 2));
  expect(fs.square()).toEqual(pow(fs, 2));
  expect(nameArray.square()).toEqual([NaN, NaN, NaN, NaN]);
  expect(emptyArray.square()).toEqual([]);
  arraySquare.removePatch();
})