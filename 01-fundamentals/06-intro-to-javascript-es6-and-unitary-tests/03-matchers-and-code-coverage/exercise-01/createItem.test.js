const createItem = require("./createItem");

describe("a função createItem", () => {
  it("cria um item válido", () => {
    const item = createItem("name", "kg", 1, 1);
    const expectedResult = { name: "name", unit: "kg", price: 1, quantity: 1 };
    expect(item).toEqual(expectedResult);
  });
  it("utiliza zero como quantidade padrão", () => {
    const item = createItem("name", "kg", 1);
    const expectedResult = { name: "name", unit: "kg", price: 1, quantity: 0 };
    expect(item).toEqual(expectedResult);
  });
  it("Lança um erro quando não recebe parâmetros", () => {
    const item = () => {
      createItem();
    };
    expect(item).toThrow();
  });
  it.todo("Lança um erro se o nome do item não é uma string");
  it.todo("Lança um erro se o preço é negativo");
  it.todo("Lança um erro se o preço é zero");
});
