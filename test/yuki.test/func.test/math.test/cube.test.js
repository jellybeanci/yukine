const {cube} = require("../../../yuki/func/math/cube");

test("'cube' defined?", () => {
  expect(cube).toBeDefined();
  expect(cube).not.toBeNull();
})

test("does 'cube' has 'monkeyPatch'?", () => {
  expect(cube.monkeyPatch).toBeDefined();
  expect(cube.monkeyPatch).not.toBeNull();
  expect(typeof cube.monkeyPatch).toBe("function");
})

test("does 'cube' has 'removePatch' functions?", () => {
  expect(cube.removePatch).toBeDefined();
  expect(cube.removePatch).not.toBeNull();
  expect(typeof cube.removePatch).toBe("function");
})

test("'cube', is 'monkeyPatch' and 'removePatch' same?", () => {
  expect(cube.monkeyPatch === cube.removePatch).not.toBe(true);
})

test("is 'monkeyPatch' work with 'cube'?", () => {
  cube.removePatch();
  expect(Math.cube).not.toBeDefined();
  cube.monkeyPatch(); // Patch 🩹
  expect(Math.cube).toBeDefined();
})

test("is 'cube' working properly?", () => {
  expect(cube(-12.345)).toBeCloseTo(-1881.365963625);
  expect(cube(69.420)).toBeCloseTo(334544.44888800004);
  expect(cube(42)).toBeCloseTo(74088);
  expect(Math.cbrt(cube(123.123456))).toBeCloseTo(123.123456);
})

test("is 'cube' working properly with patch?", () => {
  expect(Math.cube(-12.345)).toBeCloseTo(-1881.365963625);
  expect(Math.cube(69.420)).toBeCloseTo(334544.44888800004);
  expect(Math.cube(42)).toBeCloseTo(74088);
  expect(Math.cbrt(Math.cube(123.123456))).toBeCloseTo(123.123456);
  cube.removePatch();
})