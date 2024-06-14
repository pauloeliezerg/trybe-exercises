// given an array of numbers, create a function that returns a new array with the square roots of the numbers. However, if a number is negative, the function must replace it with NaN (Not a Number)
const numbers = [4, 9, -1, 16, -5, 25];

const squareRoots = numbers.map((number) => {
  if (number < 0) return NaN;
  return Math.sqrt(number);
});
