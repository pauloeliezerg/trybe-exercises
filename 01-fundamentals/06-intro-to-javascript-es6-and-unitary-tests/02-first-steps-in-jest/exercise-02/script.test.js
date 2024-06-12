const myFizzBuzz = require("./script");

describe("test myFizzBuzz function", () => {
  it(`If num is a number divisible by 3 and 5, the function returns "fizzbuzz"`, () => {
    expect(myFizzBuzz(15)).toBe("fizzbuzz");
  });
  it(`If num is a number divisible only by 3(and not 5), the function returns "fizz"`, () => {
    expect(myFizzBuzz(3)).toBe("fizz");
  });
  it(`If num is a number divisible only by 5(and not 3), the function returns "buzz"`, () => {
    expect(myFizzBuzz(5)).toBe("buzz");
  });
});
