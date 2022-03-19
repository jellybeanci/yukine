const {arraySin} = require("../../../yuki/func/array/array-sin");
const {as} = require("../../../constants/alpha-beta/as");
const {xs} = require("../../../constants/alpha-beta/xs");
const {ys} = require("../../../constants/alpha-beta/ys");
const {js} = require("../../../constants/alpha-beta/js");
const {ks} = require("../../../constants/alpha-beta/ks");
const {nameArray} = require("../../../constants/name-array");
const {emptyArray} = require("../../../constants/empty-array");

test("'arraySin' defined?", () => {
  expect(arraySin).toBeDefined();
  expect(arraySin).not.toBeNull();
})

test("does 'arraySin' has 'monkeyPatch'?", () => {
  expect(arraySin.monkeyPatch).toBeDefined();
  expect(arraySin.monkeyPatch).not.toBeNull();
  expect(typeof arraySin.monkeyPatch).toBe("function");
})

test("does 'arraySin' has 'removePatch' functions?", () => {
  expect(arraySin.removePatch).toBeDefined();
  expect(arraySin.removePatch).not.toBeNull();
  expect(typeof arraySin.removePatch).toBe("function");
})

test("'arraySin', is 'monkeyPatch' and 'removePatch' same?", () => {
  expect(arraySin.monkeyPatch === arraySin.removePatch).not.toBe(true);
})

test("is 'monkeyPatch' work with 'arraySin'?", () => {
  arraySin.removePatch();
  expect(xs.sin).not.toBeDefined();
  arraySin.monkeyPatch(); // Patch 🩹
  expect(xs.sin).toBeDefined();
})

test("is 'arraySin' working properly?", () => {
  expect(arraySin(xs)).toEqual([0.8414709848078965, 0.9092974268256817, 0.1411200080598672, -0.7568024953079282, -0.9589242746631385, -0.27941549819892586]);
  expect(arraySin(ys)).toEqual([0.7568024953079282, 0.9092974268256817, 0.9589242746631385, -0.5440211108893698, -0.9092974268256817, 0.8414709848078965]);
  expect(arraySin(ks)).toEqual(ks.map(Math.sin));
  expect(arraySin(js)).toEqual(js.map(Math.sin));
  expect(arraySin(as)).toEqual(as.map(Math.sin));
  expect(arraySin(nameArray)).toEqual([NaN, NaN, NaN, NaN]);
  expect(arraySin(emptyArray)).toEqual(emptyArray);
})

test("is 'arraySin' working properly with patch?", () => {
  expect(xs.sin()).toEqual([0.8414709848078965, 0.9092974268256817, 0.1411200080598672, -0.7568024953079282, -0.9589242746631385, -0.27941549819892586]);
  expect(ys.sin()).toEqual([0.7568024953079282, 0.9092974268256817, 0.9589242746631385, -0.5440211108893698, -0.9092974268256817, 0.8414709848078965]);
  expect(ks.sin()).toEqual(ks.map(Math.sin));
  expect(js.sin()).toEqual(js.map(Math.sin));
  expect(as.sin()).toEqual(as.map(Math.sin));
  expect(nameArray.sin()).toEqual([NaN, NaN, NaN, NaN]);
  expect(emptyArray.sin()).toEqual(emptyArray);
  arraySin.removePatch();
})