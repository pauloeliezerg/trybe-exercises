const createItem = require("./createItem");

describe("a função createItem", () => {
  it("cria um item válido", () => {
    const item = createItem("name", "kg", 1, 1);
    const expectedResult = { name: "name", unit: "kg", price: 1, quantity: 1 };
    expect(item).toEqual(expectedResult);
  });
  it.todo("utiliza zero como quantidade padrão");
  it.todo("Lança um erro quando não recebe parâmetros");
  it.todo("Lança um erro se o nome do item não é uma string");
  it.todo("Lança um erro se o preço é negativo");
  it.todo("Lança um erro se o preço é zero");
});
