const {min} = require("../../../yuki/func/array/min");
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

test("'min' defined?", () => {
  expect(min).toBeDefined();
  expect(min).not.toBeNull();
})

test("does 'min' has 'monkeyPatch'?", () => {
  expect(min.monkeyPatch).toBeDefined();
  expect(min.monkeyPatch).not.toBeNull();
  expect(typeof min.monkeyPatch).toBe("function");
})

test("does 'min' has 'removePatch' functions?", () => {
  expect(min.removePatch).toBeDefined();
  expect(min.removePatch).not.toBeNull();
  expect(typeof min.removePatch).toBe("function");
})

test("'min', is 'monkeyPatch' and 'removePatch' same?", () => {
  expect(min.monkeyPatch === min.removePatch).not.toBe(true);
})

test("is 'monkeyPatch' work with 'min'?", () => {
  min.removePatch();
  expect(xs.min).not.toBeDefined();
  min.monkeyPatch(); // Patch 🩹
  expect(xs.min).toBeDefined();
})

test("is 'min' working properly?", () => {
  expect(min(as)).toEqual(-16);
  expect(min(bs)).toEqual(-5.91);
  expect(min(xs)).toEqual(1);
  expect(min(ys)).toEqual(-5);
  expect(min(zs)).toEqual(1);
  expect(min(ks)).toEqual(-5.6);
  expect(min(ns)).toEqual(15);
  expect(min(hs)).toEqual(1);
  expect(min(fs)).toEqual(-7);
  expect(min(nameArray)).toEqual(NaN);
  expect(min(emptyArray)).toEqual(Infinity);
})

test("is 'min' working properly with patch?", () => {
  expect(as.min()).toEqual(-16);
  expect(bs.min()).toEqual(-5.91);
  expect(xs.min()).toEqual(1);
  expect(ys.min()).toEqual(-5);
  expect(zs.min()).toEqual(1);
  expect(ks.min()).toEqual(-5.6);
  expect(ns.min()).toEqual(15);
  expect(hs.min()).toEqual(1);
  expect(fs.min()).toEqual(-7);
  expect(nameArray.min()).toEqual(NaN);
  expect(emptyArray.min()).toEqual(Infinity);
  min.removePatch();
})