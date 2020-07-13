function gradingStudents(grades) {
  let answerArray = [];

  grades.forEach(grade => {

    if (grade > 37) {

      if (grade%5 >= 3) {
        let Y = Math.floor(grade / 5);
        // console.log(Y);
        Y = Y + 1;
        answerArray.push(Y*5);
      } else {
        answerArray.push(grade);
      }

    } else {
      answerArray.push(grade);
    }

    // return answerArray;

  });
  console.log(answerArray);
  return answerArray;
};


gradingStudents([33, 41, 44, 53, 58])
