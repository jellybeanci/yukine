const {exp} = require("../../../yuki/func/array/exp");
const {ds} = require("../../../constants/alpha-beta/ds");
const {xs} = require("../../../constants/alpha-beta/xs");
const {emptyArray} = require("../../../constants/empty-array");
const {nameArray} = require("../../../constants/name-array");
const {is} = require("../../../constants/alpha-beta/is");
const {es} = require("../../../constants/alpha-beta/es");
const {js} = require("../../../constants/alpha-beta/js");

test("'exp' defined?", () => {
  expect(exp).toBeDefined();
  expect(exp).not.toBeNull();
})

test("does 'exp' has 'monkeyPatch'?", () => {
  expect(exp.monkeyPatch).toBeDefined();
  expect(exp.monkeyPatch).not.toBeNull();
  expect(typeof exp.monkeyPatch).toBe("function");
})

test("does 'exp' has 'removePatch' functions?", () => {
  expect(exp.removePatch).toBeDefined();
  expect(exp.removePatch).not.toBeNull();
  expect(typeof exp.removePatch).toBe("function");
})

test("'exp', is 'monkeyPatch' and 'removePatch' same?", () => {
  expect(exp.monkeyPatch === exp.removePatch).not.toBe(true);
})

test("is 'monkeyPatch' work with 'exp'?", () => {
  exp.removePatch();
  expect(xs.exp).not.toBeDefined();
  exp.monkeyPatch(); // Patch 🩹
  expect(xs.exp).toBeDefined();
})

test("is 'exp' working properly?", () => {
  expect(exp(ds)).toEqual(is);
  expect(exp(es)).toEqual(js);
  expect(exp([0, 0, 0, 0, 0, 0])).toEqual([1, 1, 1, 1, 1, 1]);
  expect(exp(nameArray)).toEqual([NaN, NaN, NaN, NaN])
  expect(exp(emptyArray)).toEqual(emptyArray);
})

test("is 'exp' working properly with patch?", () => {
  expect(ds.exp()).toEqual(is);
  expect(es.exp()).toEqual(js);
  expect([0, 0, 0, 0, 0, 0].exp()).toEqual([1, 1, 1, 1, 1, 1]);
  expect(nameArray.exp()).toEqual([NaN, NaN, NaN, NaN])
  expect(emptyArray.exp()).toEqual(emptyArray);
  exp.removePatch();
})