const {sind} = require("../../../yuki/func/math/sind");
const {deg2rad} = require("../../../yuki/func/math/deg2rad");
const {getRandomDegree} = require("../../../constants/get-random-degree");

test("'sind' defined?", () => {
  expect(sind).toBeDefined();
  expect(sind).not.toBeNull();
})

test("does 'sind' has 'monkeyPatch'?", () => {
  expect(sind.monkeyPatch).toBeDefined();
  expect(sind.monkeyPatch).not.toBeNull();
  expect(typeof sind.monkeyPatch).toBe("function");
})

test("does 'sind' has 'removePatch' functions?", () => {
  expect(sind.removePatch).toBeDefined();
  expect(sind.removePatch).not.toBeNull();
  expect(typeof sind.removePatch).toBe("function");
})

test("'sind', is 'monkeyPatch' and 'removePatch' same?", () => {
  expect(sind.monkeyPatch === sind.removePatch).not.toBe(true);
})

test("is 'monkeyPatch' work with 'sind'?", () => {
  sind.removePatch();
  expect(Math.sind).not.toBeDefined();
  sind.monkeyPatch(); // Patch 🩹
  expect(Math.sind).toBeDefined();
})

test("is 'sind' working properly?", () => {
  for (let i = 0; i < 1_000; i++) {
    const randDeg = getRandomDegree();
    expect(sind(randDeg)).toBeCloseTo(Math.sin(deg2rad(randDeg)));
  }
})

test("is 'sind' working properly with patch?", () => {
  for (let i = 0; i < 1_000; i++) {
    const randDeg = getRandomDegree();
    expect(Math.sind(randDeg)).toBeCloseTo(Math.sin(deg2rad(randDeg)));
  }
  sind.removePatch();
})