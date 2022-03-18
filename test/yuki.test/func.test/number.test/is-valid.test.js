const {isValid} = require("../../../yuki/func/number/is-valid");

const meaningOfLifeUniverseAndEverything = 42;
const number = 420;
const divByZer0 = 1 / 0;
const pozInf = Infinity;
const negInf = -Infinity;
const notANumber = 69 * " noice";

test("'isValid' defined?", () => {
  expect(isValid).toBeDefined();
  expect(isValid).not.toBeNull();
})

test("does 'isValid' has 'monkeyPatch'?", () => {
  expect(isValid.monkeyPatch).toBeDefined();
  expect(isValid.monkeyPatch).not.toBeNull();
  expect(typeof isValid.monkeyPatch).toBe("function");
})

test("does 'isValid' has 'removePatch' functions?", () => {
  expect(isValid.removePatch).toBeDefined();
  expect(isValid.removePatch).not.toBeNull();
  expect(typeof isValid.removePatch).toBe("function");
})

test("'isValid', is 'monkeyPatch' and 'removePatch' same?", () => {
  expect(isValid.monkeyPatch === isValid.removePatch).not.toBe(true);
})

test("is 'monkeyPatch' work with 'isValid'?", () => {
  isValid.removePatch();
  expect(meaningOfLifeUniverseAndEverything.isValid).not.toBeDefined();
  isValid.monkeyPatch(); // Patch 🩹
  expect(meaningOfLifeUniverseAndEverything.isValid).toBeDefined();
})

test("is 'isValid' working properly?", () => {
  expect(isValid(meaningOfLifeUniverseAndEverything)).toBe(true)
  expect(isValid(number)).toBe(true);
  expect(isValid(divByZer0)).toBe(false);
  expect(isValid(pozInf)).toBe(false);
  expect(isValid(negInf)).toBe(false);
  expect(isValid(notANumber)).toBe(false);
})

test("is 'isValid' working properly with patch?", () => {
  expect(meaningOfLifeUniverseAndEverything.isValid()).toBe(true)
  expect(number.isValid()).toBe(true);
  expect(divByZer0.isValid()).toBe(false);
  expect(pozInf.isValid()).toBe(false);
  expect(negInf.isValid()).toBe(false);
  expect(notANumber.isValid()).toBe(false);
  isValid.removePatch();
})