const {cosd} = require("../../../yuki/func/math/cosd");
const {deg2rad} = require("../../../yuki/func/math/deg2rad");
const {getRandomDegree} = require("../../../constants/get-random-degree");

test("'cosd' defined?", () => {
  expect(cosd).toBeDefined();
  expect(cosd).not.toBeNull();
})

test("does 'cosd' has 'monkeyPatch'?", () => {
  expect(cosd.monkeyPatch).toBeDefined();
  expect(cosd.monkeyPatch).not.toBeNull();
  expect(typeof cosd.monkeyPatch).toBe("function");
})

test("does 'cosd' has 'removePatch' functions?", () => {
  expect(cosd.removePatch).toBeDefined();
  expect(cosd.removePatch).not.toBeNull();
  expect(typeof cosd.removePatch).toBe("function");
})

test("'cosd', is 'monkeyPatch' and 'removePatch' same?", () => {
  expect(cosd.monkeyPatch === cosd.removePatch).not.toBe(true);
})

test("is 'monkeyPatch' work with 'cosd'?", () => {
  cosd.removePatch();
  expect(Math.cosd).not.toBeDefined();
  cosd.monkeyPatch(); // Patch 🩹
  expect(Math.cosd).toBeDefined();
})

test("is 'cosd' working properly?", () => {
  for (let i = 0; i < 1_000; i++) {
    const randDeg = getRandomDegree();
    expect(cosd(randDeg)).toBeCloseTo(Math.cos(deg2rad(randDeg)));
  }
})

test("is 'cosd' working properly with patch?", () => {
  for (let i = 0; i < 1_000; i++) {
    const randDeg = getRandomDegree();
    expect(Math.cosd(randDeg)).toBeCloseTo(Math.cos(deg2rad(randDeg)));
  }
  cosd.removePatch();
})