const {floor} = require("../../../yuki/func/array/floor");
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

test("'floor' defined?", () => {
  expect(floor).toBeDefined();
  expect(floor).not.toBeNull();
})

test("does 'floor' has 'monkeyPatch'?", () => {
  expect(floor.monkeyPatch).toBeDefined();
  expect(floor.monkeyPatch).not.toBeNull();
  expect(typeof floor.monkeyPatch).toBe("function");
})

test("does 'floor' has 'removePatch' functions?", () => {
  expect(floor.removePatch).toBeDefined();
  expect(floor.removePatch).not.toBeNull();
  expect(typeof floor.removePatch).toBe("function");
})

test("'floor', is 'monkeyPatch' and 'removePatch' same?", () => {
  expect(floor.monkeyPatch === floor.removePatch).not.toBe(true);
})

test("is 'monkeyPatch' work with 'floor'?", () => {
  floor.removePatch();
  expect(xs.floor).not.toBeDefined();
  floor.monkeyPatch(); // Patch 🩹
  expect(xs.floor).toBeDefined();
})

test("is 'floor' working properly?", () => {
  expect(floor(as)).toEqual(as);
  expect(floor(bs)).toEqual([-2, -3, -4, -5, -6]);
  expect(floor(xs)).toEqual(xs);
  expect(floor(ys)).toEqual(ys);
  expect(floor(zs)).toEqual(zs);
  expect(floor(ks)).toEqual([1, 2, 3, 4, -6, 0]);
  expect(floor(ns)).toEqual(ns);
  expect(floor(hs)).toEqual(hs);
  expect(floor(fs)).toEqual(fs);
  expect(floor(nameArray)).toEqual([NaN, NaN, NaN, NaN]);
  expect(floor(emptyArray)).toEqual([]);
})

test("is 'floor' working properly with patch?", () => {
  expect(as.floor()).toEqual(as);
  expect(bs.floor()).toEqual([-2, -3, -4, -5, -6]);
  expect(xs.floor()).toEqual(xs);
  expect(ys.floor()).toEqual(ys);
  expect(zs.floor()).toEqual(zs);
  expect(ks.floor()).toEqual([1, 2, 3, 4, -6, 0]);
  expect(ns.floor()).toEqual(ns);
  expect(hs.floor()).toEqual(hs);
  expect(fs.floor()).toEqual(fs);
  expect(nameArray.floor()).toEqual([NaN, NaN, NaN, NaN]);
  expect(emptyArray.floor()).toEqual([]);
  floor.removePatch();
})