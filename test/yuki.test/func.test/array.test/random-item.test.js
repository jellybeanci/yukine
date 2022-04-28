const {randomItem} = require("../../../yuki/func/array/random-item");
const {as} = require("../../../constants/alpha-beta/as");
const {bs} = require("../../../constants/alpha-beta/bs");
const {fs} = require("../../../constants/alpha-beta/fs");
const {hs} = require("../../../constants/alpha-beta/hs");
const {ks} = require("../../../constants/alpha-beta/ks");
const {ns} = require("../../../constants/alpha-beta/ns");
const {xs} = require("../../../constants/alpha-beta/xs");
const {ys} = require("../../../constants/alpha-beta/ys");
const {zs} = require("../../../constants/alpha-beta/zs");

test("'randomItem' defined?", () => {
  expect(randomItem).toBeDefined();
  expect(randomItem).not.toBeNull();
})

test("does 'randomItem' has 'monkeyPatch'?", () => {
  expect(randomItem.monkeyPatch).toBeDefined();
  expect(randomItem.monkeyPatch).not.toBeNull();
  expect(typeof randomItem.monkeyPatch).toBe("function");
})

test("does 'randomItem' has 'removePatch' functions?", () => {
  expect(randomItem.removePatch).toBeDefined();
  expect(randomItem.removePatch).not.toBeNull();
  expect(typeof randomItem.removePatch).toBe("function");
})

test("'randomItem', is 'monkeyPatch' and 'removePatch' same?", () => {
  expect(randomItem.monkeyPatch === randomItem.removePatch).not.toBe(true);
})

test("is 'monkeyPatch' work with 'randomItem'?", () => {
  randomItem.removePatch();
  expect(xs.randomItem).not.toBeDefined();
  randomItem.monkeyPatch(); // Patch 🩹
  expect(xs.randomItem).toBeDefined();
})

function testArrayRandomItem(array, count = 50) {
  for (let i = 0; i < count; i++) {
    const rndItem = randomItem(array);
    const randomExpect = expect(array.indexOf(rndItem));
    randomExpect.toBeGreaterThanOrEqual(0);
    randomExpect.toBeLessThan(array.length);
  }
}

function testArrayRandomItemPrototype(array, count) {
  for (let i = 0; i < count; i++) {
    const rndItem = array.randomItem();
    const randomExpect = expect(array.indexOf(rndItem));
    randomExpect.toBeGreaterThanOrEqual(0);
    randomExpect.toBeLessThan(array.length);
  }
}

test("is 'randomItem' working properly?", () => {
  testArrayRandomItem(as);
  testArrayRandomItem(bs);
  testArrayRandomItem(fs);
  testArrayRandomItem(hs);
  testArrayRandomItem(ks);
  testArrayRandomItem(ns);
  testArrayRandomItem(xs);
  testArrayRandomItem(ys);
  testArrayRandomItem(zs);
})

test("is 'randomItem' working properly with patch?", () => {
  testArrayRandomItemPrototype(as);
  testArrayRandomItemPrototype(bs);
  testArrayRandomItemPrototype(fs);
  testArrayRandomItemPrototype(hs);
  testArrayRandomItemPrototype(ks);
  testArrayRandomItemPrototype(ns);
  testArrayRandomItemPrototype(xs);
  testArrayRandomItemPrototype(ys);
  testArrayRandomItemPrototype(zs);
  randomItem.removePatch();
})