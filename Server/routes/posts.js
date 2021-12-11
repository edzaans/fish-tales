// Import Express framework
import express from "express";
// Import functions from controllers
import { getPosts } from "../controllers/posts.js";
// Declare router
const router = express.Router();

// Set access point for testing ( http://localhost:4000/posts )
router.get("/", getPosts);

export default router;
