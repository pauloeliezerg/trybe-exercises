const { encode, decode } = require("./script");

describe("tests the encode and decode functions", () => {
  it("if encode is a function", () => {
    expect(typeof encode).toBe("function");
  });
  it("if decode is a function", () => {
    expect(typeof decode).toBe("function");
  });
});
