import express from "express";

import {
  getPosts,
  getPostsBySearch,
  createPost,
  updatePost,
  likePost,
  deletePost,
} from "../controllers/posts.js";

const router = express.Router();
import auth from "../middleware/auth.js";

//Localhost:5000/posts
// router.get("/", (req, res) => {
//   res.send("This works!");
// });

router.get("/", getPosts);
router.get("/", getPosts);
router.post("/", auth, createPost);
router.patch("/:id", auth, updatePost);
router.delete("/:id", auth, deletePost);
router.patch("/:id/likePost", auth, likePost);

export default router;
