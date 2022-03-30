import React, { useState, useEffect } from "react";
import { Container, Typography, Grow, Grid, Paper } from "@material-ui/core";
import { useDispatch } from "react-redux";
import useStyles from './styles';

import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import Pagination from "../Pagination";
import { getPosts } from "../../actions/posts";

const Home = () => {
  const classes = useStyles();

  const [currentId, setCurrentId] = useState(null);

  // const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId][dispatch]);

  return (
    <Grow in>
      <Container>
        <Grid
          container
          justify="space-between"
          alignItems="stretch"
          spacing="{3}"
        >
          <Grid item xs={12} sm={7}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
            <Paper className={classes.pagination} elevation={6}>
              <Pagination  />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
