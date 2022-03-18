const {randomGaussianRange} = require("../../../yuki/func/math/random-gaussian-range");

test("'randomGaussianRange' defined?", () => {
  expect(randomGaussianRange).toBeDefined();
  expect(randomGaussianRange).not.toBeNull();
})

test("does 'randomGaussianRange' has 'monkeyPatch'?", () => {
  expect(randomGaussianRange.monkeyPatch).toBeDefined();
  expect(randomGaussianRange.monkeyPatch).not.toBeNull();
  expect(typeof randomGaussianRange.monkeyPatch).toBe("function");
})

test("does 'randomGaussianRange' has 'removePatch' functions?", () => {
  expect(randomGaussianRange.removePatch).toBeDefined();
  expect(randomGaussianRange.removePatch).not.toBeNull();
  expect(typeof randomGaussianRange.removePatch).toBe("function");
})

test("'randomGaussianRange', is 'monkeyPatch' and 'removePatch' same?", () => {
  expect(randomGaussianRange.monkeyPatch === randomGaussianRange.removePatch).not.toBe(true);
})

test("is 'monkeyPatch' work with 'randomGaussianRange'?", () => {
  randomGaussianRange.removePatch();
  expect(Math.randomGaussianRange).not.toBeDefined();
  randomGaussianRange.monkeyPatch(); // Patch 🩹
  expect(Math.randomGaussianRange).toBeDefined();
})

test("is 'randomGaussianRange' working properly?", () => {
  for (let i = 0; i < 1_000; i++) {
    const randomExpect = expect(randomGaussianRange(-5, 10));
    randomExpect.toBeGreaterThan(-5);
    randomExpect.toBeLessThan(10);
  }
  for (let i = 0; i < 1_000; i++) {
    const randomExpect = expect(randomGaussianRange(-100, 200, 3));
    randomExpect.toBeGreaterThan(-100);
    randomExpect.toBeLessThan(200);
  }
  for (let i = 0; i < 1_000; i++) {
    const randomExpect = expect(randomGaussianRange(50, 60, 5));
    randomExpect.toBeGreaterThan(50);
    randomExpect.toBeLessThan(60);
  }
})

test("is 'randomGaussianRange' working properly with patch?", () => {
  for (let i = 0; i < 1_000; i++) {
    const randomExpect = expect(Math.randomGaussianRange(-5, 10));
    randomExpect.toBeGreaterThan(-5);
    randomExpect.toBeLessThan(10);
  }
  for (let i = 0; i < 1_000; i++) {
    const randomExpect = expect(Math.randomGaussianRange(-100, 200, 3));
    randomExpect.toBeGreaterThan(-100);
    randomExpect.toBeLessThan(200);
  }
  for (let i = 0; i < 1_000; i++) {
    const randomExpect = expect(Math.randomGaussianRange(50, 60, 5));
    randomExpect.toBeGreaterThan(50);
    randomExpect.toBeLessThan(60);
  }
  randomGaussianRange.removePatch();
})