// Import Express framework
import express from "express";
// Import body parser
import bodyParser from "body-parser";
// Import mongoose to use with Mongo
import mongoose from "mongoose";
// Import Cors for cross origin access
import cors from "cors";
// import postRoutes from "postRoutes";
import postRoutes from "./routes/posts.js";
// ************************************** //

// ************************************** //
// Intialise app
const app = express();
// Set up starting point for all posts
app.use("/posts", postRoutes);
// Set app to use bodyparser and size limit for documents
app.use(bodyParser.json({ limit: "30mb", extended: true }));
// Set up bodyparser for requests
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
// Set app to use CORS
app.use(cors());

// Add connection URL to database
const CONNECTION_URL =
  "mongodb+srv://FishTales_Admin:FishTales_admin@cluster0.ytmtt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// Declare port  to be used for server
const PORT = process.env.PORT || 4000;
// ************************************** //

// ************************************** //
// Create mongoose connection
mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  // Promise data
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  // Error handling here
  .catch((err) => {
    console.log("Error : " + err.message);
  });
