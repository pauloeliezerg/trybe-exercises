const removeItem = require("./script");

describe("test removeItem function", () => {
  it("returns the expected array", () => {
    expect(removeItem([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
});
