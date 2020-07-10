const square = function(number) {
    return number * number;
}

const arrowSquare = number => number * number; //Arrow function

console.log(square(5));

console.log(arrowSquare(5));


//Array
const jobs = [
    { id: 1, isActive: true, 
      id: 2, isActive: true, 
      id: 3, isActive: true},
];

jobs.filter(function(job) {});


//Active jobs
const activeJobs = jobs.filter(function(job) {
    return job.isActive; 
});

const activeJobsArrow = jobs.filter(job => job.isActive);

//String 
const doubleStringExample = function(str) {
    return str + " " + str;
}

const doubleStringExampleArrow = str => str + " " + str;

console.log(doubleStringExample("Hello"));
console.log(doubleStringExampleArrow("Hello"));



//division
const divide = function(number, secondNumber) {
    return number / secondNumber;
};

const divideArrow = (number, secondNumber) => number / secondNumber; //Paranthese for more than one parameter


console.log(divide(20, 5));
console.log(divideArrow(20, 5));