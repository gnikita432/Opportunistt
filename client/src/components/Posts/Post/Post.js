import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Link,
} from "@material-ui/core/";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment";

import useStyles from "./styles";

const Post = ({ post }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia title={post.title} />
      <div className={classes.grid1}>
        <Typography variant="body2" color="textSecondary" component="h2">
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>

        <div>
          <Button size="small" onClick={() => {}}>
            <MoreHorizIcon fontSize="default" />
          </Button>
        </div>
      </div>

      <div className={classes.grid2}>
        <Typography className={classes.title} variant="h5" component="h2">
          {post.title}
        </Typography>
        <Typography variant="subtitle1">{`Apply By: ${post.applyby}`}</Typography>
      </div>

      <div style={{ marginBottom: "10px" }}>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.message}
        </Typography>
      </div>
      <Button
        style={{ width: "20%" }}
        variant="outlined"
        type="submit"
        color="primary"
        href=""
      >
        Apply
      </Button>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={() => {}}>
          <ThumbUpAltIcon fontSize="small" /> Like {post.likeCount}{" "}
        </Button>

        <Button size="small" color="primary" onClick={() => {}}>
          <DeleteIcon fontSize="small" /> Delete
        </Button>

        <Typography
          variant="body2"
          component="p"
        >{`Posted by: ${post.creator}`}</Typography>

        <Typography variant="body2" color="textSecondary">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </CardActions>
    </Card>
  );
};

export default Post;
