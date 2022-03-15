const express = require("express");
const PORT = 8080;
const app = express();
const socket = require("socket.io")
const server = app.listen(PORT, ()=>{
    console.log("App is listening to port")
})


app.use(express.static("public"))

const io = socket(server);

io.on("connection", (socket)=>{
    socket.on("chat", function(data){
        io.sockets.emit("chat", data)
    })

    socket.on("typing", (data)=>{
        socket.broadcast.emit("typing", data)
    })
    console.log("socket connection achieved with id",   socket.id );
})