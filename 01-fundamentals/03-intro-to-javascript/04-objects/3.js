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

// 1. create a function that obtains the value of the key according to its position in the array; this function must have two parameters: the object and the position in the array
const retrieveKeys = (object, index) => Object.values(object)[0][index];

// 2. create a function that returns the sum of the total number of students across all courses
const getTotalStudentNumber = (object) => {
  let sum = 0;
  let coursesArray = Object.values(object)[0];

  for (let index = 0; index < coursesArray.length; index += 1) {
    sum += coursesArray[index].students;
  }

  return sum;
};

// 3. create a function that checks whether a given key exists in all elements of the lessons array; the return must be a boolean (true or false); this function must have two parameters: the object and the key name
const verifyKey = (object, key) => {
  let coursesArray = Object.values(object)[0];

  for (let index = 0; index < coursesArray.length; index += 1) {
    if (coursesArray[index][key] === undefined) return false;
  }

  return true;
};

// 4. create a function to change the shift to night in the python course; this function must have three parameters: the database to be modified, the course name and the new key value
const changeShift = (database, course, shift) => {
  let coursesArray = Object.values(database)[0];

  for (let index = 0; index < coursesArray.length; index += 1) {
    if (coursesArray[index].course === course)
      coursesArray[index].shift = shift;
  }
};
