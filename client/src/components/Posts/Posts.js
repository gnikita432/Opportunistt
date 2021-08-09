import React from "react";
import { useSelector } from "react-redux";
import { CircularProgress, Grid } from "@material-ui/core";
import Post from "./Post/Post";

const Posts = () => {
  const posts = useSelector((state) => state.posts);

  console.log(posts);

  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid container alignItems="strech" spacing="3">
      {posts.map((post) => (
        <Grid key={post._id} item xs={12}>
          <Post post={post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
