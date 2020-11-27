let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let lastIndex = (numbers.length)-1;
let biggestValue = numbers[0];
let smallestValue = numbers[0];
let oddsCount = 0;
let oneToTwentyFive = [];
let oneToTwentyFiveDividedByTwo = [];

for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]);
    sum += numbers[index];
    if (biggestValue < numbers[index]) biggestValue = numbers[index];
    if (smallestValue > numbers[index]) smallestValue = numbers[index];
    if (numbers[index]%2 != 0) oddsCount += 1;
}

let average = sum/numbers.length;

console.log(sum);

console.log(average);

if(numbers[lastIndex] > 20) console.log('Valor maior que 20');
else console.log('Valor menor ou igual a 20');

console.log(biggestValue);

if(!oddsCount) console.log('Nenhum valor ímpar encontrado');
else console.log(oddsCount);

console.log(smallestValue);

for (let index = 0; index < 25; index += 1) {
    oneToTwentyFive[index] = index+1;
    oneToTwentyFiveDividedByTwo[index] = (index+1)/2;
}
console.log(oneToTwentyFive);
console.log(oneToTwentyFiveDividedByTwo);

numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1) {
    for (let secundaryIndex = 0; secundaryIndex < index; secundaryIndex += 1) {
        if(numbers[index] < numbers[secundaryIndex]) {
            let aux = numbers[index];
            numbers[index] = numbers[secundaryIndex];
            numbers[secundaryIndex] = aux;
        }
    }
}

console.log(numbers);

numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1) {
    for (let secundaryIndex = 0; secundaryIndex < index; secundaryIndex += 1) {
        if(numbers[index] > numbers[secundaryIndex]) {
            let aux = numbers[index];
            numbers[index] = numbers[secundaryIndex];
            numbers[secundaryIndex] = aux;
        }
    }
}

console.log(numbers);

numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let arrayInnerMultiplication = [];

for (let index = 0; index < numbers.length; index += 1) {
    if(numbers[index+1]) arrayInnerMultiplication.push(numbers[index] * numbers[index+1]);
    else arrayInnerMultiplication.push(numbers[index] * 2);
}

console.log(arrayInnerMultiplication);