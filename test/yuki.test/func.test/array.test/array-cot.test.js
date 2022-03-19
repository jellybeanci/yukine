const {arrayCot} = require("../../../yuki/func/array/array-cot");
const {xs} = require("../../../constants/alpha-beta/xs");
const {ys} = require("../../../constants/alpha-beta/ys");
const {ks} = require("../../../constants/alpha-beta/ks");
const {cot} = require("../../../yuki/func/math/cot");
const {js} = require("../../../constants/alpha-beta/js");
const {as} = require("../../../constants/alpha-beta/as");
const {nameArray} = require("../../../constants/name-array");
const {emptyArray} = require("../../../constants/empty-array");

test("'arrayCot' defined?", () => {
  expect(arrayCot).toBeDefined();
  expect(arrayCot).not.toBeNull();
})

test("does 'arrayCot' has 'monkeyPatch'?", () => {
  expect(arrayCot.monkeyPatch).toBeDefined();
  expect(arrayCot.monkeyPatch).not.toBeNull();
  expect(typeof arrayCot.monkeyPatch).toBe("function");
})

test("does 'arrayCot' has 'removePatch' functions?", () => {
  expect(arrayCot.removePatch).toBeDefined();
  expect(arrayCot.removePatch).not.toBeNull();
  expect(typeof arrayCot.removePatch).toBe("function");
})

test("'arrayCot', is 'monkeyPatch' and 'removePatch' same?", () => {
  expect(arrayCot.monkeyPatch === arrayCot.removePatch).not.toBe(true);
})

test("is 'monkeyPatch' work with 'arrayCot'?", () => {
  arrayCot.removePatch();
  expect(xs.cot).not.toBeDefined();
  arrayCot.monkeyPatch(); // Patch 🩹
  expect(xs.cot).toBeDefined();
})

test("is 'arrayCot' working properly?", () => {
  expect(arrayCot(xs)).toEqual([0.6420926159343306, -0.45765755436028577, -7.015252551434534, 0.8636911544506165, -0.2958129155327455, -3.436353004180128]);
  expect(arrayCot(ys)).toEqual([-0.8636911544506165, -0.45765755436028577, 0.2958129155327455, 1.5423510453569202, 0.45765755436028577, 0.6420926159343306]);
  expect(arrayCot(ks)).toEqual(ks.map(cot));
  expect(arrayCot(js)).toEqual(js.map(cot));
  expect(arrayCot(as)).toEqual(as.map(cot));
  expect(arrayCot(nameArray)).toEqual([NaN, NaN, NaN, NaN]);
  expect(arrayCot(emptyArray)).toEqual(emptyArray);
})

test("is 'arrayCot' working properly with patch?", () => {
  expect(xs.cot()).toEqual([0.6420926159343306, -0.45765755436028577, -7.015252551434534, 0.8636911544506165, -0.2958129155327455, -3.436353004180128]);
  expect(ys.cot()).toEqual([-0.8636911544506165, -0.45765755436028577, 0.2958129155327455, 1.5423510453569202, 0.45765755436028577, 0.6420926159343306]);
  expect(ks.cot()).toEqual(ks.map(cot));
  expect(js.cot()).toEqual(js.map(cot));
  expect(as.cot()).toEqual(as.map(cot));
  expect(nameArray.cot()).toEqual([NaN, NaN, NaN, NaN]);
  expect(emptyArray.cot()).toEqual(emptyArray);
  arrayCot.removePatch();
})