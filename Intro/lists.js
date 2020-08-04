let selectedColors = ["Blue", "Green", "Yellow", "Red"];
console.log(selectedColors);
console.log("Index 2:", selectedColors[1]);
//Changing index 4
selectedColors[3] = "Orange";
console.log(selectedColors);

let person = { 
    name: "Jeppe", 
    age: 25,
    hobbies: ["Programming", "Badminton", "Gaming"]
};
console.log(person);
console.log("Index 1 in hobbies: ", person.hobbies[0]);

selectedColors.splice(1,1);

console.log("green removed", selectedColors);