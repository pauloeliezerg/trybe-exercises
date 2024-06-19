const people = [
  { name: "Mateus", age: 18 },
  { name: "José", age: 16 },
  { name: "Ana", age: 23 },
  { name: "Cláudia", age: 20 },
  { name: "Bruna", age: 19 },
];

// 1. use type to sort the matrix by people's ages in ascending order

const peopleInAscendingOrder = people.sort((a, b) => a.age - b.age);

// 2. modify the sort from the previous exercise so that it sorts the array by people's ages in descending order

const peopleInDescendingOrder = people.sort((a, b) => b.age - a.age);
