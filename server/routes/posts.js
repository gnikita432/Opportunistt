import express from "express";

import { getPosts, createPost, updatePost } from "../controllers/Posts.js";

const router = express.Router();

//Localhost:5000/posts
// router.get("/", (req, res) => {
//   res.send("This works!");
// });

router.get("/", getPosts);
router.post("/", createPost);
router.patch("/:id", updatePost); //patch is used for updating

export default router;
