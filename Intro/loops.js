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

console.log(tasks[2].text);

for(let i = 0; i < tasks.length; i++) {
    if (tasks[i].text == "Cleaning") {
        console.log("Id: ", tasks[i].id);
    }
}


//For of
for (let task of tasks) {
    console.log(task.text);
}

let i = 0;
while(i < tasks.length) {
    if (tasks[i].id == 1) {
        console.log("While taskdone boolean: ", tasks[i].taskDone);
    }
    i++;
}


//Foreach, map, filter
const tasksDone = tasks.filter(function(task) {
    return task.taskDone === false;
});

console.log("All tasks texts", tasksDone);