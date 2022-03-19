const {arrayLog} = require("../../../yuki/func/array/array-log");
const {as} = require("../../../constants/alpha-beta/as");
const {xs} = require("../../../constants/alpha-beta/xs");
const {js} = require("../../../constants/alpha-beta/js");
const {ks} = require("../../../constants/alpha-beta/ks");
const {nameArray} = require("../../../constants/name-array");
const {emptyArray} = require("../../../constants/empty-array");

test("'arrayLog' defined?", () => {
  expect(arrayLog).toBeDefined();
  expect(arrayLog).not.toBeNull();
})

test("does 'arrayLog' has 'monkeyPatch'?", () => {
  expect(arrayLog.monkeyPatch).toBeDefined();
  expect(arrayLog.monkeyPatch).not.toBeNull();
  expect(typeof arrayLog.monkeyPatch).toBe("function");
})

test("does 'arrayLog' has 'removePatch' functions?", () => {
  expect(arrayLog.removePatch).toBeDefined();
  expect(arrayLog.removePatch).not.toBeNull();
  expect(typeof arrayLog.removePatch).toBe("function");
})

test("'arrayLog', is 'monkeyPatch' and 'removePatch' same?", () => {
  expect(arrayLog.monkeyPatch === arrayLog.removePatch).not.toBe(true);
})

test("is 'monkeyPatch' work with 'arrayLog'?", () => {
  arrayLog.removePatch();
  expect(xs.log).not.toBeDefined();
  arrayLog.monkeyPatch(); // Patch 🩹
  expect(xs.log).toBeDefined();
})

test("is 'arrayLog' working properly?", () => {
  expect(arrayLog(ks)).toEqual(ks.map(Math.log));
  expect(arrayLog(js)).toEqual(js.map(Math.log));
  expect(arrayLog(as)).toEqual(as.map(Math.log));
  expect(arrayLog(nameArray)).toEqual([NaN, NaN, NaN, NaN]);
  expect(arrayLog(emptyArray)).toEqual(emptyArray);
})

test("is 'arrayLog' working properly with patch?", () => {
  expect(ks.log()).toEqual(ks.map(Math.log));
  expect(js.log()).toEqual(js.map(Math.log));
  expect(as.log()).toEqual(as.map(Math.log));
  expect(nameArray.log()).toEqual([NaN, NaN, NaN, NaN]);
  expect(emptyArray.log()).toEqual(emptyArray);
  arrayLog.removePatch();
})