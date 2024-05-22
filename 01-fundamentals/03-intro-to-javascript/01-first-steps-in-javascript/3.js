// greatest of three numbers
let num1 = 4,
  num2 = 5,
  num3 = 6;

let biggest = num1 > num2 ? num1 : num2;
biggest = biggest > num3 ? biggest : num3;

console.log(biggest);
