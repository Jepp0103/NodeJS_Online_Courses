//Performing a task
function greet(name, age) { //Name and age - parameter in method
    return "Name of person: " + name + ". Age of person:" + age;
}

//Calculating and returning a value
function square(number) {
    return number * number;
}

console.log(greet("Jeppe", 25)); //Argument - actual value added to the method
console.log(square(3));

function sayHello() {
    for (let i = 0; i < 5; i++) { //i not defined - with let only accessible inside the loop
        console.log(i);
    }

    console.log(i);
}

const x = 1; //can't be reassigned with const


sayHello();