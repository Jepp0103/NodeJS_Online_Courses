const animal = { name: "Jaguary", age: 25, weight: 60};

const animalOwner = { name: "Jeppe", age: 25, height: 90};

const pair = {...animal, location: "Denmark", ...animalOwner}

console.log(pair);