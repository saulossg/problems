const valor = require("../exer_01/twoSum");

it("teste 01", () => {
  const result = valor.twoSum([2, 7, 11, 15], 9);

  expect(result).toEqual([0, 1]);
});

it("teste 02", () => {
  const result = valor.twoSum([3, 3], 6);

  expect(result).toEqual([0, 1]);
});

it("teste 03", () => {
  const result = valor.twoSum([3, 2, 4], 6);

  expect(result).toEqual([1, 2]);
});

it("teste 04", () => {
  const result = valor.twoSum([2, 5, 5, 11], 10);

  expect(result).toEqual([1, 2]);
});
