const {mod} = require("../../../yuki/func/array/mod");
const {xs} = require("../../../constants/alpha-beta/xs");
const {ds} = require("../../../constants/alpha-beta/ds");
const {es} = require("../../../constants/alpha-beta/es");
const {gs} = require("../../../constants/alpha-beta/gs");
const {nameArray} = require("../../../constants/name-array");
const {emptyArray} = require("../../../constants/empty-array");

test("'mod' defined?", () => {
  expect(mod).toBeDefined();
  expect(mod).not.toBeNull();
})

test("does 'mod' has 'monkeyPatch'?", () => {
  expect(mod.monkeyPatch).toBeDefined();
  expect(mod.monkeyPatch).not.toBeNull();
  expect(typeof mod.monkeyPatch).toBe("function");
})

test("does 'mod' has 'removePatch' functions?", () => {
  expect(mod.removePatch).toBeDefined();
  expect(mod.removePatch).not.toBeNull();
  expect(typeof mod.removePatch).toBe("function");
})

test("'mod', is 'monkeyPatch' and 'removePatch' same?", () => {
  expect(mod.monkeyPatch === mod.removePatch).not.toBe(true);
})

test("is 'monkeyPatch' work with 'mod'?", () => {
  mod.removePatch();
  expect(xs.mod).not.toBeDefined();
  mod.monkeyPatch(); // Patch 🩹
  expect(xs.mod).toBeDefined();
})

test("is 'mod' working properly?", () => {
  expect(mod(ds, 2)).toEqual([1, 0, 1, 0, 1, 0, 1, 0, 1]);
  expect(mod(es, 3)).toEqual([0, 1, 1, 1, 2, 0, 2, 0, 2]);
  expect(mod(gs, 10)).toEqual([1, 4, 9, 6, 5, 6, 9, 6, 1]);
  expect(mod(ds, 8)).toEqual(ds);
  expect(mod(nameArray, 2)).toEqual([NaN, NaN, NaN, NaN]);
  expect(mod(emptyArray, 5)).toEqual([]);
})

test("is 'mod' working properly with patch?", () => {
  expect(ds.mod(2)).toEqual([1, 0, 1, 0, 1, 0, 1, 0, 1]);
  expect(es.mod(3)).toEqual([0, 1, 1, 1, 2, 0, 2, 0, 2]);
  expect(gs.mod(10)).toEqual([1, 4, 9, 6, 5, 6, 9, 6, 1]);
  expect(ds.mod(8)).toEqual(ds);
  expect(emptyArray.mod(5)).toEqual([]);
  mod.removePatch();
})