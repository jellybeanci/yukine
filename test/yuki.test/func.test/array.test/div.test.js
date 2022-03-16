const {div} = require("../../../yuki/func/array/div");
const {xs} = require("../../../constants/alpha-beta/xs");
const {ys} = require("../../../constants/alpha-beta/ys");
const {ds} = require("../../../constants/alpha-beta/ds");
const {es} = require("../../../constants/alpha-beta/es");

test("'div' defined?", () => {
  expect(div).toBeDefined();
  expect(div).not.toBeNull();
})

test("does 'div' has 'monkeyPatch'?", () => {
  expect(div.monkeyPatch).toBeDefined();
  expect(div.monkeyPatch).not.toBeNull();
  expect(typeof div.monkeyPatch).toBe("function");
})

test("does 'div' has 'removePatch' functions?", () => {
  expect(div.removePatch).toBeDefined();
  expect(div.removePatch).not.toBeNull();
  expect(typeof div.removePatch).toBe("function");
})

test("'div', is 'monkeyPatch' and 'removePatch' same?", () => {
  expect(div.monkeyPatch === div.removePatch).not.toBe(true);
})

test("is 'monkeyPatch' work with 'div'?", () => {
  div.removePatch();
  expect(xs.div).not.toBeDefined();
  div.monkeyPatch(); // Patch 🩹
  expect(xs.div).toBeDefined();
})

// 1, 2, 3, 4, 5, 6, 7, 6, 1
// 3, 1, 4, 1, 5, 9, 2, 6, 5

test("is 'div' working properly?", () => {
  expect(div(xs, ys)).toEqual([-0.25, 1, -3 / 5, 2 / 5, -2.5, 6]);
  expect(div(ds, es)).toEqual([1 / 3, 2, 0.75, 4, 1, 2 / 3, 3.5, 1, 0.2]);
  expect(div([1, 2, 3, 4], [5, 6, 7, 8])).toEqual([0.2, 1 / 3, 3 / 7, 0.5]);
  expect(() => {
    div([1, 2, 3, 4], [1, 2, 3]);
  }).toThrow(Error);
  expect(() => {
    div([1, 2, 3, 4], [1, 2, 3]);
  }).toThrowErrorMatchingSnapshot("Array lengths must agree.");
})

test("is 'div' working properly with patch?", () => {
  expect(xs.div(ys)).toEqual([-0.25, 1, -3 / 5, 2 / 5, -2.5, 6]);
  expect(ds.div(es)).toEqual([1 / 3, 2, 0.75, 4, 1, 2 / 3, 3.5, 1, 0.2]);
  expect([1, 2, 3, 4].div([5, 6, 7, 8])).toEqual([0.2, 1 / 3, 3 / 7, 0.5]);
  expect(() => {
    [1, 2, 3, 4].div([1, 2, 3]);
  }).toThrow(Error);
  expect(() => {
    [1, 2, 3, 4].div([1, 2, 3]);
  }).toThrowErrorMatchingSnapshot("Array lengths must agree.");
  div.removePatch();
})