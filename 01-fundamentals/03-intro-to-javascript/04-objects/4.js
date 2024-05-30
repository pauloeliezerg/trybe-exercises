const basket = [
  "Melancia",
  "Abacate",
  "Melancia",
  "Melancia",
  "Uva",
  "Laranja",
  "Jaca",
  "Pera",
  "Melancia",
  "Uva",
  "Laranja",
  "Melancia",
  "Banana",
  "Uva",
  "Pera",
  "Abacate",
  "Laranja",
  "Abacate",
  "Banana",
  "Melancia",
  "Laranja",
  "Laranja",
  "Jaca",
  "Uva",
  "Banana",
  "Uva",
  "Laranja",
  "Pera",
  "Melancia",
  "Uva",
  "Jaca",
  "Banana",
  "Pera",
  "Abacate",
  "Melancia",
  "Melancia",
  "Laranja",
  "Pera",
  "Banana",
  "Jaca",
  "Laranja",
  "Melancia",
  "Abacate",
  "Abacate",
  "Pera",
  "Melancia",
  "Banana",
  "Banana",
  "Abacate",
  "Uva",
  "Laranja",
  "Banana",
  "Abacate",
  "Uva",
  "Uva",
  "Abacate",
  "Abacate",
  "Melancia",
  "Uva",
  "Jaca",
  "Uva",
  "Banana",
  "Abacate",
  "Banana",
  "Uva",
  "Banana",
  "Laranja",
  "Laranja",
  "Jaca",
  "Jaca",
  "Abacate",
  "Jaca",
  "Laranja",
  "Melancia",
  "Pera",
  "Jaca",
  "Melancia",
  "Uva",
  "Abacate",
  "Jaca",
  "Jaca",
  "Abacate",
  "Uva",
  "Laranja",
  "Pera",
  "Melancia",
  "Jaca",
  "Pera",
  "Laranja",
  "Jaca",
  "Pera",
  "Melancia",
  "Jaca",
  "Banana",
  "Laranja",
  "Jaca",
  "Banana",
  "Pera",
  "Abacate",
  "Uva",
];

// using the fruit array called basket, create an object that contains the name of the fruit as a key and the number of times it appears in the array as a value; then, print this result on the screen with a message in the following format: Your basket has: x Melancias, x Abacates...
const generateFruitDict = (array) => {
  const fruitDict = {};
  let fruitString = "Your basket has: ";

  for (let indexArray = 0; indexArray < array.length; indexArray += 1) {
    for (let indexBasket = 0; indexBasket < basket.length; indexBasket += 1) {
      if (basket[indexBasket] === array[indexArray])
        fruitDict[array[indexArray]]
          ? (fruitDict[array[indexArray]] += 1)
          : (fruitDict[array[indexArray]] = 1);
    }
  }

  for (let index = 0; index < Object.keys(fruitDict).length; index += 1) {
    fruitString += `${index ? ", " : ""}${Object.values(fruitDict)[index]} ${
      Object.keys(fruitDict)[index]
    }`;
  }

  return fruitString;
};
