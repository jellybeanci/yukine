const {square} = require("../../../yuki/func/math/square");

test("'square' defined?", () => {
  expect(square).toBeDefined();
  expect(square).not.toBeNull();
})

test("does 'square' has 'monkeyPatch'?", () => {
  expect(square.monkeyPatch).toBeDefined();
  expect(square.monkeyPatch).not.toBeNull();
  expect(typeof square.monkeyPatch).toBe("function");
})

test("does 'square' has 'removePatch' functions?", () => {
  expect(square.removePatch).toBeDefined();
  expect(square.removePatch).not.toBeNull();
  expect(typeof square.removePatch).toBe("function");
})

test("'square', is 'monkeyPatch' and 'removePatch' same?", () => {
  expect(square.monkeyPatch === square.removePatch).not.toBe(true);
})

test("is 'monkeyPatch' work with 'square'?", () => {
  square.removePatch();
  expect(Math.square).not.toBeDefined();
  square.monkeyPatch(); // Patch 🩹
  expect(Math.square).toBeDefined();
})

test("is 'square' working properly?", () => {
  expect(square(-12.345)).toBeCloseTo(152.399025);
  expect(square(69.420)).toBeCloseTo(4819.1364);
  expect(square(42)).toBeCloseTo(1764);
  expect(square(42)).toBeCloseTo(42 ** 2);
  expect(square(42)).toBeCloseTo(42 * 42);
  expect(Math.sqrt(square(123.123456))).toBeCloseTo(123.123456);
})

test("is 'square' working properly with patch?", () => {
  expect(Math.square(-12.345)).toBeCloseTo(152.399025);
  expect(Math.square(69.420)).toBeCloseTo(4819.1364);
  expect(Math.square(42)).toBeCloseTo(1764);
  expect(Math.square(42)).toBeCloseTo(42 ** 2);
  expect(Math.square(42)).toBeCloseTo(42 * 42);
  expect(Math.sqrt(Math.square(123.123456))).toBeCloseTo(123.123456);
  square.removePatch();
})