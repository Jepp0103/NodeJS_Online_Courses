//Encapsulation
let animal = {
    name: "Elephant",
    age: 50,
    type: "Mammal", 
    getAnimal: function() {
        return this.name + " " + this.age + " " + this.type;
    }
};

console.log(animal.getAnimal());