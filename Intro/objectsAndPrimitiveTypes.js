//Reference types - objects, arrays and functions

//Object
const person = {
    name: "Jeppe", //Key value pair
    age: 25,
    height: 1.96
};
console.log(person);

//Dot notation in object
person.name = "Peter";
console.log(person);
//Bracket notation
person["name"] = "Carl";
console.log(person);

//Assigning key to variable
let selection = "name";
person[selection] = "Martin";
console.log(person);

//Primitive types
let otherName = "Carl"; //String literal
let age = 30; //Number literal
let isApproved = true; //Boolean literal
let animalName; //Undefined

//Check type of variable
console.log(typeof age);
console.log(typeof isApproved);
//JavaScript