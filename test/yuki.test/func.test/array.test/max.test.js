const {max} = require("../../../yuki/func/array/max");
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

test("'max' defined?", () => {
  expect(max).toBeDefined();
  expect(max).not.toBeNull();
})

test("does 'max' has 'monkeyPatch'?", () => {
  expect(max.monkeyPatch).toBeDefined();
  expect(max.monkeyPatch).not.toBeNull();
  expect(typeof max.monkeyPatch).toBe("function");
})

test("does 'max' has 'removePatch' functions?", () => {
  expect(max.removePatch).toBeDefined();
  expect(max.removePatch).not.toBeNull();
  expect(typeof max.removePatch).toBe("function");
})

test("'max', is 'monkeyPatch' and 'removePatch' same?", () => {
  expect(max.monkeyPatch === max.removePatch).not.toBe(true);
})

test("is 'monkeyPatch' work with 'max'?", () => {
  max.removePatch();
  expect(xs.max).not.toBeDefined();
  max.monkeyPatch(); // Patch 🩹
  expect(xs.max).toBeDefined();
})

test("is 'max' working properly?", () => {
  expect(max(as)).toEqual(0);
  expect(max(bs)).toEqual(-1.56);
  expect(max(xs)).toEqual(6);
  expect(max(ys)).toEqual(10);
  expect(max(zs)).toEqual(6);
  expect(max(ks)).toBeCloseTo(4.5);
  expect(max(ns)).toEqual(210);
  expect(max(hs)).toEqual(512);
  expect(max(fs)).toEqual(-1);
  expect(max(nameArray)).toEqual(NaN);
  expect(max(emptyArray)).toEqual(-Infinity);
})

test("is 'max' working properly with patch?", () => {
  expect(as.max()).toEqual(0);
  expect(bs.max()).toEqual(-1.56);
  expect(xs.max()).toEqual(6);
  expect(ys.max()).toEqual(10);
  expect(zs.max()).toEqual(6);
  expect(ks.max()).toBeCloseTo(4.5);
  expect(ns.max()).toEqual(210);
  expect(hs.max()).toEqual(512);
  expect(fs.max()).toEqual(-1);
  expect(nameArray.max()).toEqual(NaN);
  expect(emptyArray.max()).toEqual(-Infinity);
  max.removePatch();
})