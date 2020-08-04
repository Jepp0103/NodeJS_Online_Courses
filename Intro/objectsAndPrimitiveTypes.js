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


//Object with different key value pairs and functions
const circle = {
    radius: 2,
    location: {
        x: 1,
        y: 3
    },
    draw: function() {
        return "Radius " + this.radius + " and location: " + this.location.x + ", " + this.location.y;
    }
};

console.log(circle.draw());


const circleNoPredefinedValues = {
    radius: 2,
    location: {
        x: 1,
        y: 3
    },
    draw: function() {
        return "Radius " + this.radius + " and location: " + this.location.x + ", " + this.location.y;
    }
};

//Factory function
function createCircle(radius) {
    return {
        radius,
        showRadius: function() {
            return "Radius " + this.radius;
        },
    };
}

const anotherCircle = createCircle(3);
console.log(anotherCircle.showRadius());


//Constructor function - because of this and new keywords.
function Circle(radius, name) {
    this.radius = radius;
    this.name = name;
    this.draw = function() {
        return "Name: " + name +  ", Radius: " + this.radius;
    }
}

const circleTwo = new Circle(1, "Small circle"); //New creating an empty object and then initialize a new one.
console.log(circleTwo.draw());

Circle.call({}, 1);

console.log("Constructor", circleTwo.constructor);

const personTwo = {
    name: "Carl",
    walk() {
        console.log("This", this);
    },
    talk() {}
};

personTwo.talk();
person.name = "";

const targetMember = "name";
person[targetMember.value] = "John";

console.log(personTwo);
console.log(personTwo.talk);

personTwo.walk();

const walk = personTwo.walk.bind(personTwo);
console.log("Walk object", walk());


const personHuman = {
    firstName: "Jeppe", 
    lastName: "Nannestad",
    hobbies: ["Programming", "Gaming", "Tennis"],
    address: {
        street: "Nørrebrogade",
        number: 66,
        city: "Copenhagen"
    }
}
personHuman.hobbies.push("Snowboarding");

console.log(personHuman);

console.log("Only street: ", personHuman.address.street);
console.log(personHuman.hobbies[2]);

//Pulling out elements from objects
const { firstName, lastName } = personHuman;

console.log(firstName, lastName);

