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

//Arrow add numbers
const arrowAddNumbers = (num1, num2) => num1 + num2;

console.log("arrow add", arrowAddNumbers(2, 2));


//Arrow add numbers
const arrowAddNumbersPre = (num1 = 4, num2 = 4) => num1 + num2;

console.log("arrow add pre", arrowAddNumbersPre());

const tasks = [
    {
        id: 1,
        text: "Shopping",
        taskDone: false
    },
    {
        id: 2,
        text: "Cleaning",
        taskDone: true
    },
    {
        id: 3,
        text: "Eating",
        taskDone: false
    }
]


tasks.forEach((task) => console.log("tasks!", task));


const addTwoStrings = function(str1, str2) {
    return str1 + " med " + str2;
}

const addTwoStringsArrow = (str1, str2) => str1 + " med " + str2;

console.log("not arrow strings", addTwoStrings("Hej", "dig"));
console.log("arrow strings", addTwoStringsArrow("Hej", "dig"));

