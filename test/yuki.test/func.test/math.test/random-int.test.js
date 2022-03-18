const {randomInt} = require("../../../yuki/func/math/random-int");

test("'randomInt' defined?", () => {
  expect(randomInt).toBeDefined();
  expect(randomInt).not.toBeNull();
})

test("does 'randomInt' has 'monkeyPatch'?", () => {
  expect(randomInt.monkeyPatch).toBeDefined();
  expect(randomInt.monkeyPatch).not.toBeNull();
  expect(typeof randomInt.monkeyPatch).toBe("function");
})

test("does 'randomInt' has 'removePatch' functions?", () => {
  expect(randomInt.removePatch).toBeDefined();
  expect(randomInt.removePatch).not.toBeNull();
  expect(typeof randomInt.removePatch).toBe("function");
})

test("'randomInt', is 'monkeyPatch' and 'removePatch' same?", () => {
  expect(randomInt.monkeyPatch === randomInt.removePatch).not.toBe(true);
})

test("is 'monkeyPatch' work with 'randomInt'?", () => {
  randomInt.removePatch();
  expect(Math.randomInt).not.toBeDefined();
  randomInt.monkeyPatch(); // Patch 🩹
  expect(Math.randomInt).toBeDefined();
})

test("is 'randomInt' working properly?", () => {
  for (let i = 0; i < 1_000; i++) {
    const rand = randomInt(-5, -15);
    const randomExpect = expect(rand);
    randomExpect.toBeGreaterThan(-15);
    randomExpect.toBeLessThanOrEqual(-5);
    expect(Math.floor(rand)).toBeCloseTo(rand);
  }
  for (let i = 0; i < 1_000; i++) {
    const rand = randomInt(10, 20);
    const randomExpect = expect(rand);
    randomExpect.toBeGreaterThanOrEqual(10);
    randomExpect.toBeLessThan(20);
    expect(Math.floor(rand)).toBeCloseTo(rand);
  }
  for (let i = 0; i < 1_000; i++) {
    const rand = randomInt(50);
    const randomExpect = expect(rand);
    randomExpect.toBeGreaterThanOrEqual(0);
    randomExpect.toBeLessThan(50);
    expect(Math.floor(rand)).toBeCloseTo(rand);
  }
})

test("is 'randomInt' working properly with patch?", () => {
  for (let i = 0; i < 1_000; i++) {
    const randomExpect = expect(Math.randomInt(-5, -15));
    randomExpect.toBeGreaterThan(-15);
    randomExpect.toBeLessThanOrEqual(-5);
  }
  for (let i = 0; i < 1_000; i++) {
    const randomExpect = expect(Math.randomInt(10, 20));
    randomExpect.toBeGreaterThanOrEqual(10);
    randomExpect.toBeLessThan(20);
  }
  for (let i = 0; i < 1_000; i++) {
    const randomExpect = expect(Math.randomInt(50));
    randomExpect.toBeGreaterThanOrEqual(0);
    randomExpect.toBeLessThan(50);
  }
  randomInt.removePatch();
})