import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core/";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment";

const Post = ({ post }) => {
  return (
    <Card>
      <CardMedia title={post.title} />
      <div>
        <Typography variant="body2" color="textSecondary" component="h2">
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>

        <div>
          <Button size="small" onClick={() => {}}>
            <MoreHorizIcon fontSize="default" />
          </Button>
        </div>
      </div>

      <div>
        <Typography variant="h5" component="h2">
          {post.title}
        </Typography>

        <Typography variant="h6">{post.applyby}</Typography>
      </div>

      <div>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.message}
        </Typography>

        <Typography variant="body2" color="textSecondary" component="p">
          {post.link}
        </Typography>
      </div>

      <CardActions>
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
