const {defineConstants} = require("../../../yuki/func/math/define-constants");

test("'defineConstants' defined?", () => {
  expect(defineConstants).toBeDefined();
  expect(defineConstants).not.toBeNull();
})

test("'defineConstants's type.", () => {
  expect(typeof defineConstants).toBe("function");
  expect(defineConstants()).toBe('Math is fun :)');
})

test("does 'defineConstants' has 'monkeyPatch' functions?", () => {
  expect(defineConstants.monkeyPatch).toBeDefined();
  expect(defineConstants.monkeyPatch).not.toBeNull();
  expect(typeof defineConstants.monkeyPatch).toBe("function");
})

test("does 'defineConstants' has 'removePatch' functions?", () => {
  expect(defineConstants.removePatch).toBeDefined();
  expect(defineConstants.removePatch).not.toBeNull();
  expect(typeof defineConstants.removePatch).toBe("function");
})

test("'defineConstants', is 'monkeyPatch' and 'removePatch' same?", () => {
  expect(defineConstants.monkeyPatch === defineConstants.removePatch).not.toBe(true);
})

test("is 'monkeyPatch' work with 'defineConstants'?", () => {
  defineConstants.removePatch();
  expect(Math.QUARTER_PI).not.toBeDefined();
  expect(Math.HALF_PI).not.toBeDefined();
  expect(Math.TWO_PI).not.toBeDefined();
  defineConstants.monkeyPatch(); // Patch 🩹
  expect(Math.QUARTER_PI).toBeDefined();
  expect(Math.HALF_PI).toBeDefined();
  expect(Math.TWO_PI).toBeDefined();
})

test("is 'defineConstants' working properly with patch?", () => {
  expect(Math.HALF_PI * 2).toBeCloseTo(Math.PI);
  expect(Math.HALF_PI * 4).toBeCloseTo(Math.TWO_PI);
  expect(Math.HALF_PI * 3).toBeCloseTo(Math.PI + Math.HALF_PI);
  expect(Math.QUARTER_PI * 4).toBeCloseTo(Math.PI);
  expect(Math.QUARTER_PI * 2).toBeCloseTo(Math.HALF_PI);
  expect(Math.QUARTER_PI * 5).toBeCloseTo(Math.HALF_PI - Math.QUARTER_PI + Math.PI);
  expect(Math.QUARTER_PI * 8).toBeCloseTo(Math.TWO_PI);
  expect(Math.TWO_PI).toBeCloseTo(Math.QUARTER_PI * 2 + Math.PI + Math.HALF_PI);
  defineConstants.removePatch();
})