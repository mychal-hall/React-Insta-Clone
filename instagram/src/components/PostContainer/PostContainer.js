import React from "react";
import PropTypes from "prop-types";

import "./PostContainer.css";
import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";
import CommentSection from "../CommentSection/CommentSection";

function PostContainer(props) {
  return (
    <>
      {props.data.map(data => (
        <div className="post">
          <PostHeader src={data.thumbnailUrl} username={data.username} />
          <img
            className="dataImage"
            src={data.imageUrl}
            alt="A post by {data.username}"
          />
          <PostFooter incrementLike={props.incrementLike} likes={data.likes} />
          <CommentSection comments={data.comments} />
        </div>
      ))}
    </>
  );
}

PostContainer.propTypes = {
  data: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string,
    comments: PropTypes.arrayOf(PropTypes.object)
  })
};

export default PostContainer;
