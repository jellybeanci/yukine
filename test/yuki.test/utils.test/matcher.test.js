const {matcher} = require("../../yuki/utils/matcher");

test("'matcher' defined?", () => {
  expect(matcher).toBeDefined();
  expect(matcher).not.toBeNull();
})

test("is 'matcher' working properly?", () => {
  const myMatcher = matcher(/^a(.*)b$/gi);
  expect(myMatcher).toBeDefined();
  expect(myMatcher).not.toBeNull();
  expect(typeof myMatcher).toBe("function");
  expect(myMatcher("abcde")).toEqual(false);
  expect(myMatcher("ardeb")).toEqual(true);
  expect(myMatcher("a79b")).toEqual(true);
  expect(myMatcher("12345")).toEqual(false);
})