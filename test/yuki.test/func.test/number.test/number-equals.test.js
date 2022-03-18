const {numberEquals} = require("../../../yuki/func/number/number-equals");

const testNumber1 = 1;
const testNumber2 = 2;
const point1 = 0.1;
const point2 = 0.2;
const point3 = 0.3;

test("'numberEquals' defined?", () => {
  expect(numberEquals).toBeDefined();
  expect(numberEquals).not.toBeNull();
})

test("does 'numberEquals' has 'monkeyPatch'?", () => {
  expect(numberEquals.monkeyPatch).toBeDefined();
  expect(numberEquals.monkeyPatch).not.toBeNull();
  expect(typeof numberEquals.monkeyPatch).toBe("function");
})

test("does 'numberEquals' has 'removePatch' functions?", () => {
  expect(numberEquals.removePatch).toBeDefined();
  expect(numberEquals.removePatch).not.toBeNull();
  expect(typeof numberEquals.removePatch).toBe("function");
})

test("'numberEquals', is 'monkeyPatch' and 'removePatch' same?", () => {
  expect(numberEquals.monkeyPatch === numberEquals.removePatch).not.toBe(true);
})

test("is 'monkeyPatch' work with 'numberEquals'?", () => {
  numberEquals.removePatch();
  expect(testNumber1.equals).not.toBeDefined();
  numberEquals.monkeyPatch(); // Patch 🩹
  expect(testNumber1.equals).toBeDefined();
})

test("is 'numberEquals' working properly?", () => {
  expect(numberEquals(testNumber1, testNumber2)).toBe(false);
  expect(numberEquals(testNumber1, testNumber2 - 1)).toBe(true);
  expect(point1 + point2 === point3).toBe(false);
  expect(numberEquals(point1 + point2, point3)).toBe(true);
})

test("is 'numberEquals' working properly with patch?", () => {
  expect(testNumber1.equals(testNumber2)).toBe(false);
  expect(testNumber1.equals(testNumber2 - 1)).toBe(true);
  expect(point1 + point2 === point3).toBe(false);
  expect((point1 + point2).equals(point3)).toBe(true);
  numberEquals.removePatch();
})