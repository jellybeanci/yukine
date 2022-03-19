const {arrayCos} = require("../../../yuki/func/array/array-cos");
const {as} = require("../../../constants/alpha-beta/as");
const {xs} = require("../../../constants/alpha-beta/xs");
const {ys} = require("../../../constants/alpha-beta/ys");
const {js} = require("../../../constants/alpha-beta/js");
const {ks} = require("../../../constants/alpha-beta/ks");
const {nameArray} = require("../../../constants/name-array");
const {emptyArray} = require("../../../constants/empty-array");

test("'arrayCos' defined?", () => {
  expect(arrayCos).toBeDefined();
  expect(arrayCos).not.toBeNull();
})

test("does 'arrayCos' has 'monkeyPatch'?", () => {
  expect(arrayCos.monkeyPatch).toBeDefined();
  expect(arrayCos.monkeyPatch).not.toBeNull();
  expect(typeof arrayCos.monkeyPatch).toBe("function");
})

test("does 'arrayCos' has 'removePatch' functions?", () => {
  expect(arrayCos.removePatch).toBeDefined();
  expect(arrayCos.removePatch).not.toBeNull();
  expect(typeof arrayCos.removePatch).toBe("function");
})

test("'arrayCos', is 'monkeyPatch' and 'removePatch' same?", () => {
  expect(arrayCos.monkeyPatch === arrayCos.removePatch).not.toBe(true);
})

test("is 'monkeyPatch' work with 'arrayCos'?", () => {
  arrayCos.removePatch();
  expect(xs.cos).not.toBeDefined();
  arrayCos.monkeyPatch(); // Patch 🩹
  expect(xs.cos).toBeDefined();
})

test("is 'arrayCos' working properly?", () => {
  expect(arrayCos(xs)).toEqual([0.5403023058681398, -0.4161468365471424, -0.9899924966004454, -0.6536436208636119, 0.28366218546322625, 0.9601702866503661]);
  expect(arrayCos(ys)).toEqual([-0.6536436208636119, -0.4161468365471424, 0.28366218546322625, -0.8390715290764524, -0.4161468365471424, 0.5403023058681398]);
  expect(arrayCos(ks)).toEqual(ks.map(Math.cos));
  expect(arrayCos(js)).toEqual(js.map(Math.cos));
  expect(arrayCos(as)).toEqual(as.map(Math.cos));
  expect(arrayCos(nameArray)).toEqual([NaN, NaN, NaN, NaN]);
  expect(arrayCos(emptyArray)).toEqual(emptyArray);
})

test("is 'arrayCos' working properly with patch?", () => {
  expect(xs.cos()).toEqual([0.5403023058681398, -0.4161468365471424, -0.9899924966004454, -0.6536436208636119, 0.28366218546322625, 0.9601702866503661]);
  expect(ys.cos()).toEqual([-0.6536436208636119, -0.4161468365471424, 0.28366218546322625, -0.8390715290764524, -0.4161468365471424, 0.5403023058681398]);
  expect(ks.cos()).toEqual(ks.map(Math.cos));
  expect(js.cos()).toEqual(js.map(Math.cos));
  expect(as.cos()).toEqual(as.map(Math.cos));
  expect(nameArray.cos()).toEqual([NaN, NaN, NaN, NaN]);
  expect(emptyArray.cos()).toEqual(emptyArray);
  arrayCos.removePatch();
})