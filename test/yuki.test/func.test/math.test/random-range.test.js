const {randomRange} = require("../../../yuki/func/math/random-range");

test("'randomRange' defined?", () => {
  expect(randomRange).toBeDefined();
  expect(randomRange).not.toBeNull();
})

test("does 'randomRange' has 'monkeyPatch'?", () => {
  expect(randomRange.monkeyPatch).toBeDefined();
  expect(randomRange.monkeyPatch).not.toBeNull();
  expect(typeof randomRange.monkeyPatch).toBe("function");
})

test("does 'randomRange' has 'removePatch' functions?", () => {
  expect(randomRange.removePatch).toBeDefined();
  expect(randomRange.removePatch).not.toBeNull();
  expect(typeof randomRange.removePatch).toBe("function");
})

test("'randomRange', is 'monkeyPatch' and 'removePatch' same?", () => {
  expect(randomRange.monkeyPatch === randomRange.removePatch).not.toBe(true);
})

test("is 'monkeyPatch' work with 'randomRange'?", () => {
  randomRange.removePatch();
  expect(Math.randomRange).not.toBeDefined();
  randomRange.monkeyPatch(); // Patch 🩹
  expect(Math.randomRange).toBeDefined();
})

test("is 'randomRange' working properly?", () => {
  for (let i = 0; i < 1_000; i++) {
    const randomExpect = expect(randomRange(-15, -5));
    randomExpect.toBeGreaterThan(-15);
    randomExpect.toBeLessThan(-5);
  }
  for (let i = 0; i < 1_000; i++) {
    const randomExpect = expect(randomRange(10, 20));
    randomExpect.toBeGreaterThan(10);
    randomExpect.toBeLessThan(20);
  }
  for (let i = 0; i < 1_000; i++) {
    const randomExpect = expect(randomRange(50));
    randomExpect.toBeGreaterThan(0);
    randomExpect.toBeLessThan(50);
  }
})

test("is 'randomRange' working properly with patch?", () => {
  for (let i = 0; i < 1_000; i++) {
    const randomExpect = expect(Math.randomRange(-15, -5));
    randomExpect.toBeGreaterThan(-15);
    randomExpect.toBeLessThan(-5);
  }
  for (let i = 0; i < 1_000; i++) {
    const randomExpect = expect(Math.randomRange(10, 20));
    randomExpect.toBeGreaterThan(10);
    randomExpect.toBeLessThan(20);
  }
  for (let i = 0; i < 1_000; i++) {
    const randomExpect = expect(Math.randomRange(50));
    randomExpect.toBeGreaterThan(0);
    randomExpect.toBeLessThan(50);
  }
  randomRange.removePatch();
})