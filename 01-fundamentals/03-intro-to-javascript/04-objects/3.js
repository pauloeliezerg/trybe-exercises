const school = {
  lessons: [
    {
      course: "Python",
      students: 20,
      professor: "Carlos Patrício",
      shift: "Manhã",
    },
    {
      course: "Kotlin",
      students: 10,
      professor: "Gabriel Oliva",
      shift: "Noite",
    },
    {
      course: "JavaScript",
      students: 738,
      professor: "Gustavo Caetano",
      shift: "Tarde",
    },
    {
      course: "MongoDB",
      students: 50,
      shift: "Noite",
    },
  ],
};

// exercise 1
const retrieveKeys = (object, index) => Object.values(object)[0][index];

// exercise 2
const getTotalStudentNumber = (object) => {
  let sum = 0;
  let coursesArray = Object.values(object)[0];

  for (let index = 0; index < coursesArray.length; index += 1) {
    sum += coursesArray[index].students;
  }

  return sum;
};

// exercise 3
const verifyKey = (object, key) => {
  let coursesArray = Object.values(object)[0];

  for (let index = 0; index < coursesArray.length; index += 1) {
    if (coursesArray[index][key] === undefined) return false;
  }

  return true;
};

// exercise 4
const changeShift = (database, course, shift) => {
  let coursesArray = Object.values(database)[0];

  for (let index = 0; index < coursesArray.length; index += 1) {
    if (coursesArray[index].course === course)
      coursesArray[index].shift = shift;
  }
};
