const {avg} = require("../../../yuki/func/array/avg");
const {avgFn} = require("../../../constants/avg-fn");
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

test("'avg' defined?", () => {
  expect(avg).toBeDefined();
  expect(avg).not.toBeNull();
})

test("does 'avg' has 'monkeyPatch'?", () => {
  expect(avg.monkeyPatch).toBeDefined();
  expect(avg.monkeyPatch).not.toBeNull();
  expect(typeof avg.monkeyPatch).toBe("function");
})

test("does 'avg' has 'removePatch' functions?", () => {
  expect(avg.removePatch).toBeDefined();
  expect(avg.removePatch).not.toBeNull();
  expect(typeof avg.removePatch).toBe("function");
})

test("'avg', is 'monkeyPatch' and 'removePatch' same?", () => {
  expect(avg.monkeyPatch === avg.removePatch).not.toBe(true);
})

test("is 'monkeyPatch' work with 'avg'?", () => {
  avg.removePatch();
  expect(xs.avg).not.toBeDefined();
  avg.monkeyPatch(); // Patch 🩹
  expect(xs.avg).toBeDefined();
})

test("is 'avg' working properly?", () => {
  expect(avg(as)).toEqual(avgFn(as));
  expect(avg(bs)).toEqual(avgFn(bs));
  expect(avg(xs)).toEqual(avgFn(xs));
  expect(avg(ys)).toEqual(avgFn(ys));
  expect(avg(zs)).toEqual(avgFn(zs));
  expect(avg(ks)).toEqual(avgFn(ks));
  expect(avg(ns)).toEqual(avgFn(ns));
  expect(avg(hs)).toEqual(avgFn(hs));
  expect(avg(fs)).toEqual(avgFn(fs));
  expect(avg(nameArray)).toEqual(NaN);
  expect(avg(emptyArray)).toEqual(NaN);
})

test("is 'avg' working properly with patch?", () => {
  expect(as.avg()).toEqual(avgFn(as));
  expect(bs.avg()).toEqual(avgFn(bs));
  expect(xs.avg()).toEqual(avgFn(xs));
  expect(ys.avg()).toEqual(avgFn(ys));
  expect(zs.avg()).toEqual(avgFn(zs));
  expect(ks.avg()).toEqual(avgFn(ks));
  expect(ns.avg()).toEqual(avgFn(ns));
  expect(hs.avg()).toEqual(avgFn(hs));
  expect(fs.avg()).toEqual(avgFn(fs));
  expect(nameArray.avg()).toEqual(NaN);
  expect(emptyArray.avg()).toEqual(NaN);
  avg.removePatch();
})