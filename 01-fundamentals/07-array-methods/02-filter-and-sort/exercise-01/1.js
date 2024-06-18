// 1. the people object array contains elements that represent people with the name and age properties; use the filter method to filter people who are aged 30 or over
const people = [
  { name: "João", age: 25 },
  { name: "Maria", age: 30 },
  { name: "Pedro", age: 20 },
  { name: "Ana", age: 35 },
];

const peopleOver30YearsOld = people.filter((person) => person.age >= 30);
