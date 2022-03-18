const {randomGaussian} = require("../../../yuki/func/math/random-gaussian");

test("'randomGaussian' defined?", () => {
  expect(randomGaussian).toBeDefined();
  expect(randomGaussian).not.toBeNull();
})

test("does 'randomGaussian' has 'monkeyPatch'?", () => {
  expect(randomGaussian.monkeyPatch).toBeDefined();
  expect(randomGaussian.monkeyPatch).not.toBeNull();
  expect(typeof randomGaussian.monkeyPatch).toBe("function");
})

test("does 'randomGaussian' has 'removePatch' functions?", () => {
  expect(randomGaussian.removePatch).toBeDefined();
  expect(randomGaussian.removePatch).not.toBeNull();
  expect(typeof randomGaussian.removePatch).toBe("function");
})

test("'randomGaussian', is 'monkeyPatch' and 'removePatch' same?", () => {
  expect(randomGaussian.monkeyPatch === randomGaussian.removePatch).not.toBe(true);
})

test("is 'monkeyPatch' work with 'randomGaussian'?", () => {
  randomGaussian.removePatch();
  expect(Math.randomGaussian).not.toBeDefined();
  randomGaussian.monkeyPatch(); // Patch 🩹
  expect(Math.randomGaussian).toBeDefined();
})

test("is 'randomGaussian' working properly?", () => {
  for (let i = 0; i < 1_000; i++) {
    const randomExpect = expect(randomGaussian());
    randomExpect.toBeGreaterThan(-1);
    randomExpect.toBeLessThan(1);
  }
  for (let i = 0; i < 1_000; i++) {
    const randomExpect = expect(randomGaussian(3));
    randomExpect.toBeGreaterThan(-1);
    randomExpect.toBeLessThan(1);
  }
})

test("is 'randomGaussian' working properly with patch?", () => {
  for (let i = 0; i < 1_000; i++) {
    const randomExpect = expect(Math.randomGaussian());
    randomExpect.toBeGreaterThan(-1);
    randomExpect.toBeLessThan(1);
  }
  for (let i = 0; i < 1_000; i++) {
    const randomExpect = expect(Math.randomGaussian(3));
    randomExpect.toBeGreaterThan(-1);
    randomExpect.toBeLessThan(1);
  }
  randomGaussian.removePatch();
})