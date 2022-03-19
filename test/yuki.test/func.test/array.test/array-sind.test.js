const {arraySind} = require("../../../yuki/func/array/array-sind");
const {sind} = require("../../../yuki/func/math/sind");
const {as} = require("../../../constants/alpha-beta/as");
const {xs} = require("../../../constants/alpha-beta/xs");
const {js} = require("../../../constants/alpha-beta/js");
const {ks} = require("../../../constants/alpha-beta/ks");
const {nameArray} = require("../../../constants/name-array");
const {emptyArray} = require("../../../constants/empty-array");

test("'arraySind' defined?", () => {
  expect(arraySind).toBeDefined();
  expect(arraySind).not.toBeNull();
})

test("does 'arraySind' has 'monkeyPatch'?", () => {
  expect(arraySind.monkeyPatch).toBeDefined();
  expect(arraySind.monkeyPatch).not.toBeNull();
  expect(typeof arraySind.monkeyPatch).toBe("function");
})

test("does 'arraySind' has 'removePatch' functions?", () => {
  expect(arraySind.removePatch).toBeDefined();
  expect(arraySind.removePatch).not.toBeNull();
  expect(typeof arraySind.removePatch).toBe("function");
})

test("'arraySind', is 'monkeyPatch' and 'removePatch' same?", () => {
  expect(arraySind.monkeyPatch === arraySind.removePatch).not.toBe(true);
})

test("is 'monkeyPatch' work with 'arraySind'?", () => {
  arraySind.removePatch();
  expect(xs.sind).not.toBeDefined();
  arraySind.monkeyPatch(); // Patch 🩹
  expect(xs.sind).toBeDefined();
})

test("is 'arraySind' working properly?", () => {
  expect(arraySind(ks)).toEqual(ks.map(sind));
  expect(arraySind(js)).toEqual(js.map(sind));
  expect(arraySind(as)).toEqual(as.map(sind));
  expect(arraySind(nameArray)).toEqual([NaN, NaN, NaN, NaN]);
  expect(arraySind(emptyArray)).toEqual(emptyArray);
})

test("is 'arraySind' working properly with patch?", () => {
  expect(ks.sind()).toEqual(ks.map(sind));
  expect(js.sind()).toEqual(js.map(sind));
  expect(as.sind()).toEqual(as.map(sind));
  expect(nameArray.sind()).toEqual([NaN, NaN, NaN, NaN]);
  expect(emptyArray.sind()).toEqual(emptyArray);
  arraySind.removePatch();
})