const {stddev} = require("../../../yuki/func/array/stddev");
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

test("'stddev' defined?", () => {
  expect(stddev).toBeDefined();
  expect(stddev).not.toBeNull();
})

test("does 'stddev' has 'monkeyPatch'?", () => {
  expect(stddev.monkeyPatch).toBeDefined();
  expect(stddev.monkeyPatch).not.toBeNull();
  expect(typeof stddev.monkeyPatch).toBe("function");
})

test("does 'stddev' has 'removePatch' functions?", () => {
  expect(stddev.removePatch).toBeDefined();
  expect(stddev.removePatch).not.toBeNull();
  expect(typeof stddev.removePatch).toBe("function");
})

test("'stddev', is 'monkeyPatch' and 'removePatch' same?", () => {
  expect(stddev.monkeyPatch === stddev.removePatch).not.toBe(true);
})

test("is 'monkeyPatch' work with 'stddev'?", () => {
  stddev.removePatch();
  expect(xs.stddev).not.toBeDefined();
  stddev.monkeyPatch(); // Patch 🩹
  expect(xs.stddev).toBeDefined();
})

test("is 'stddev' working properly?", () => {
  expect(stddev(as)).toEqual(5.89915248150105);
  expect(stddev(bs)).toEqual(1.5445309967753964);
  expect(stddev(xs)).toEqual(1.707825127659933);
  expect(stddev(ys)).toEqual(4.988876515698588);
  expect(stddev(ks)).toEqual(3.273462319250911);
  expect(stddev(ns)).toEqual(63.567415603677105);
})

test("is 'stddev' working properly with patch?", () => {
  expect(as.stddev()).toEqual(5.89915248150105);
  expect(bs.stddev()).toEqual(1.5445309967753964);
  expect(xs.stddev()).toEqual(1.707825127659933);
  expect(ys.stddev()).toEqual(4.988876515698588);
  expect(ks.stddev()).toEqual(3.273462319250911);
  expect(ns.stddev()).toEqual(63.567415603677105);
  stddev.removePatch();
})