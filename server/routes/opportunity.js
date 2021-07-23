import express from "express";

const router = express.Router();

//Localhost:5000/opportunity
router.get("/", (req, res) => {
  res.send("This works!");
});

export default router;
