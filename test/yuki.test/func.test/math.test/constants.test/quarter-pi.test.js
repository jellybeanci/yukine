const {QUARTER_PI, monkeyPatch_QUARTER_PI, removePatch_QUARTER_PI} = require("../../../../yuki/func/math/constants/quarter-pi");

test("'QUARTER_PI' defined?", () => {
  expect(QUARTER_PI).toBeDefined();
  expect(QUARTER_PI).not.toBeNull();
})

test("'QUARTER_PI's type.", () => {
  expect(typeof QUARTER_PI).toBe("number");
})

test("does 'QUARTER_PI' has 'monkeyPatch' functions?", () => {
  expect(monkeyPatch_QUARTER_PI).toBeDefined();
  expect(monkeyPatch_QUARTER_PI).not.toBeNull();
  expect(typeof monkeyPatch_QUARTER_PI).toBe("function");
})


test("does 'QUARTER_PI' has 'removePatch' functions?", () => {
  expect(removePatch_QUARTER_PI).toBeDefined();
  expect(removePatch_QUARTER_PI).not.toBeNull();
  expect(typeof removePatch_QUARTER_PI).toBe("function");
})

test("'QUARTER_PI', is 'monkeyPatch' and 'removePatch' same?", () => {
  expect(monkeyPatch_QUARTER_PI === removePatch_QUARTER_PI).not.toBe(true);
})

test("is 'monkeyPatch' work with 'QUARTER_PI'?", () => {
  removePatch_QUARTER_PI();
  expect(Math.QUARTER_PI).not.toBeDefined();
  monkeyPatch_QUARTER_PI(); // Patch 🩹
  expect(Math.QUARTER_PI).toBeDefined();
})

test("is 'QUARTER_PI' working properly?", () => {
  expect(QUARTER_PI * 4).toBeCloseTo(Math.PI);
  expect(QUARTER_PI).toBeCloseTo(Math.PI / 4);
  expect(QUARTER_PI).toBeCloseTo(Math.PI * 0.25);
})

test("is 'QUARTER_PI' working properly with patch?", () => {
  expect(Math.QUARTER_PI * 4).toBeCloseTo(Math.PI);
  expect(Math.QUARTER_PI).toBeCloseTo(Math.PI / 4);
  expect(Math.QUARTER_PI).toBeCloseTo(Math.PI * 0.25);
  removePatch_QUARTER_PI();
})