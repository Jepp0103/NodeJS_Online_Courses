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
