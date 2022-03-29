
const express = require("express");
const { dbconnection } = require("./config/db");
const { PORT,NODE_ENV } = require("./config");
const app = express();
const morgan=require("morgan")
const cors = require("cors");
const postRoute = require("./routes/students");

let startServer = async () => {
  //database connection starts here
  dbconnection();
  //database connection ends here

  app.use(express.json());
  app.use(cors());

  if(NODE_ENV==="development"){
      app.use(morgan("dev"))
  }
  //load route start here
  app.use("/api/students/", postRoute);
  //load route end here

  //listen the port
  app.listen(PORT, (err) => {
    if (err) throw err;
    console.log("app is running at port number" + PORT);
  });
};

startServer();
