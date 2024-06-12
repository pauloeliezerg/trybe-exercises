const myFizzBuzz = require("./script");

describe("test myFizzBuzz function", () => {
  it(`If num is a number divisible by 3 and 5, the function returns "fizzbuzz"`, () => {
    expect(myFizzBuzz(15)).toBe("fizzbuzz");
  });
});
