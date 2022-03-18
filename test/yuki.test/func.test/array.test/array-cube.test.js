const {arrayCube} = require("../../../yuki/func/array/array-cube");
const {pow} = require("../../../yuki/func/array/pow");
const {as} = require("../../../constants/alpha-beta/as");
const {fs} = require("../../../constants/alpha-beta/fs");
const {hs} = require("../../../constants/alpha-beta/hs");
const {ns} = require("../../../constants/alpha-beta/ns");
const {xs} = require("../../../constants/alpha-beta/xs");
const {ys} = require("../../../constants/alpha-beta/ys");
const {zs} = require("../../../constants/alpha-beta/zs");
const {emptyArray} = require("../../../constants/empty-array");
const {nameArray} = require("../../../constants/name-array");

test("'arrayCube' defined?", () => {
  expect(arrayCube).toBeDefined();
  expect(arrayCube).not.toBeNull();
})

test("does 'arrayCube' has 'monkeyPatch'?", () => {
  expect(arrayCube.monkeyPatch).toBeDefined();
  expect(arrayCube.monkeyPatch).not.toBeNull();
  expect(typeof arrayCube.monkeyPatch).toBe("function");
})

test("does 'arrayCube' has 'removePatch' functions?", () => {
  expect(arrayCube.removePatch).toBeDefined();
  expect(arrayCube.removePatch).not.toBeNull();
  expect(typeof arrayCube.removePatch).toBe("function");
})

test("'arrayCube', is 'monkeyPatch' and 'removePatch' same?", () => {
  expect(arrayCube.monkeyPatch === arrayCube.removePatch).not.toBe(true);
})

test("is 'monkeyPatch' work with 'arrayCube'?", () => {
  arrayCube.removePatch();
  expect(xs.cube).not.toBeDefined();
  arrayCube.monkeyPatch(); // Patch 🩹
  expect(xs.cube).toBeDefined();
})

test("is 'arrayCube' working properly?", () => {
  expect(arrayCube(as)).toEqual(pow(as, 3));
  expect(arrayCube(xs)).toEqual(pow(xs, 3));
  expect(arrayCube(ys)).toEqual(pow(ys, 3));
  expect(arrayCube(zs)).toEqual(pow(zs, 3));
  expect(arrayCube(ns)).toEqual(pow(ns, 3));
  expect(arrayCube(hs)).toEqual(pow(hs, 3));
  expect(arrayCube(fs)).toEqual(pow(fs, 3));
  expect(arrayCube(nameArray)).toEqual([NaN, NaN, NaN, NaN]);
  expect(arrayCube(emptyArray)).toEqual([]);
})

test("is 'arrayCube' working properly with patch?", () => {
  expect(as.cube()).toEqual(pow(as, 3));
  expect(xs.cube()).toEqual(pow(xs, 3));
  expect(ys.cube()).toEqual(pow(ys, 3));
  expect(zs.cube()).toEqual(pow(zs, 3));
  expect(ns.cube()).toEqual(pow(ns, 3));
  expect(hs.cube()).toEqual(pow(hs, 3));
  expect(fs.cube()).toEqual(pow(fs, 3));
  expect(nameArray.cube()).toEqual([NaN, NaN, NaN, NaN]);
  expect(emptyArray.cube()).toEqual([]);
  arrayCube.removePatch();
})