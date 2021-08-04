import express from "express";

import { getPosts, createPost} from "../controllers/Posts.js";

const router = express.Router();

//Localhost:5000/posts
// router.get("/", (req, res) => {
//   res.send("This works!");
// });

router.get("/", getPosts);
router.post("/", createPost);

export default router;
