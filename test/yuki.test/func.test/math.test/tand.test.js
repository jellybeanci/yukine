const {tand} = require("../../../yuki/func/math/tand");
const {deg2rad} = require("../../../yuki/func/math/deg2rad");
const {getRandomDegree} = require("../../../constants/get-random-degree");

test("'tand' defined?", () => {
  expect(tand).toBeDefined();
  expect(tand).not.toBeNull();
})

test("does 'tand' has 'monkeyPatch'?", () => {
  expect(tand.monkeyPatch).toBeDefined();
  expect(tand.monkeyPatch).not.toBeNull();
  expect(typeof tand.monkeyPatch).toBe("function");
})

test("does 'tand' has 'removePatch' functions?", () => {
  expect(tand.removePatch).toBeDefined();
  expect(tand.removePatch).not.toBeNull();
  expect(typeof tand.removePatch).toBe("function");
})

test("'tand', is 'monkeyPatch' and 'removePatch' same?", () => {
  expect(tand.monkeyPatch === tand.removePatch).not.toBe(true);
})

test("is 'monkeyPatch' work with 'tand'?", () => {
  tand.removePatch();
  expect(Math.tand).not.toBeDefined();
  tand.monkeyPatch(); // Patch 🩹
  expect(Math.tand).toBeDefined();
})

test("is 'tand' working properly?", () => {
  for (let i = 0; i < 1_000; i++) {
    const randDeg = getRandomDegree();
    expect(tand(randDeg)).toBeCloseTo(Math.tan(deg2rad(randDeg)));
  }
})

test("is 'tand' working properly with patch?", () => {
  for (let i = 0; i < 1_000; i++) {
    const randDeg = getRandomDegree();
    expect(Math.tand(randDeg)).toBeCloseTo(Math.tan(deg2rad(randDeg)));
  }
  tand.removePatch();
})