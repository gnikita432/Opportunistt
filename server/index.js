import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

// this 👆 instead of const express=require('express'); for importing (mordern nd easier to use) you can enable it by going to package.json and one line bellow main that is type:module.

import postRoutes from "./routes/posts.js";

const app = express();

app.use(express.json({ limit: "25mb", extended: true }));
app.use(express.urlencoded({ limit: "25mb", extended: true }));
// app.use(bodyParser.json({limit:"25mb", extended:true}));
app.use(cors());

app.use("/posts", postRoutes);

const CONNECTION_URL =
  "mongodb+srv://Nikita:Nikita@cluster0.ps0ma.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`server running on port Successfuly ${PORT}`)
    )
  )
  .catch((error) => console.log(error.message));

mongoose.set("useFindAndModify", false); //not imp only for not getting warnings
