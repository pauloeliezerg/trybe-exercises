// 1. make a function that adds all even numbers from the numbers array using reduce
const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const sumOfEven = numbers.reduce((sum, number) => {
  const currentIfEven = number % 2 === 0 ? number : 0;
  return sum + currentIfEven;
}, 0);

// 2. create a function using student data to display a report on the screen that tells you which subject the person was best at; you will use both map and reduce within it
const students = [
  {
    name: "Jorge",
    lastName: "Silva",
    age: 14,
    turn: "Manhã",
    courses: [
      { name: "Matemática", grade: 67 },
      { name: "Português", grade: 79 },
      { name: "Química", grade: 70 },
      { name: "Biologia", grade: 65 },
    ],
  },
  {
    name: "Mario",
    lastName: "Ferreira",
    age: 15,
    turn: "Tarde",
    courses: [
      { name: "Matemática", grade: 59 },
      { name: "Português", grade: 80 },
      { name: "Química", grade: 78 },
      { name: "Biologia", grade: 92 },
    ],
  },
  {
    name: "Jorge",
    lastName: "Santos",
    age: 15,
    turn: "Manhã",
    courses: [
      { name: "Matemática", grade: 76 },
      { name: "Português", grade: 90 },
      { name: "Química", grade: 70 },
      { name: "Biologia", grade: 80 },
    ],
  },
  {
    name: "Maria",
    lastName: "Silveira",
    age: 14,
    turn: "Manhã",
    courses: [
      { name: "Matemática", grade: 91 },
      { name: "Português", grade: 85 },
      { name: "Química", grade: 92 },
      { name: "Biologia", grade: 90 },
    ],
  },
  {
    name: "Natalia",
    lastName: "Castro",
    age: 14,
    turn: "Manhã",
    courses: [
      { name: "Matemática", grade: 70 },
      { name: "Português", grade: 70 },
      { name: "Química", grade: 60 },
      { name: "Biologia", grade: 50 },
    ],
  },
  {
    name: "Wilson",
    lastName: "Martins",
    age: 14,
    turn: "Manhã",
    courses: [
      { name: "Matemática", grade: 80 },
      { name: "Português", grade: 82 },
      { name: "Química", grade: 79 },
      { name: "Biologia", grade: 75 },
    ],
  },
];

const getBestCourse = (bestCourse, currentCourse) =>
  currentCourse.grade >= bestCourse.grade ? currentCourse : bestCourse;

const studentsBestCourse = students.map(({ name, courses }) => ({
  name,
  course: courses.reduce(getBestCourse).name,
}));
