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
  it(`if the remaining letters are not converted`, () => {
    expect(encode("abcdefghijklmnopqrstuvwxyz")).toBe(
      "1bcd2fgh3jklmn4pqrst5vwxyz",
    );
  });
  it(`if string returned has the same number of characters as the string passed as a parameter`, () => {
    expect(encode("abc").length).toBe(3);
  });
});

describe("tests the decode function", () => {
  it("if decode is a function", () => {
    expect(typeof decode).toBe("function");
  });
  it(`if "1" returns "a"`, () => {
    expect(decode("1")).toBe("a");
  });
  it(`if "2" returns "e"`, () => {
    expect(decode("2")).toBe("e");
  });
  it(`if "3" returns "i"`, () => {
    expect(decode("3")).toBe("i");
  });
  it(`if "4" returns "o"`, () => {
    expect(decode("4")).toBe("o");
  });
  it(`if "5" returns "u"`, () => {
    expect(decode("5")).toBe("u");
  });
  it(`if the remaining numbers are not converted`, () => {
    expect(decode("0123456789")).toBe("0aeiou6789");
  });
  it(`if string returned has the same number of characters as the string passed as a parameter`, () => {
    expect(decode("abc").length).toBe(3);
  });
});
