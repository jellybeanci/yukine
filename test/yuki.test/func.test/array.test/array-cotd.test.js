const {arrayCotd} = require("../../../yuki/func/array/array-cotd");
const {cotd} = require("../../../yuki/func/math/cotd");
const {as} = require("../../../constants/alpha-beta/as");
const {xs} = require("../../../constants/alpha-beta/xs");
const {js} = require("../../../constants/alpha-beta/js");
const {ks} = require("../../../constants/alpha-beta/ks");
const {nameArray} = require("../../../constants/name-array");
const {emptyArray} = require("../../../constants/empty-array");

test("'arrayCotd' defined?", () => {
  expect(arrayCotd).toBeDefined();
  expect(arrayCotd).not.toBeNull();
})

test("does 'arrayCotd' has 'monkeyPatch'?", () => {
  expect(arrayCotd.monkeyPatch).toBeDefined();
  expect(arrayCotd.monkeyPatch).not.toBeNull();
  expect(typeof arrayCotd.monkeyPatch).toBe("function");
})

test("does 'arrayCotd' has 'removePatch' functions?", () => {
  expect(arrayCotd.removePatch).toBeDefined();
  expect(arrayCotd.removePatch).not.toBeNull();
  expect(typeof arrayCotd.removePatch).toBe("function");
})

test("'arrayCotd', is 'monkeyPatch' and 'removePatch' same?", () => {
  expect(arrayCotd.monkeyPatch === arrayCotd.removePatch).not.toBe(true);
})

test("is 'monkeyPatch' work with 'arrayCotd'?", () => {
  arrayCotd.removePatch();
  expect(xs.cotd).not.toBeDefined();
  arrayCotd.monkeyPatch(); // Patch 🩹
  expect(xs.cotd).toBeDefined();
})

test("is 'arrayCotd' working properly?", () => {
  expect(arrayCotd(ks)).toEqual(ks.map(cotd));
  expect(arrayCotd(js)).toEqual(js.map(cotd));
  expect(arrayCotd(as)).toEqual(as.map(cotd));
  expect(arrayCotd(nameArray)).toEqual([NaN, NaN, NaN, NaN]);
  expect(arrayCotd(emptyArray)).toEqual(emptyArray);
})

test("is 'arrayCotd' working properly with patch?", () => {
  expect(ks.cotd()).toEqual(ks.map(cotd));
  expect(js.cotd()).toEqual(js.map(cotd));
  expect(as.cotd()).toEqual(as.map(cotd));
  expect(nameArray.cotd()).toEqual([NaN, NaN, NaN, NaN]);
  expect(emptyArray.cotd()).toEqual(emptyArray);
  arrayCotd.removePatch();
})