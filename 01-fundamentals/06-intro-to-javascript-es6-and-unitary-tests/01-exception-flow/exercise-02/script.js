// 1. write a function that receives, as parameters, 4 values ​​of type number. If the value received as a parameter is not of type number, throw an exception
const checkGrades = (grade1, grade2, grade3, grade4) => {
  if (isNaN(grade1) || isNaN(grade2) || isNaN(grade3) || isNaN(grade4))
    throw new Error("Values must all be numeric");
};

const mean = (grade1, grade2, grade3, grade4) => {
  try {
    checkGrades(
      parseInt(grade1),
      parseInt(grade2),
      parseInt(grade3),
      parseInt(grade4),
    );
    return grade1 + grade2 + grade3 + grade4 / 4;
  } catch (error) {
    console.log(error.message);
  }
};
