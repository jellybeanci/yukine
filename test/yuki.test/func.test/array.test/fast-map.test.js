const {fastMap} = require("../../../yuki/func/array/fast-map");
const {as} = require("../../../constants/alpha-beta/as");
const {cs} = require("../../../constants/alpha-beta/cs");
const {ds} = require("../../../constants/alpha-beta/ds");
const {gs} = require("../../../constants/alpha-beta/gs");
const {garbageArray} = require("../../../constants/garbage-array");

test("'fastMap' defined?", () => {
  expect(fastMap).toBeDefined();
  expect(fastMap).not.toBeNull();
})

test("does 'fastMap' has 'monkeyPatch'?", () => {
  expect(fastMap.monkeyPatch).toBeDefined();
  expect(fastMap.monkeyPatch).not.toBeNull();
  expect(typeof fastMap.monkeyPatch).toBe("function");
})

test("does 'fastMap' has 'removePatch' functions?", () => {
  expect(fastMap.removePatch).toBeDefined();
  expect(fastMap.removePatch).not.toBeNull();
  expect(typeof fastMap.removePatch).toBe("function");
})

test("'fastMap', is 'monkeyPatch' and 'removePatch' same?", () => {
  expect(fastMap.monkeyPatch === fastMap.removePatch).not.toBe(true);
})

test("is 'monkeyPatch' work with 'fastMap'?", () => {
  fastMap.removePatch();
  expect(as.add).not.toBeDefined();
  fastMap.monkeyPatch(); // Patch 🩹
  expect(as.fastMap).toBeDefined();
})

test("is 'fastMap' working properly?", () => {
  expect(fastMap(as, x => x * 2)).toEqual(cs);
  expect(fastMap(ds, x => x * x)).toEqual(gs);
  expect(fastMap([1, 2, 3], x => x + 2)).toEqual([3, 4, 5]);
  expect(fastMap(garbageArray, x => !!x)).toEqual([true, true, false, false, false, true, true, true, true]);
  const array = [6, 3, 2, 1, 6, 7, 3, -4, 6];
  const mapped = array.map(((value, i, arr) => {
    const prev = arr[i - 1] ?? 0;
    return value ** prev;
  }));
  expect(fastMap(array, (value, i, arr) => {
    const prev = arr[i - 1] ?? 0;
    return value ** prev;
  })).toEqual(mapped);
})

test("is 'fastMap' working properly with patch?", () => {
  expect(as.fastMap(x => x * 2)).toEqual(cs);
  expect(ds.fastMap(x => x * x)).toEqual(gs);
  expect([1, 2, 3].fastMap(x => x + 2)).toEqual([3, 4, 5]);
  expect(garbageArray.fastMap(x => !!x)).toEqual([true, true, false, false, false, true, true, true, true]);
  const array = [6, 3, 2, 1, 6, 7, 3, -4, 6];
  const mapped = array.map(((value, i, arr) => {
    const prev = arr[i - 1] ?? 0;
    return value ** prev;
  }));
  expect(array.fastMap((value, i, arr) => {
    const prev = arr[i - 1] ?? 0;
    return value ** prev;
  })).toEqual(mapped);
  fastMap.removePatch();
})