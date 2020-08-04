const express = require("express");
const app = express();
const messageServer = require("http").Server(app);
const server = require("socket.io")(messageServer);

const fs = require("fs");

app.get("/", (req, res) => {
    const testPage = fs.readFileSync("./public/index.html", "utf-8");
    res.send(testPage);
});


server.on('connection', function(socket) {
    console.log('A user connected');
 
    //Send a message after a timeout of 4seconds
       //Send a message when 
    setTimeout(function() {
    //Sending an object when emmiting an event
    socket.emit('testerEvent', { description: 'A custom event named testerEvent!'});
 }, 4000);


 
    socket.on('disconnect', function () {
       console.log('A user disconnected');
    });
 });



const port = 3000;

messageServer.listen(port, (error) => {
    if (error) {
        console.log("Can't connect");
    } else {
        console.log("Port running on port", port);
    }
});


