import express from "express";

import { getOpportunities , createOpp } from "../controllers/opportunities.js";

const router = express.Router();

//Localhost:5000/opportunity
// router.get("/", (req, res) => {
//   res.send("This works!");
// });

router.get("/", getOpportunities);
router.post("/", createOpp);

export default router;
