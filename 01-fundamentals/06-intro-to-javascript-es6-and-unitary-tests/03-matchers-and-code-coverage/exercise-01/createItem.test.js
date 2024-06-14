const createItem = require("./createItem");

describe("a função createItem", () => {
  it("cria um item válido", () => {
    const item = createItem("name", "kg", 1, 1);
    const expectedResult = { name: "name", unit: "kg", price: 1, quantity: 1 };
    expect(item).toEqual(expectedResult);
  });
  it("utiliza zero como quantidade padrão", () => {
    const item = createItem("name", "kg", 1);
    expect(item).toHaveProperty("quantity", 0);
  });
  it("Lança um erro quando não recebe parâmetros", () => {
    const item = () => createItem();
    expect(item).toThrow();
  });
  it("Lança um erro se o nome do item não é uma string", () => {
    const item = () => createItem(1, "kg", 1, 1);
    const expectedResult = new Error("O nome do item deve ser uma string");
    expect(item).toThrow(expectedResult);
  });
  it("Lança um erro se o preço é negativo", () => {
    const item = () => createItem("name", "kg", -1, 1);
    const expectedResult = new Error("O preço do item deve ser maior que zero");
    expect(item).toThrow(expectedResult);
  });
  it("Lança um erro se o preço é zero", () => {
    const item = () => createItem("name", "kg", 0, 1);
    const expectedResult = new Error("O preço do item deve ser maior que zero");
    expect(item).toThrow(expectedResult);
  });
});
