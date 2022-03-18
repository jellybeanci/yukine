const {cot} = require("../../../yuki/func/math/cot");
const {randomRange} = require("../../../yuki/func/math/random-range");
const {TWO_PI} = require("../../../yuki/func/math/constants/two-pi");

test("'cot' defined?", () => {
  expect(cot).toBeDefined();
  expect(cot).not.toBeNull();
})

test("does 'cot' has 'monkeyPatch'?", () => {
  expect(cot.monkeyPatch).toBeDefined();
  expect(cot.monkeyPatch).not.toBeNull();
  expect(typeof cot.monkeyPatch).toBe("function");
})

test("does 'cot' has 'removePatch' functions?", () => {
  expect(cot.removePatch).toBeDefined();
  expect(cot.removePatch).not.toBeNull();
  expect(typeof cot.removePatch).toBe("function");
})

test("'cot', is 'monkeyPatch' and 'removePatch' same?", () => {
  expect(cot.monkeyPatch === cot.removePatch).not.toBe(true);
})

test("is 'monkeyPatch' work with 'cot'?", () => {
  cot.removePatch();
  expect(Math.cot).not.toBeDefined();
  cot.monkeyPatch(); // Patch 🩹
  expect(Math.cot).toBeDefined();
})

const getRandomRadian = () => randomRange(-TWO_PI, TWO_PI);

test("is 'cot' working properly?", () => {
  for (let i = 0; i < 1_000; i++) {
    const randRad = getRandomRadian();
    expect(cot(randRad)).toBeCloseTo(1 / Math.tan(randRad));
    expect(cot(randRad)).toBeCloseTo(Math.tan(randRad) ** -1);
    expect(cot(randRad)).toBeCloseTo(Math.pow(Math.tan(randRad), -1));
  }
})

test("is 'cot' working properly with patch?", () => {
  for (let i = 0; i < 1_000; i++) {
    const randRad = getRandomRadian();
    expect(Math.cot(randRad)).toBeCloseTo(1 / Math.tan(randRad));
    expect(Math.cot(randRad)).toBeCloseTo(Math.tan(randRad) ** -1);
    expect(Math.cot(randRad)).toBeCloseTo(Math.pow(Math.tan(randRad), -1));
  }
  cot.removePatch();
})