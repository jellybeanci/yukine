const {round} = require("../../../yuki/func/array/round");
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

test("'round' defined?", () => {
  expect(round).toBeDefined();
  expect(round).not.toBeNull();
})

test("does 'round' has 'monkeyPatch'?", () => {
  expect(round.monkeyPatch).toBeDefined();
  expect(round.monkeyPatch).not.toBeNull();
  expect(typeof round.monkeyPatch).toBe("function");
})

test("does 'round' has 'removePatch' functions?", () => {
  expect(round.removePatch).toBeDefined();
  expect(round.removePatch).not.toBeNull();
  expect(typeof round.removePatch).toBe("function");
})

test("'round', is 'monkeyPatch' and 'removePatch' same?", () => {
  expect(round.monkeyPatch === round.removePatch).not.toBe(true);
})

test("is 'monkeyPatch' work with 'round'?", () => {
  round.removePatch();
  expect(xs.round).not.toBeDefined();
  round.monkeyPatch(); // Patch 🩹
  expect(xs.round).toBeDefined();
})

test("is 'round' working properly?", () => {
  expect(round(as)).toEqual(as);
  expect(round(bs)).toEqual([-2, -3, -4, -5, -6]);
  expect(round(xs)).toEqual(xs);
  expect(round(ys)).toEqual(ys);
  expect(round(zs)).toEqual(zs);
  expect(round(ks)).toEqual([1, 2, 3, 5, -6, 0]);
  expect(round(ns)).toEqual(ns);
  expect(round(hs)).toEqual(hs);
  expect(round(fs)).toEqual(fs);
  expect(round(nameArray)).toEqual([NaN, NaN, NaN, NaN]);
  expect(round(emptyArray)).toEqual([]);
})

test("is 'round' working properly with patch?", () => {
  expect(as.round()).toEqual(as);
  expect(bs.round()).toEqual([-2, -3, -4, -5, -6]);
  expect(xs.round()).toEqual(xs);
  expect(ys.round()).toEqual(ys);
  expect(zs.round()).toEqual(zs);
  expect(ks.round()).toEqual([1, 2, 3, 5, -6, 0]);
  expect(ns.round()).toEqual(ns);
  expect(hs.round()).toEqual(hs);
  expect(fs.round()).toEqual(fs);
  expect(nameArray.round()).toEqual([NaN, NaN, NaN, NaN]);
  expect(emptyArray.round()).toEqual([]);
  round.removePatch();
})