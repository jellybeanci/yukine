const {randomItem} = require("../../../yuki/func/array/random-item");
const {as} = require("../../../constants/alpha-beta/as");
const {bs} = require("../../../constants/alpha-beta/bs");
const {hs} = require("../../../constants/alpha-beta/hs");
const {ks} = require("../../../constants/alpha-beta/ks");
const {xs} = require("../../../constants/alpha-beta/xs");
const {ys} = require("../../../constants/alpha-beta/ys");
const {nameArray} = require("../../../constants/name-array");

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

test("is 'randomItem' working properly?", () => {
  for (let i = 0; i < 15; i++) {
    const randItem = randomItem(as);
    const index = as.indexOf(randItem);
    const randomExpect = expect(index);
    randomExpect.toBeGreaterThanOrEqual(0);
    randomExpect.toBeLessThan(as.length);
  }
  for (let i = 0; i < 15; i++) {
    const randItem = randomItem(bs);
    const index = bs.indexOf(randItem);
    const randomExpect = expect(index);
    randomExpect.toBeGreaterThanOrEqual(0);
    randomExpect.toBeLessThan(bs.length);
  }
  for (let i = 0; i < 15; i++) {
    const randItem = randomItem(xs);
    const index = xs.indexOf(randItem);
    const randomExpect = expect(index);
    randomExpect.toBeGreaterThanOrEqual(0);
    randomExpect.toBeLessThan(xs.length);
  }
  for (let i = 0; i < 15; i++) {
    const randItem = randomItem(ys);
    const index = ys.indexOf(randItem);
    const randomExpect = expect(index);
    randomExpect.toBeGreaterThanOrEqual(0);
    randomExpect.toBeLessThan(ys.length);
  }
  for (let i = 0; i < 15; i++) {
    const randItem = randomItem(ks);
    const index = ks.indexOf(randItem);
    const randomExpect = expect(index);
    randomExpect.toBeGreaterThanOrEqual(0);
    randomExpect.toBeLessThan(ks.length);
  }
  for (let i = 0; i < 15; i++) {
    const randItem = randomItem(hs);
    const index = hs.indexOf(randItem);
    const randomExpect = expect(index);
    randomExpect.toBeGreaterThanOrEqual(0);
    randomExpect.toBeLessThan(hs.length);
  }
  for (let i = 0; i < 15; i++) {
    const randItem = randomItem(nameArray);
    const index = nameArray.indexOf(randItem);
    const randomExpect = expect(index);
    randomExpect.toBeGreaterThanOrEqual(0);
    randomExpect.toBeLessThan(nameArray.length);
  }
})

test("is 'randomItem' working properly with patch?", () => {
  for (let i = 0; i < 15; i++) {
    const randItem = as.randomItem();
    const index = as.indexOf(randItem);
    const randomExpect = expect(index);
    randomExpect.toBeGreaterThanOrEqual(0);
    randomExpect.toBeLessThan(as.length);
  }
  for (let i = 0; i < 15; i++) {
    const randItem = bs.randomItem();
    const index = bs.indexOf(randItem);
    const randomExpect = expect(index);
    randomExpect.toBeGreaterThanOrEqual(0);
    randomExpect.toBeLessThan(bs.length);
  }
  for (let i = 0; i < 15; i++) {
    const randItem = xs.randomItem();
    const index = xs.indexOf(randItem);
    const randomExpect = expect(index);
    randomExpect.toBeGreaterThanOrEqual(0);
    randomExpect.toBeLessThan(xs.length);
  }
  for (let i = 0; i < 15; i++) {
    const randItem = ys.randomItem();
    const index = ys.indexOf(randItem);
    const randomExpect = expect(index);
    randomExpect.toBeGreaterThanOrEqual(0);
    randomExpect.toBeLessThan(ys.length);
  }
  for (let i = 0; i < 15; i++) {
    const randItem = ks.randomItem();
    const index = ks.indexOf(randItem);
    const randomExpect = expect(index);
    randomExpect.toBeGreaterThanOrEqual(0);
    randomExpect.toBeLessThan(ks.length);
  }
  for (let i = 0; i < 15; i++) {
    const randItem = hs.randomItem();
    const index = hs.indexOf(randItem);
    const randomExpect = expect(index);
    randomExpect.toBeGreaterThanOrEqual(0);
    randomExpect.toBeLessThan(hs.length);
  }
  for (let i = 0; i < 15; i++) {
    const randItem = nameArray.randomItem();
    const index = nameArray.indexOf(randItem);
    const randomExpect = expect(index);
    randomExpect.toBeGreaterThanOrEqual(0);
    randomExpect.toBeLessThan(nameArray.length);
  }
  randomItem.removePatch();
})