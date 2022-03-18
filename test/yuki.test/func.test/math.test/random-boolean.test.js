const {randomBoolean} = require("../../../yuki/func/math/random-boolean");

test("'randomBoolean' defined?", () => {
  expect(randomBoolean).toBeDefined();
  expect(randomBoolean).not.toBeNull();
})

test("does 'randomBoolean' has 'monkeyPatch'?", () => {
  expect(randomBoolean.monkeyPatch).toBeDefined();
  expect(randomBoolean.monkeyPatch).not.toBeNull();
  expect(typeof randomBoolean.monkeyPatch).toBe("function");
})

test("does 'randomBoolean' has 'removePatch' functions?", () => {
  expect(randomBoolean.removePatch).toBeDefined();
  expect(randomBoolean.removePatch).not.toBeNull();
  expect(typeof randomBoolean.removePatch).toBe("function");
})

test("'randomBoolean', is 'monkeyPatch' and 'removePatch' same?", () => {
  expect(randomBoolean.monkeyPatch === randomBoolean.removePatch).not.toBe(true);
})

test("is 'monkeyPatch' work with 'randomBoolean'?", () => {
  randomBoolean.removePatch();
  expect(Math.randomBoolean).not.toBeDefined();
  randomBoolean.monkeyPatch(); // Patch 🩹
  expect(Math.randomBoolean).toBeDefined();
})

test("is 'randomBoolean' working properly?", () => {
  for (let i = 0; i < 1_000; i++) {
    expect([false, true]).toContainEqual(randomBoolean());
  }
})

test("is 'randomBoolean' working properly with patch?", () => {
  for (let i = 0; i < 1_000; i++) {
    expect([false, true]).toContainEqual(Math.randomBoolean());
  }
  randomBoolean.removePatch();
})