// Add EXPRESS
const express = require("express");
// Assign body-parser to variable
const bodyParser = require("body-parser");
// Set app to run EXPRESS
const app = express();
// Declare PORT number for rerver to run on (separate from FrontEnd)
const port = 4000;
// Include Mongoose
const mongoose = require("mongoose");

// Add CORS
const cors = require("cors");
// Set app to use CORS
app.use(cors());
// Set up HEADERS to be used by CORS
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Mongoose connection
// Create varable that holds connection string MongoDB Atlas
const connectionString =
  "mongodb+srv://FishTales_Admin:FishTales_admin@cluster0.ytmtt.mongodb.net/FishTales?retryWrites=true&w=majority";
// Create a connection, pass in connection string
mongoose.connect(connectionString, { useNewUrlParser: true });

// Define Mongo Schema
const Schema = mongoose.Schema;
const postSchema = new Schema({
  name: String,
  location: String,
  weight: Number,
  length: Number,
  lure: String,
  comment: String,
  file: String,
});

// Define new model in DB
const PostModel = mongoose.model("post", postSchema);

//Listen to POST request
app.post("/api/posts", (req, res) => {
  // Log data passed to server
  console.log("New catch received");
  console.log(req.body.name);

  PostModel.create({
    name: req.body.name,
    location: req.body.location,
    weight: req.body.weight,
    length: req.body.length,
    lure: req.body.lure,
    comment: req.body.comment,
    file: req.body.file,
  });

  // Prevents duplication of entries to DB
  res.send("Item Added");
});

// Set listen method for Debugging in console
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
