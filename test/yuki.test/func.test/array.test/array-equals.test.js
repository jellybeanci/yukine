const {arrayEquals} = require("../../../yuki/func/array/array-equals");
const {mult} = require("../../../yuki/func/array/mult");
const {xs} = require("../../../constants/alpha-beta/xs");
const {ds} = require("../../../constants/alpha-beta/ds");
const {es} = require("../../../constants/alpha-beta/es");
const {os} = require("../../../constants/alpha-beta/os");

test("'arrayEquals' defined?", () => {
  expect(arrayEquals).toBeDefined();
  expect(arrayEquals).not.toBeNull();
})

test("does 'arrayEquals' has 'monkeyPatch'?", () => {
  expect(arrayEquals.monkeyPatch).toBeDefined();
  expect(arrayEquals.monkeyPatch).not.toBeNull();
  expect(typeof arrayEquals.monkeyPatch).toBe("function");
})

test("does 'arrayEquals' has 'removePatch' functions?", () => {
  expect(arrayEquals.removePatch).toBeDefined();
  expect(arrayEquals.removePatch).not.toBeNull();
  expect(typeof arrayEquals.removePatch).toBe("function");
})

test("'arrayEquals', is 'monkeyPatch' and 'removePatch' same?", () => {
  expect(arrayEquals.monkeyPatch === arrayEquals.removePatch).not.toBe(true);
})

test("is 'monkeyPatch' work with 'arrayEquals'?", () => {
  arrayEquals.removePatch();
  expect(xs.equals).not.toBeDefined();
  arrayEquals.monkeyPatch(); // Patch 🩹
  expect(xs.equals).toBeDefined();
})

test("is 'arrayEquals' working properly?", () => {
  expect(arrayEquals(os, mult(ds, es))).toEqual(true);
  expect(arrayEquals(mult(es, es), [1, 2, 3, 4, 5, 6, 7])).toEqual(false);
  expect(arrayEquals([], [])).toEqual(true);
  expect(arrayEquals([Number.NaN], [null])).toEqual(false);
  expect(arrayEquals([1, 2, 3], [])).toEqual(false);
  expect(arrayEquals([1, 2, 3], "hello")).toEqual(false);
})

test("is 'arrayEquals' working properly with patch?", () => {
  expect(mult(ds, es).equals(os)).toEqual(true);
  expect(mult(es, es).equals([1, 2, 3, 4, 5, 6, 7])).toEqual(false);
  expect([].equals([])).toEqual(true);
  expect([Number.NaN].equals([null])).toEqual(false);
  expect([1, 2, 3].equals([])).toEqual(false);
  expect([1, 2, 3].equals("hello")).toEqual(false);
  arrayEquals.removePatch();
})