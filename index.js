const express = require('express');
const app = express();
const { Server } = require("socket.io");
const http = require("http");
const server = http.createServer(app);
const io = new Server(server);
const port = 5000;

app.get("/",(req, res) =>{
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) =>{
  socket.on("sendname",(username)=>{
    io.emit("sendname", (username));
  });

  socket.on("sendmessage",(chat)=>{
    io.emit("sendnamemessage", (chat));
  });

});

server.listen(port, ()=>{
  console.log(`Server is running http://localhost:${port}`);
});
