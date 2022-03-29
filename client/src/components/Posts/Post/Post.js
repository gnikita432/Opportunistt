import React from "react";
import {
  Card,
  CardActions,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core/";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbUpAltOutlined from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment";
import useStyles from "./styles";
import { useDispatch } from "react-redux";

import { deletePost, likePost } from "../../../actions/posts";

const user = JSON.parse(localStorage.getItem("profile"));

const Post = ({ post, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const Likes = () => {
    if (post.likes.length > 0) {
      return post.likes.find(
        (like) => like === (user?.result?.googleId || user?.result?._id)
      ) ? (
        <>
          <ThumbUpAltIcon fontSize="small" />
          &nbsp;
          {post.likes.length > 2
            ? `You and ${post.likes.length - 1} others`
            : `${post.likes.length} like${post.likes.length > 1 ? "s" : ""}`}
        </>
      ) : (
        <>
          <ThumbUpAltOutlined fontSize="small" />
          &nbsp;{post.likes.length} {post.likes.length === 1 ? "Like" : "Likes"}
        </>
      );
    }

    return (
      <>
        <ThumbUpAltOutlined fontSize="small" />
        &nbsp;Like
      </>
    );
  };

  return (
    <Card className={classes.card}>
      <CardMedia title={post.title} />
      <div className={classes.grid1}>
        <Typography variant="body2" color="textSecondary" component="h2">
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
        {(user?.result?.googleId === post?.creator ||
          user?.result?._id === post?.creator) && (
          <div>
            <Button size="small" onClick={() => setCurrentId(post._id)}>
              <MoreHorizIcon fontSize="default" />
            </Button>
          </div>
        )}
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
        href={post.link}
      >
        Apply
      </Button>
      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          color="primary"
          disabled={!user?.result}
          onClick={() => dispatch(likePost(post._id))}
        >
          {/* <ThumbUpAltIcon fontSize="small" /> Like {post.likeCount}{" "} */}
          <Likes />
        </Button>
        {(user?.result?.googleId === post?.creator ||
          user?.result?._id === post?.creator) && (
          <Button
            size="small"
            color="primary"
            onClick={() => dispatch(deletePost(post._id))}
          >
            <DeleteIcon fontSize="small" /> Delete
          </Button>
        )}

        <Typography
          variant="body2"
          component="p"
        >{`Posted by: ${post.name}`}</Typography>

        <Typography variant="body2" color="textSecondary">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </CardActions>
    </Card>
  );
};

export default Post;
