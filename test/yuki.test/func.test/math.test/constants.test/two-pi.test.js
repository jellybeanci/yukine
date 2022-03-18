const {TWO_PI, monkeyPatch_TWO_PI, removePatch_TWO_PI} = require("../../../../yuki/func/math/constants/two-pi");

test("'TWO_PI' defined?", () => {
  expect(TWO_PI).toBeDefined();
  expect(TWO_PI).not.toBeNull();
})

test("'TWO_PI's type.", () => {
  expect(typeof TWO_PI).toBe("number");
})

test("does 'TWO_PI' has 'monkeyPatch' functions?", () => {
  expect(monkeyPatch_TWO_PI).toBeDefined();
  expect(monkeyPatch_TWO_PI).not.toBeNull();
  expect(typeof monkeyPatch_TWO_PI).toBe("function");
})

test("does 'TWO_PI' has 'removePatch' functions?", () => {
  expect(removePatch_TWO_PI).toBeDefined();
  expect(removePatch_TWO_PI).not.toBeNull();
  expect(typeof removePatch_TWO_PI).toBe("function");
})

test("'TWO_PI', is 'monkeyPatch' and 'removePatch' same?", () => {
  expect(monkeyPatch_TWO_PI === removePatch_TWO_PI).not.toBe(true);
})

test("is 'monkeyPatch' work with 'TWO_PI'?", () => {
  removePatch_TWO_PI();
  expect(Math.TWO_PI).not.toBeDefined();
  monkeyPatch_TWO_PI(); // Patch 🩹
  expect(Math.TWO_PI).toBeDefined();
})

test("is 'TWO_PI' working properly?", () => {
  expect(TWO_PI).toBeCloseTo(Math.PI * 2);
  expect(TWO_PI / 2).toBeCloseTo(Math.PI);
  expect(TWO_PI * 0.5).toBeCloseTo(Math.PI);
})

test("is 'TWO_PI' working properly with patch?", () => {
  expect(Math.TWO_PI).toBeCloseTo(Math.PI * 2);
  expect(Math.TWO_PI / 2).toBeCloseTo(Math.PI);
  expect(Math.TWO_PI * 0.5).toBeCloseTo(Math.PI);
  removePatch_TWO_PI();
})