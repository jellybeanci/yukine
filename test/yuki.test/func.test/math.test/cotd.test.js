const {cotd} = require("../../../yuki/func/math/cotd");
const {deg2rad} = require("../../../yuki/func/math/deg2rad");
const {getRandomDegree} = require("../../../constants/get-random-degree");

test("'cotd' defined?", () => {
  expect(cotd).toBeDefined();
  expect(cotd).not.toBeNull();
})

test("does 'cotd' has 'monkeyPatch'?", () => {
  expect(cotd.monkeyPatch).toBeDefined();
  expect(cotd.monkeyPatch).not.toBeNull();
  expect(typeof cotd.monkeyPatch).toBe("function");
})

test("does 'cotd' has 'removePatch' functions?", () => {
  expect(cotd.removePatch).toBeDefined();
  expect(cotd.removePatch).not.toBeNull();
  expect(typeof cotd.removePatch).toBe("function");
})

test("'cotd', is 'monkeyPatch' and 'removePatch' same?", () => {
  expect(cotd.monkeyPatch === cotd.removePatch).not.toBe(true);
})

test("is 'monkeyPatch' work with 'cotd'?", () => {
  cotd.removePatch();
  expect(Math.cotd).not.toBeDefined();
  cotd.monkeyPatch(); // Patch 🩹
  expect(Math.cotd).toBeDefined();
})

test("is 'cotd' working properly?", () => {
  for (let i = 0; i < 1_000; i++) {
    const randDeg = getRandomDegree();
    expect(cotd(randDeg)).toBeCloseTo(1 / Math.tan(deg2rad(randDeg)));
    expect(cotd(randDeg)).toBeCloseTo(Math.tan(deg2rad(randDeg)) ** -1);
    expect(cotd(randDeg)).toBeCloseTo(Math.pow(Math.tan(deg2rad(randDeg)), -1));
  }
})

test("is 'cotd' working properly with patch?", () => {
  for (let i = 0; i < 1_000; i++) {
    const randDeg = getRandomDegree();
    expect(Math.cotd(randDeg)).toBeCloseTo(1 / Math.tan(deg2rad(randDeg)));
    expect(Math.cotd(randDeg)).toBeCloseTo(Math.tan(deg2rad(randDeg)) ** -1);
    expect(Math.cotd(randDeg)).toBeCloseTo(Math.pow(Math.tan(deg2rad(randDeg)), -1));
  }
  cotd.removePatch();
})