const {deg2rad} = require("../../../yuki/func/math/deg2rad");
const {rad2deg} = require("../../../yuki/func/math/rad2deg");
const {TWO_PI} = require("../../../yuki/func/math/constants/two-pi");
const {HALF_PI} = require("../../../yuki/func/math/constants/half-pi");
const {QUARTER_PI} = require("../../../yuki/func/math/constants/quarter-pi");

test("'deg2rad' defined?", () => {
  expect(deg2rad).toBeDefined();
  expect(deg2rad).not.toBeNull();
})

test("does 'deg2rad' has 'monkeyPatch'?", () => {
  expect(deg2rad.monkeyPatch).toBeDefined();
  expect(deg2rad.monkeyPatch).not.toBeNull();
  expect(typeof deg2rad.monkeyPatch).toBe("function");
})

test("does 'deg2rad' has 'removePatch' functions?", () => {
  expect(deg2rad.removePatch).toBeDefined();
  expect(deg2rad.removePatch).not.toBeNull();
  expect(typeof deg2rad.removePatch).toBe("function");
})

test("'deg2rad', is 'monkeyPatch' and 'removePatch' same?", () => {
  expect(deg2rad.monkeyPatch === deg2rad.removePatch).not.toBe(true);
})

test("is 'monkeyPatch' work with 'deg2rad'?", () => {
  deg2rad.removePatch();
  expect(Math.deg2rad).not.toBeDefined();
  deg2rad.monkeyPatch(); // Patch 🩹
  expect(Math.deg2rad).toBeDefined();
})

test("is 'deg2rad' working properly?", () => {
  expect(deg2rad(180)).toEqual(Math.PI);
  expect(deg2rad(360)).toEqual(TWO_PI);
  expect(deg2rad(90)).toEqual(HALF_PI);
  expect(deg2rad(45)).toEqual(QUARTER_PI);
  expect(deg2rad(135)).toEqual(HALF_PI + QUARTER_PI);
  expect(deg2rad(rad2deg(90))).toEqual(90);
  expect(deg2rad(rad2deg(42))).toEqual(42);
  expect(deg2rad(rad2deg(122))).toEqual(122);
  expect(deg2rad(rad2deg(6502))).toEqual(6502);
})

test("is 'deg2rad' working properly with patch?", () => {
  expect(Math.deg2rad(180)).toEqual(Math.PI);
  expect(Math.deg2rad(360)).toEqual(TWO_PI);
  expect(Math.deg2rad(90)).toEqual(HALF_PI);
  expect(Math.deg2rad(45)).toEqual(QUARTER_PI);
  expect(Math.deg2rad(135)).toEqual(HALF_PI + QUARTER_PI);
  expect(Math.deg2rad(rad2deg(90))).toEqual(90);
  expect(Math.deg2rad(rad2deg(42))).toEqual(42);
  expect(Math.deg2rad(rad2deg(122))).toEqual(122);
  expect(Math.deg2rad(rad2deg(6502))).toEqual(6502);
  deg2rad.removePatch();
})