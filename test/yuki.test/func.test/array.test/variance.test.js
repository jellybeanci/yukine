const {variance} = require("../../../yuki/func/array/variance");
const {as} = require("../../../constants/alpha-beta/as");
const {bs} = require("../../../constants/alpha-beta/bs");
const {ks} = require("../../../constants/alpha-beta/ks");
const {ns} = require("../../../constants/alpha-beta/ns");
const {xs} = require("../../../constants/alpha-beta/xs");
const {ys} = require("../../../constants/alpha-beta/ys");

test("'variance' defined?", () => {
  expect(variance).toBeDefined();
  expect(variance).not.toBeNull();
})

test("does 'variance' has 'monkeyPatch'?", () => {
  expect(variance.monkeyPatch).toBeDefined();
  expect(variance.monkeyPatch).not.toBeNull();
  expect(typeof variance.monkeyPatch).toBe("function");
})

test("does 'variance' has 'removePatch' functions?", () => {
  expect(variance.removePatch).toBeDefined();
  expect(variance.removePatch).not.toBeNull();
  expect(typeof variance.removePatch).toBe("function");
})

test("'variance', is 'monkeyPatch' and 'removePatch' same?", () => {
  expect(variance.monkeyPatch === variance.removePatch).not.toBe(true);
})

test("is 'monkeyPatch' work with 'variance'?", () => {
  variance.removePatch();
  expect(xs.variance).not.toBeDefined();
  variance.monkeyPatch(); // Patch 🩹
  expect(xs.variance).toBeDefined();
})

test("is 'variance' working properly?", () => {
  expect(variance(as)).toBeCloseTo(34.8);
  expect(variance(bs)).toBeCloseTo(2.385576);
  expect(variance(xs)).toBeCloseTo(2.916667);
  expect(variance(ys)).toBeCloseTo(24.88889);
  expect(variance(ks)).toBeCloseTo(10.7155556);
  expect(variance(ns)).toBeCloseTo(4040.81632653061);
  expect(variance(as, true)).toBeCloseTo(43.5);
  expect(variance(bs, true)).toBeCloseTo(2.9819699999999996);
  expect(variance(xs, true)).toBeCloseTo(3.5);
})

test("is 'variance' working properly with patch?", () => {
  expect(as.variance()).toBeCloseTo(34.8);
  expect(bs.variance()).toBeCloseTo(2.385576);
  expect(xs.variance()).toBeCloseTo(2.916667);
  expect(ys.variance()).toBeCloseTo(24.88889);
  expect(ks.variance()).toBeCloseTo(10.7155556);
  expect(ns.variance()).toBeCloseTo(4040.81632653061);
  expect(as.variance(true)).toBeCloseTo(43.5);
  expect(bs.variance(true)).toBeCloseTo(2.9819699999999996);
  expect(xs.variance(true)).toBeCloseTo(3.5);
  variance.removePatch();
})