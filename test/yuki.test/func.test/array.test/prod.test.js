const {prod} = require("../../../yuki/func/array/prod");
const {as} = require("../../../constants/alpha-beta/as");
const {bs} = require("../../../constants/alpha-beta/bs");
const {fs} = require("../../../constants/alpha-beta/fs");
const {xs} = require("../../../constants/alpha-beta/xs");
const {ys} = require("../../../constants/alpha-beta/ys");
const {zs} = require("../../../constants/alpha-beta/zs");
const {emptyArray} = require("../../../constants/empty-array");
const {nameArray} = require("../../../constants/name-array");
const {ds} = require("../../../constants/alpha-beta/ds");
const {es} = require("../../../constants/alpha-beta/es");

test("'prod' defined?", () => {
  expect(prod).toBeDefined();
  expect(prod).not.toBeNull();
})

test("does 'prod' has 'monkeyPatch'?", () => {
  expect(prod.monkeyPatch).toBeDefined();
  expect(prod.monkeyPatch).not.toBeNull();
  expect(typeof prod.monkeyPatch).toBe("function");
})

test("does 'prod' has 'removePatch' functions?", () => {
  expect(prod.removePatch).toBeDefined();
  expect(prod.removePatch).not.toBeNull();
  expect(typeof prod.removePatch).toBe("function");
})

test("'prod', is 'monkeyPatch' and 'removePatch' same?", () => {
  expect(prod.monkeyPatch === prod.removePatch).not.toBe(true);
})

test("is 'monkeyPatch' work with 'prod'?", () => {
  prod.removePatch();
  expect(xs.prod).not.toBeDefined();
  prod.monkeyPatch(); // Patch 🩹
  expect(xs.prod).toBeDefined();
})

test("is 'prod' working properly?", () => {
  expect(prod(ds)).toEqual(30240);
  expect(prod(es)).toEqual(32400);
  expect(prod(fs)).toEqual(-30240);
  expect(prod(as)).toEqual(0);
  expect(prod(bs)).toBeCloseTo(-455.0132039544);
  expect(prod(xs)).toEqual(720);
  expect(prod(ys)).toEqual(-800);
  expect(prod(zs)).toEqual(720);
  expect(prod(xs, -2)).toEqual(-1440);
  expect(prod(emptyArray)).toEqual(1);
  expect(prod(nameArray)).toEqual(NaN);
})

test("is 'prod' working properly with patch?", () => {
  expect(ds.prod()).toEqual(30240);
  expect(es.prod()).toEqual(32400);
  expect(fs.prod()).toEqual(-30240);
  expect(as.prod()).toEqual(0);
  expect(bs.prod()).toBeCloseTo(-455.0132039544);
  expect(xs.prod()).toEqual(720);
  expect(ys.prod()).toEqual(-800);
  expect(zs.prod()).toEqual(720);
  expect(xs.prod(-2)).toEqual(-1440);
  expect(emptyArray.prod()).toEqual(1);
  expect(nameArray.prod()).toEqual(NaN);
  prod.removePatch();
})