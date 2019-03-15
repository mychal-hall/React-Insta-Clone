import React from "react";

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
          <PostFooter likes={data.likes} />
          <CommentSection comments={data.comments} />
        </div>
      ))}
    </>
  );
}

export default PostContainer;
