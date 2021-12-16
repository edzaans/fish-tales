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
const postSchema = new Schema(
  {
    name: String,
    location: String,
    weight: Number,
    length: Number,
    lure: String,
    comment: Array,
    date: String,
    image: String,
    url: [String],
  },
  { timestamps: true }
);

// Define new model in DB
const PostModel = mongoose.model("post", postSchema);

//****************** GET REQUESTS ********************/
// App listens to GET REQUESTS
app.get("/api/posts", (req, res) => {
  // Log to see what got returned
  console.log("Data requested came back OK from server");
  PostModel.find((err, data) => {
    res.json(data);
    if (err) {
      console.log("No posts found");
    }
  });
});

// Listen for GET to search form entries in DB
app.get("/api/posts/:id", (req, res) => {
  console.log(req.params.id);
  // Checks DB with requested ID
  PostModel.findById(req.params.id, (err, data) => {
    // Send back data
    res.json(data);
    // Check if there are any errrs and display them
    if (err) {
      console.log("No posts....check your passed params!!!!");
    }
  });
});

//*******************EDIT REQUEST********************/
// Edit a Record
app.put("/api/posts/:id", (req, res) => {
  console.log("Update post : " + req.params.id);
  console.log(req.body);

  PostModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, data) => {
      res.send(data);
    }
  );
});

//***************** DELETE REQEST*******************/
// Delete a record
app.delete("/api/posts/:id", (req, res) => {
  console.log("Deleting:" + req.params.id);

  // Set DB query with data what top delete
  PostModel.deleteOne({ _id: req.params.id }, (err, data) => {
    if (err) {
      res.send(err);
    }
    res.send(data);
  });
});

//*************** POST REQUESTS*******************/
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
    date: req.body.date,
    url: req.body.url,
    /* file: req.body.file, */
  });

  // Prevents duplication of entries to DB
  res.send("Item Added");
});

// Set listen method for Debugging in console
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
