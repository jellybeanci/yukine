const {arrayCosd} = require("../../../yuki/func/array/array-cosd");
const {cosd} = require("../../../yuki/func/math/cosd");
const {as} = require("../../../constants/alpha-beta/as");
const {xs} = require("../../../constants/alpha-beta/xs");
const {js} = require("../../../constants/alpha-beta/js");
const {ks} = require("../../../constants/alpha-beta/ks");
const {nameArray} = require("../../../constants/name-array");
const {emptyArray} = require("../../../constants/empty-array");

test("'arrayCosd' defined?", () => {
  expect(arrayCosd).toBeDefined();
  expect(arrayCosd).not.toBeNull();
})

test("does 'arrayCosd' has 'monkeyPatch'?", () => {
  expect(arrayCosd.monkeyPatch).toBeDefined();
  expect(arrayCosd.monkeyPatch).not.toBeNull();
  expect(typeof arrayCosd.monkeyPatch).toBe("function");
})

test("does 'arrayCosd' has 'removePatch' functions?", () => {
  expect(arrayCosd.removePatch).toBeDefined();
  expect(arrayCosd.removePatch).not.toBeNull();
  expect(typeof arrayCosd.removePatch).toBe("function");
})

test("'arrayCosd', is 'monkeyPatch' and 'removePatch' same?", () => {
  expect(arrayCosd.monkeyPatch === arrayCosd.removePatch).not.toBe(true);
})

test("is 'monkeyPatch' work with 'arrayCosd'?", () => {
  arrayCosd.removePatch();
  expect(xs.cosd).not.toBeDefined();
  arrayCosd.monkeyPatch(); // Patch 🩹
  expect(xs.cosd).toBeDefined();
})

test("is 'arrayCosd' working properly?", () => {
  expect(arrayCosd(ks)).toEqual(ks.map(cosd));
  expect(arrayCosd(js)).toEqual(js.map(cosd));
  expect(arrayCosd(as)).toEqual(as.map(cosd));
  expect(arrayCosd(nameArray)).toEqual([NaN, NaN, NaN, NaN]);
  expect(arrayCosd(emptyArray)).toEqual(emptyArray);
})

test("is 'arrayCosd' working properly with patch?", () => {
  expect(ks.cosd()).toEqual(ks.map(cosd));
  expect(js.cosd()).toEqual(js.map(cosd));
  expect(as.cosd()).toEqual(as.map(cosd));
  expect(nameArray.cosd()).toEqual([NaN, NaN, NaN, NaN]);
  expect(emptyArray.cosd()).toEqual(emptyArray);
  arrayCosd.removePatch();
})