const express = require("express");
const mongoose = require("mongoose");
const BasicRouter = require("./routes/basic.routes");
const server = express();
//import router

server.use(express.json());
server.use(express.urlencoded({extended:false}))

//to use a basic route in app.js we will use method called as 'use'
//heree "use" is a middlewear
//middleweaer are use to add / inject the functionality in your application
server.use("/api", BasicRouter);

const PORT = 5566;

//starting servers we need db connectivity
let URI = "mongodb://127.0.0.1:27017/node_1020";
mongoose
  .connect(URI)
  .then(() => {
    console.log("db connected !!!");
    server.listen(PORT, () => {
      console.log("server is running on port", PORT);
    });
  })
  .catch(() => {
    process.exit(1);
    //stop the server
  });
