const {rad2deg} = require("../../../yuki/func/math/rad2deg");
const {deg2rad} = require("../../../yuki/func/math/deg2rad");
const {TWO_PI} = require("../../../yuki/func/math/constants/two-pi");
const {HALF_PI} = require("../../../yuki/func/math/constants/half-pi");
const {QUARTER_PI} = require("../../../yuki/func/math/constants/quarter-pi");

test("'rad2deg' defined?", () => {
  expect(rad2deg).toBeDefined();
  expect(rad2deg).not.toBeNull();
})

test("does 'rad2deg' has 'monkeyPatch'?", () => {
  expect(rad2deg.monkeyPatch).toBeDefined();
  expect(rad2deg.monkeyPatch).not.toBeNull();
  expect(typeof rad2deg.monkeyPatch).toBe("function");
})

test("does 'rad2deg' has 'removePatch' functions?", () => {
  expect(rad2deg.removePatch).toBeDefined();
  expect(rad2deg.removePatch).not.toBeNull();
  expect(typeof rad2deg.removePatch).toBe("function");
})

test("'rad2deg', is 'monkeyPatch' and 'removePatch' same?", () => {
  expect(rad2deg.monkeyPatch === rad2deg.removePatch).not.toBe(true);
})

test("is 'monkeyPatch' work with 'rad2deg'?", () => {
  rad2deg.removePatch();
  expect(Math.rad2deg).not.toBeDefined();
  rad2deg.monkeyPatch(); // Patch 🩹
  expect(Math.rad2deg).toBeDefined();
})

test("is 'rad2deg' working properly?", () => {
  expect(rad2deg(Math.PI)).toEqual(180);
  expect(rad2deg(TWO_PI)).toEqual(360);
  expect(rad2deg(HALF_PI)).toEqual(90);
  expect(rad2deg(QUARTER_PI)).toEqual(45);
  expect(rad2deg(HALF_PI + QUARTER_PI)).toEqual(135);
  expect(rad2deg(deg2rad(90))).toEqual(90);
  expect(rad2deg(deg2rad(42))).toEqual(42);
  expect(rad2deg(deg2rad(122))).toEqual(122);
  expect(rad2deg(deg2rad(6502))).toEqual(6502);

})

test("is 'rad2deg' working properly with patch?", () => {
  expect(Math.rad2deg(Math.PI)).toEqual(180);
  expect(Math.rad2deg(TWO_PI)).toEqual(360);
  expect(Math.rad2deg(HALF_PI)).toEqual(90);
  expect(Math.rad2deg(QUARTER_PI)).toEqual(45);
  expect(Math.rad2deg(HALF_PI + QUARTER_PI)).toEqual(135);
  expect(Math.rad2deg(deg2rad(90))).toEqual(90);
  expect(Math.rad2deg(deg2rad(42))).toEqual(42);
  expect(Math.rad2deg(deg2rad(122))).toEqual(122);
  expect(Math.rad2deg(deg2rad(6502))).toEqual(6502);
  rad2deg.removePatch();
})