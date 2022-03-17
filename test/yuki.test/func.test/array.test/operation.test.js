const {operation} = require("../../../yuki/func/array/operation");
const {xs} = require("../../../constants/alpha-beta/xs");
const {ds} = require("../../../constants/alpha-beta/ds");
const {es} = require("../../../constants/alpha-beta/es");
const {fs} = require("../../../constants/alpha-beta/fs");
const {addFn} = require("../../../constants/add-fn");
const {multFn} = require("../../../constants/mult-fn");
const {os} = require("../../../constants/alpha-beta/os");
const {pow} = require("../../../yuki/func/array/pow");

test("'operation' defined?", () => {
  expect(operation).toBeDefined();
  expect(operation).not.toBeNull();
})

test("does 'operation' has 'monkeyPatch'?", () => {
  expect(operation.monkeyPatch).toBeDefined();
  expect(operation.monkeyPatch).not.toBeNull();
  expect(typeof operation.monkeyPatch).toBe("function");
})

test("does 'operation' has 'removePatch' functions?", () => {
  expect(operation.removePatch).toBeDefined();
  expect(operation.removePatch).not.toBeNull();
  expect(typeof operation.removePatch).toBe("function");
})

test("'operation', is 'monkeyPatch' and 'removePatch' same?", () => {
  expect(operation.monkeyPatch === operation.removePatch).not.toBe(true);
})

test("is 'monkeyPatch' work with 'operation'?", () => {
  operation.removePatch();
  expect(xs.operation).not.toBeDefined();
  operation.monkeyPatch(); // Patch 🩹
  expect(xs.operation).toBeDefined();
})

test("is 'operation' working properly?", () => {
  expect(operation(ds, fs, addFn)).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  expect(operation(ds, es, multFn)).toEqual(os);
  expect(operation(ds, ds, multFn)).toEqual(pow(ds, 2));
  expect(() => {
    operation(ds, [1, 2, 3, 4], addFn);
  }).toThrow(Error);
  expect(() => {
    operation(es, [1, 2, 3, 4, 5], multFn);
  }).toThrowErrorMatchingSnapshot("Array lengths must agree.");
})

test("is 'operation' working properly with patch?", () => {
  expect(ds.operation(fs, addFn)).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  expect(ds.operation(es, multFn)).toEqual(os);
  expect(ds.operation(ds, multFn)).toEqual(pow(ds, 2));
  expect(() => {
    ds.operation([1, 2, 3, 4], addFn);
  }).toThrow(Error);
  expect(() => {
    es.operation([1, 2, 3, 4, 5], multFn);
  }).toThrowErrorMatchingSnapshot("Array lengths must agree.");
  operation.removePatch();
})