const {sum} = require("../../../yuki/func/array/sum");
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

test("'sum' defined?", () => {
  expect(sum).toBeDefined();
  expect(sum).not.toBeNull();
})

test("does 'sum' has 'monkeyPatch'?", () => {
  expect(sum.monkeyPatch).toBeDefined();
  expect(sum.monkeyPatch).not.toBeNull();
  expect(typeof sum.monkeyPatch).toBe("function");
})

test("does 'sum' has 'removePatch' functions?", () => {
  expect(sum.removePatch).toBeDefined();
  expect(sum.removePatch).not.toBeNull();
  expect(typeof sum.removePatch).toBe("function");
})

test("'sum', is 'monkeyPatch' and 'removePatch' same?", () => {
  expect(sum.monkeyPatch === sum.removePatch).not.toBe(true);
})

test("is 'monkeyPatch' work with 'sum'?", () => {
  sum.removePatch();
  expect(xs.sum).not.toBeDefined();
  sum.monkeyPatch(); // Patch 🩹
  expect(xs.sum).toBeDefined();
})

test("is 'sum' working properly?", () => {
  expect(sum(as)).toEqual(-30);
  expect(sum(bs)).toEqual(-18.81);
  expect(sum(xs)).toEqual(21);
  expect(sum(ys)).toEqual(2);
  expect(sum(zs)).toEqual(21);
  expect(sum(ks)).toBeCloseTo(5.8);
  expect(sum(ns)).toEqual(585);
  expect(sum(hs)).toEqual(1296);
  expect(sum(fs)).toEqual(-35);
  expect(sum(xs, 100)).toEqual(121);
  expect(sum(nameArray)).toEqual("0GökselArdaKaanEzgi");
  expect(sum(emptyArray)).toEqual(0);
})

test("is 'sum' working properly with patch?", () => {
  expect(as.sum()).toEqual(-30);
  expect(bs.sum()).toEqual(-18.81);
  expect(xs.sum()).toEqual(21);
  expect(ys.sum()).toEqual(2);
  expect(zs.sum()).toEqual(21);
  expect(ks.sum()).toBeCloseTo(5.8);
  expect(ns.sum()).toEqual(585);
  expect(hs.sum()).toEqual(1296);
  expect(fs.sum()).toEqual(-35);
  expect(xs.sum(100)).toEqual(121);
  expect(nameArray.sum()).toEqual("0GökselArdaKaanEzgi");
  expect(emptyArray.sum()).toEqual(0);
  sum.removePatch();
})