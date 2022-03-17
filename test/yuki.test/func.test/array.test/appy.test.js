const {apply} = require("../../../yuki/func/array/apply");
const {xs} = require("../../../constants/alpha-beta/xs");
const {ds} = require("../../../constants/alpha-beta/ds");
const {es} = require("../../../constants/alpha-beta/es");
const {fs} = require("../../../constants/alpha-beta/fs");
const {addFn} = require("../../../constants/add-fn");
const {multFn} = require("../../../constants/mult-fn");

test("'apply' defined?", () => {
  expect(apply).toBeDefined();
  expect(apply).not.toBeNull();
})

test("does 'apply' has 'monkeyPatch'?", () => {
  expect(apply.monkeyPatch).toBeDefined();
  expect(apply.monkeyPatch).not.toBeNull();
  expect(typeof apply.monkeyPatch).toBe("function");
})

test("does 'apply' has 'removePatch' functions?", () => {
  expect(apply.removePatch).toBeDefined();
  expect(apply.removePatch).not.toBeNull();
  expect(typeof apply.removePatch).toBe("function");
})

test("'apply', is 'monkeyPatch' and 'removePatch' same?", () => {
  expect(apply.monkeyPatch === apply.removePatch).not.toBe(true);
})

test("is 'monkeyPatch' work with 'apply'?", () => {
  apply.removePatch();
  expect(xs.apply).not.toBeDefined();
  apply.monkeyPatch(); // Patch 🩹
  expect(xs.apply).toBeDefined();
})

test("is 'apply' working properly?", () => {
  expect(apply(ds, 1, addFn)).toEqual([2, 3, 4, 5, 6, 7, 8, 7, 2]);
  expect(apply(ds, 2, multFn)).toEqual([2, 4, 6, 8, 10, 12, 14, 12, 2]);
  expect(apply(es, 1, multFn)).toEqual(es);
  expect(apply(ds, -1, multFn)).toEqual(fs);
})

test("is 'apply' working properly with patch?", () => {
  expect(ds.apply(1, addFn)).toEqual([2, 3, 4, 5, 6, 7, 8, 7, 2]);
  expect(ds.apply(2, multFn)).toEqual([2, 4, 6, 8, 10, 12, 14, 12, 2]);
  expect(es.apply(1, multFn)).toEqual(es);
  expect(ds.apply(-1, multFn)).toEqual(fs);
  apply.removePatch();
})