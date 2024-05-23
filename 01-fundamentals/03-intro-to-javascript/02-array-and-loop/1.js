// array and 'for' loop
const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let greatestNumber = numbers[0];
let oddCount = 0;

for (let index = 0; index < numbers.length; index += 1) {
  // 1. printing every element of numbers array
  console.log(numbers[index]);
  sum += numbers[index];
  numbers[index] > greatestNumber && (greatestNumber = numbers[index]);
  numbers[index] % 2 && (oddCount += 1);
}

let average = sum / numbers.length;

// 2. printing the sum of elements
console.log(sum);
// 3. printing the arithmetic average
console.log(average);

let message1 = "The value of the arithmetic average is greater than 20";
let message2 =
  "The value of the arithmetic average is less than or equal to 20";

// 4. printing a different message for different average values
average > 20 ? console.log(message1) : console.log(message2);

// 5. printing the greatest number of numbers array
console.log(greatestNumber);

// 6. printing odd numbers count
oddCount ? console.log(oddCount) : console.log("No odd values found");
