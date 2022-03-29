import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

// this 👆 instead of const express=require('express'); for importing (mordern nd easier to use) you can enable it by going to package.json and one line bellow main that is type:module.

import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";

const app = express();
dotenv.config();

app.use(express.json({ limit: "25mb", extended: true }));
app.use(express.urlencoded({ limit: "25mb", extended: true }));
// app.use(bodyParser.json({limit:"25mb", extended:true}));
app.use(cors());

app.use("/posts", postRoutes);
app.use("/user", userRoutes);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`server running on port Successfuly ${PORT}`)
    )
  )
  .catch((error) => console.log(error.message));

mongoose.set("useFindAndModify", false); //not imp only for not getting warnings
