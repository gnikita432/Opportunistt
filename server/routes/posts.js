import express from "express";

import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  likePost,
} from "../controllers/Posts.js";

const router = express.Router();

//Localhost:5000/posts
// router.get("/", (req, res) => {
//   res.send("This works!");
// });

router.get("/", getPosts);
router.post("/", createPost);
router.patch("/:id", updatePost); //patch is used for updating
router.delete("/:id", deletePost);
router.patch("/:id/likePost", likePost);
export default router;
