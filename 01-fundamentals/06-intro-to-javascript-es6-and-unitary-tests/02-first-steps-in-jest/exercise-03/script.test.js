const { encode, decode } = require("./script");

describe("tests the encode function", () => {
  it("if encode is a function", () => {
    expect(typeof encode).toBe("function");
  });
  it(`if "a" returns "1"`, () => {
    expect(encode("a")).toBe("1");
  });
  it(`if "e" returns "2"`, () => {
    expect(encode("e")).toBe("2");
  });
  it(`if "i" returns "3"`, () => {
    expect(encode("i")).toBe("3");
  });
  it(`if "o" returns "4"`, () => {
    expect(encode("o")).toBe("4");
  });
  it(`if "u" returns "5"`, () => {
    expect(encode("u")).toBe("5");
  });
});

describe("tests the decode function", () => {
  it("if decode is a function", () => {
    expect(typeof decode).toBe("function");
  });
});
