//!====Coding Challenge: Simple Calculator===
//const add = function add(a,b){
// let results = a + b ;
//  return results;
//}

//console.log(add(10,2));
//ADDITION
/*const add = (a,b) => {
  let results = a + b ;
  return results;
};

//console.log(add(10,2)) 


//!SUBTRACTION
/*const subtract = (m,n)=>{
    let results = m - n;
    return results;
};
subtract(20,10); */

/*
//!MULTIPLY
const multiply = (m,n)=>{
  let results = m * n;
  return results;
}
console.log(multiply(20,10)); */

/* //!DIVISON
const division = (m,n)=>{
  let results = m/n;
  return results;
}
console.log(division(20,10));*/

//!====Coding Challenge: Character Counter Tool===

function characterCount(text){
  let length = text.length;
  return length;
}
const results = characterCount("JavaScript");


const txtToLowerCase = (text) =>{
  let lowercase = text.toLowerCase();
  return lowercase;
}
//console.log(txtToLowerCase("NODEJS"));


const txtToUpperCase = (text) =>{
  let uppercase = text.toUpperCase();
  return uppercase;
};

//console.log(txtToUpperCase("daniaadil"));

const slicedTxt = function (txt,start,end){
  let sliced = txt.slice(start,end);
  return sliced;
}
//console.log(slicedTxt("NestJS",0,2));

//!====Coding Challenge: String Formatter===
function formatString(str1,str2){
  let uppercaseStr1 = str1.toUpperCase();
  let lowercaseStr2 = str2.toLowerCase();
  let combined = uppercaseStr1 + " " + lowercaseStr2;
  return combined;
}
//console.log(formatString("Hello","WORLD"));

//! ====CODING CHALLENGE : BMI CALCULATOR
const calculateBMI = (weight, height) => {
  let bmi = weight / (height * height);
  let status;
  if (bmi < 18.5) {
    status = "Underweight";
  } else if (bmi < 24.9) {
    status = "Normal Weight";
  } else if (bmi < 29.9) {
    status = "Overweight";
  } else {
    status = "Obese";
  }

  return status;
};

//console.log(calculateBMI(6, 1.75));

//!====Coding Challenge: Student Grading System===
//- Description: Create a simple application that accepts student marks, calculates if the student has passed, failed, or performed exceptionally based on the defined criteria.
//  - Features:
//   - Input for total possible marks and marks obtained.
//   - Calculate if the student has passed (≥ 50%).
//   - Calculate if the student performed exceptionally (≥ 80%).
//   - Compare the student's marks against the class average.
//   - Display results in a user-friendly format.

function studentGradingSystem(totalMarks, obtainedMark, classAverage) {
  let passingCriteria = totalMarks * 0.5; //50%;
  let exceptionalCriteria = totalMarks * 0.8; //80%;
  let hasPassed = obtainedMark >= passingCriteria;
  let hasPerformedExceptionally = obtainedMark >= exceptionalCriteria;
  let isAboveAverage = obtainedMark > classAverage;

  return {
    hasPassed,
    hasPerformedExceptionally,
    isAboveAverage,
  };
}

const results2 = studentGradingSystem(500, 410, 350);
