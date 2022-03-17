const {pow} = require("../../../yuki/func/array/pow");
const {xs} = require("../../../constants/alpha-beta/xs");
const {ds} = require("../../../constants/alpha-beta/ds");
const {es} = require("../../../constants/alpha-beta/es");
const {fs} = require("../../../constants/alpha-beta/fs");
const {gs} = require("../../../constants/alpha-beta/gs");
const {nameArray} = require("../../../constants/name-array");
const {emptyArray} = require("../../../constants/empty-array");

test("'pow' defined?", () => {
  expect(pow).toBeDefined();
  expect(pow).not.toBeNull();
})

test("does 'pow' has 'monkeyPatch'?", () => {
  expect(pow.monkeyPatch).toBeDefined();
  expect(pow.monkeyPatch).not.toBeNull();
  expect(typeof pow.monkeyPatch).toBe("function");
})

test("does 'pow' has 'removePatch' functions?", () => {
  expect(pow.removePatch).toBeDefined();
  expect(pow.removePatch).not.toBeNull();
  expect(typeof pow.removePatch).toBe("function");
})

test("'pow', is 'monkeyPatch' and 'removePatch' same?", () => {
  expect(pow.monkeyPatch === pow.removePatch).not.toBe(true);
})

test("is 'monkeyPatch' work with 'pow'?", () => {
  pow.removePatch();
  expect(xs.pow).not.toBeDefined();
  pow.monkeyPatch(); // Patch 🩹
  expect(xs.pow).toBeDefined();
})

test("is 'pow' working properly?", () => {
  expect(pow(ds, 2)).toEqual(gs);
  expect(pow(es, 3)).toEqual([27, 1, 64, 1, 125, 729, 8, 216, 125]);
  expect(pow(fs, 3)).toEqual([-1, -8, -27, -64, -125, -216, -343, -216, -1]);
  expect(pow(ds, 8)).toEqual(pow(fs, 8));
  expect(pow(nameArray, 2)).toEqual([NaN, NaN, NaN, NaN]);
  expect(pow(emptyArray, 5)).toEqual([]);
})

test("is 'pow' working properly with patch?", () => {
  expect(ds.pow(2)).toEqual(gs);
  expect(es.pow(3)).toEqual([27, 1, 64, 1, 125, 729, 8, 216, 125]);
  expect(fs.pow(3)).toEqual([-1, -8, -27, -64, -125, -216, -343, -216, -1]);
  expect(ds.pow(8)).toEqual(pow(fs, 8));
  expect(nameArray.pow(2)).toEqual([NaN, NaN, NaN, NaN]);
  expect(emptyArray.pow(5)).toEqual([]);
  pow.removePatch();
})