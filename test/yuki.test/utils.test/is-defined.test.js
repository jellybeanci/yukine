const {isDefined} = require("../../yuki/utils/is-defined")

test("'isDefined' defined?", () => {
  expect(isDefined).toBeDefined();
  expect(isDefined).not.toBeNull();
})

test("is 'isDefined' working properly?", () => {
  let empty;
  const test = [1, 2, 3, 4];
  const person = {
    name: "Göksel",
    surname: "Küçükşahin",
    age: 23,
    langs: ["Turkish", "English"],
    master: true
  };
  expect(isDefined(person)).toEqual(true);
  expect(isDefined(person.name)).toEqual(true);
  expect(isDefined(person.langs)).toEqual(true);
  expect(isDefined(person.langs[0])).toEqual(true);
  expect(isDefined(person.langs[100])).toEqual(false);
  expect(isDefined(person.age)).toEqual(true);
  expect(isDefined(person.age.zubizeratta)).toEqual(false);
  expect(isDefined(test)).toEqual(true);
  expect(isDefined(empty)).toEqual(false);
})