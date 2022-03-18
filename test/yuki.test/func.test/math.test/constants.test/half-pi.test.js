const {HALF_PI, monkeyPatch_HALF_PI, removePatch_HALF_PI} = require("../../../../yuki/func/math/constants/half-pi");

test("'HALF_PI' defined?", () => {
  expect(HALF_PI).toBeDefined();
  expect(HALF_PI).not.toBeNull();
})

test("'HALF_PI's type.", () => {
  expect(typeof HALF_PI).toBe("number");
})

test("does 'HALF_PI' has 'monkeyPatch' functions?", () => {
  expect(monkeyPatch_HALF_PI).toBeDefined();
  expect(monkeyPatch_HALF_PI).not.toBeNull();
  expect(typeof monkeyPatch_HALF_PI).toBe("function");
})


test("does 'HALF_PI' has 'removePatch' functions?", () => {
  expect(removePatch_HALF_PI).toBeDefined();
  expect(removePatch_HALF_PI).not.toBeNull();
  expect(typeof removePatch_HALF_PI).toBe("function");
})

test("'HALF_PI', is 'monkeyPatch' and 'removePatch' same?", () => {
  expect(monkeyPatch_HALF_PI === removePatch_HALF_PI).not.toBe(true);
})

test("is 'monkeyPatch' work with 'HALF_PI'?", () => {
  removePatch_HALF_PI();
  expect(Math.HALF_PI).not.toBeDefined();
  monkeyPatch_HALF_PI(); // Patch 🩹
  expect(Math.HALF_PI).toBeDefined();
})

test("is 'HALF_PI' working properly?", () => {
  expect(HALF_PI * 2).toBeCloseTo(Math.PI);
  expect(HALF_PI).toBeCloseTo(Math.PI / 2);
  expect(HALF_PI).toBeCloseTo(Math.PI * 0.5);
})

test("is 'HALF_PI' working properly with patch?", () => {
  expect(Math.HALF_PI * 2).toBeCloseTo(Math.PI);
  expect(Math.HALF_PI).toBeCloseTo(Math.PI / 2);
  expect(Math.HALF_PI).toBeCloseTo(Math.PI * 0.5);
  removePatch_HALF_PI();
})