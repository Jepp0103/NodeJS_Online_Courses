const express = require("express");
const Joi = require("joi"); //returning a class
const app = express();


//Middleware
app.use(express.json());

let courses = [ 
    { id: 1, name: "Math" },
    { id: 2, name: "English" },
    { id: 3, name: "Gym" },
    { id: 4, name: "Music" }
];


app.get("/api/courses", (req, res) => {
    res.send(courses);
});

app.get("/api/courses/:id", (req, res) => {
    let course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) //404 object not found
        res.status(404).send("The course with the given id was not found");
    else 
        res.send(course);
});

app.post("/api/courses", (req, res) => {
    const { error } = validateCourse(req.body); //error property - equivalent to result.error

    if (error) { //Object destructering
        res.status(400).send(result.error.details[0].message);
        return;
    }

    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

app.put("/api/courses/:id", (req, res) => {
    //Look up the course 
    let course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) //404 object not found
        res.status(404).send("The course with the given id was not found");

    const result = validateCourse(req.body);
    const { error } = validateCourse(req.body); //error property - equivalent to result.error

    //If not existing, return 404
    if (error) { //Object destructering
        res.status(400).send(result.error.details[0].message);
        return;
    }

    //Updating the course
    course.name = req.body.name;
    res.send(course);
});

app.delete("/api/courses/:id", (req, res) => {
    courses = courses.filter(course => course.id !== parseInt(req.params.id));
    return res.send({ response: courses })    
});

//Validate
function validateCourse(course) {
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });
    return schema.validate(course);
}

const port = process.env.PORT || 3000;
app.listen(port, () => { console.log(`Listening on port ${port}...`);
});


let fruits =  [
    {
        id: 1,
        name: "Banana",
        color: "Yellow",
        size: "Small"
    }, 
    {
        id: 2,
        name: "Water melon",
        color: "Green",
        size: "Big"
    },
    {
        id: 3,
        name: "Apple",
        color: "Red",
        size: "Small"
    }
]

app.get("/api/fruits", (req, res) => {
    res.send(fruits);
});

app.get("/api/fruits/:id", (req, res) => {
    let specificFruit = fruits.find(fruit => fruit.id === parseInt(req.params.id));
    res.send(specificFruit);
});

app.post("/api/fruits", (req, res) => {
    let fruit = {
        id: fruits.length + 1,
        name: req.body.name,
        color: req.body.color,
        size: req.body.size
    };

    fruits.push(fruit);

    res.send(fruit);
});

app.put("/api/fruits/:id", (req, res) => {
    let fruit = fruits.find(fruit => fruit.id === parseInt(req.params.id));

    console.log(fruit);

    fruit.name = req.body.name;
    fruit.color = req.body.color;
    fruit.size = req.body.size;

    res.send(fruit);
});

app.delete("/api/fruits/:id", (req, res) => {
    fruits = fruits.filter(fruit => fruit.id !== parseInt(req.params.id)); //Not equal to the parameter id
    res.send(fruits);
});


let dishes = [
    {
        id: 1,
        name: "Spaghetti bolognese",
        price: "50 DKK",
        warm: true
    },
    {
        id: 2,
        name: "Hamburger",
        price: "100 DKK",
        warm: true
    },
    {
        id: 3,
        name: "Ice cream",
        price: "25 DKK",
        warm: false
    }
]

app.get("/dishes", (req, res) => {
    res.send(dishes);
});

app.get("/dishes/:id", (req, res) => {
    let dish = dishes.find(d => d.id === parseInt(req.params.id));
    res.send(dish);
});

app.post("/dishes", (req, res) => {
    let newDish = {
        id: dishes.length + 1,
        name: req.body.name, 
        price: req.body.price,
        warm: req.body.warm
    };

    dishes.push(newDish);

    res.send(dishes);
});

app.put("/dishes/:id", (req, res) => {
    let dish = dishes.find(d => d.id === parseInt(req.params.id));

    dish.name = req.body.name;
    dish.price = req.body.price;
    dish.warm = req.body.warm;

    res.send(dish);
});

app.delete("/dishes/:id", (req, res) => {
    dishes = dishes.filter(d => d.id !== parseInt(req.params.id));
    res.send(dishes);
});