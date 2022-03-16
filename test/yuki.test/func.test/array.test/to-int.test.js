const {toInt} = require("../../../yuki/func/array/to-int");
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

test("'toInt' defined?", () => {
  expect(toInt).toBeDefined();
  expect(toInt).not.toBeNull();
})

test("does 'toInt' has 'monkeyPatch'?", () => {
  expect(toInt.monkeyPatch).toBeDefined();
  expect(toInt.monkeyPatch).not.toBeNull();
  expect(typeof toInt.monkeyPatch).toBe("function");
})

test("does 'toInt' has 'removePatch' functions?", () => {
  expect(toInt.removePatch).toBeDefined();
  expect(toInt.removePatch).not.toBeNull();
  expect(typeof toInt.removePatch).toBe("function");
})

test("'toInt', is 'monkeyPatch' and 'removePatch' same?", () => {
  expect(toInt.monkeyPatch === toInt.removePatch).not.toBe(true);
})

test("is 'monkeyPatch' work with 'toInt'?", () => {
  toInt.removePatch();
  expect(xs.toInt).not.toBeDefined();
  toInt.monkeyPatch(); // Patch 🩹
  expect(xs.toInt).toBeDefined();
})

test("is 'toInt' working properly?", () => {
  expect(toInt(as)).toEqual(as);
  expect(toInt(bs)).toEqual([-1, -2, -3, -4, -5]);
  expect(toInt(xs)).toEqual(xs);
  expect(toInt(ys)).toEqual(ys);
  expect(toInt(zs)).toEqual(zs);
  expect(toInt(ks)).toEqual([1, 2, 3, 4, -5, 0]);
  expect(toInt(ns)).toEqual(ns);
  expect(toInt(hs)).toEqual(hs);
  expect(toInt(fs)).toEqual(fs);
  expect(toInt(nameArray)).toEqual([0, 0, 0, 0]);
  expect(toInt(emptyArray)).toEqual([]);
})

test("is 'toInt' working properly with patch?", () => {
  expect(as.toInt()).toEqual(as);
  expect(bs.toInt()).toEqual([-1, -2, -3, -4, -5]);
  expect(xs.toInt()).toEqual(xs);
  expect(ys.toInt()).toEqual(ys);
  expect(zs.toInt()).toEqual(zs);
  expect(ks.toInt()).toEqual([1, 2, 3, 4, -5, 0]);
  expect(ns.toInt()).toEqual(ns);
  expect(hs.toInt()).toEqual(hs);
  expect(fs.toInt()).toEqual(fs);
  expect(nameArray.toInt()).toEqual([0, 0, 0, 0]);
  expect(emptyArray.toInt()).toEqual([]);
  toInt.removePatch();
})