const {stringEquals} = require("../../../yuki/func/string/string-equals");
const {strangeString1} = require("../../../constants/strange-string1");
const {strangeString2} = require("../../../constants/strange-string2");
const {mark1} = require("../../../constants/mark1");
const {mark2} = require("../../../constants/mark2");

test("'stringEquals' defined?", () => {
  expect(stringEquals).toBeDefined();
  expect(stringEquals).not.toBeNull();
})

test("does 'stringEquals' has 'monkeyPatch'?", () => {
  expect(stringEquals.monkeyPatch).toBeDefined();
  expect(stringEquals.monkeyPatch).not.toBeNull();
  expect(typeof stringEquals.monkeyPatch).toBe("function");
})

test("does 'stringEquals' has 'removePatch' functions?", () => {
  expect(stringEquals.removePatch).toBeDefined();
  expect(stringEquals.removePatch).not.toBeNull();
  expect(typeof stringEquals.removePatch).toBe("function");
})

test("'stringEquals', is 'monkeyPatch' and 'removePatch' same?", () => {
  expect(stringEquals.monkeyPatch === stringEquals.removePatch).not.toBe(true);
})

test("is 'monkeyPatch' work with 'stringEquals'?", () => {
  stringEquals.removePatch();
  expect(mark1.equals).not.toBeDefined();
  stringEquals.monkeyPatch(); // Patch 🩹
  expect(mark1.equals).toBeDefined();
})

test("is 'stringEquals' working properly?", () => {
  expect(strangeString1).toBeDefined();
  expect(strangeString1).not.toBeNull();
  expect(strangeString2).toBeDefined();
  expect(strangeString2).not.toBeNull();
  expect(typeof strangeString1).toEqual("string");
  expect(typeof strangeString2).toEqual("string");
  expect(strangeString1 === strangeString2).toBe(false);
  expect(stringEquals(strangeString1, strangeString2)).toBe(true);
})

test("is 'stringEquals' working properly with objects?", () => {
  expect(mark1).toBeDefined();
  expect(mark1).not.toBeNull();
  expect(mark2).toBeDefined();
  expect(mark2).not.toBeNull();
  expect(typeof mark1).toEqual("object");
  expect(typeof mark2).toEqual("object");
  expect(strangeString1 === strangeString2).toBe(false);
  expect(stringEquals(strangeString1, strangeString2)).toBe(true);
})

test("is 'stringEquals' working properly with patch?", () => {
  expect(strangeString1).toBeDefined();
  expect(strangeString1).not.toBeNull();
  expect(strangeString2).toBeDefined();
  expect(strangeString2).not.toBeNull();
  expect(typeof strangeString1).toEqual("string");
  expect(typeof strangeString2).toEqual("string");
  expect(strangeString1 === strangeString2).toBe(false);
  expect(strangeString1.equals(strangeString2)).toBe(true);
  stringEquals.removePatch();
})

test("is 'stringEquals' working properly with objects using patch?", () => {
  expect(mark1).toBeDefined();
  expect(mark1).not.toBeNull();
  expect(mark2).toBeDefined();
  expect(mark2).not.toBeNull();
  expect(typeof mark1).toEqual("object");
  expect(typeof mark2).toEqual("object");
  expect(strangeString1 === strangeString2).toBe(false);
  expect(strangeString1.equals(strangeString2)).toBe(true);
  stringEquals.removePatch();
})