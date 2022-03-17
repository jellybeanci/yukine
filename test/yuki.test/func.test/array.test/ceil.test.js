const {ceil} = require("../../../yuki/func/array/ceil");
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

test("'ceil' defined?", () => {
  expect(ceil).toBeDefined();
  expect(ceil).not.toBeNull();
})

test("does 'ceil' has 'monkeyPatch'?", () => {
  expect(ceil.monkeyPatch).toBeDefined();
  expect(ceil.monkeyPatch).not.toBeNull();
  expect(typeof ceil.monkeyPatch).toBe("function");
})

test("does 'ceil' has 'removePatch' functions?", () => {
  expect(ceil.removePatch).toBeDefined();
  expect(ceil.removePatch).not.toBeNull();
  expect(typeof ceil.removePatch).toBe("function");
})

test("'ceil', is 'monkeyPatch' and 'removePatch' same?", () => {
  expect(ceil.monkeyPatch === ceil.removePatch).not.toBe(true);
})

test("is 'monkeyPatch' work with 'ceil'?", () => {
  ceil.removePatch();
  expect(xs.ceil).not.toBeDefined();
  ceil.monkeyPatch(); // Patch 🩹
  expect(xs.ceil).toBeDefined();
})

test("is 'ceil' working properly?", () => {
  expect(ceil(as)).toEqual(as);
  expect(ceil(bs)).toEqual([-1, -2, -3, -4, -5]);
  expect(ceil(xs)).toEqual(xs);
  expect(ceil(ys)).toEqual(ys);
  expect(ceil(zs)).toEqual(zs);
  expect(ceil(ks)).toEqual([2, 3, 4, 5, -5, 0]);
  expect(ceil(ns)).toEqual(ns);
  expect(ceil(hs)).toEqual(hs);
  expect(ceil(fs)).toEqual(fs);
  expect(ceil(nameArray)).toEqual([NaN, NaN, NaN, NaN]);
  expect(ceil(emptyArray)).toEqual([]);
})

test("is 'ceil' working properly with patch?", () => {
  expect(as.ceil()).toEqual(as);
  expect(bs.ceil()).toEqual([-1, -2, -3, -4, -5]);
  expect(xs.ceil()).toEqual(xs);
  expect(ys.ceil()).toEqual(ys);
  expect(zs.ceil()).toEqual(zs);
  expect(ks.ceil()).toEqual([2, 3, 4, 5, -5, 0]);
  expect(ns.ceil()).toEqual(ns);
  expect(hs.ceil()).toEqual(hs);
  expect(fs.ceil()).toEqual(fs);
  expect(nameArray.ceil()).toEqual([NaN, NaN, NaN, NaN]);
  expect(emptyArray.ceil()).toEqual([]);
  ceil.removePatch();
})