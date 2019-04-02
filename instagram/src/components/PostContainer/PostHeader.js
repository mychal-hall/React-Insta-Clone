import React from "react";

import "./PostContainer.css";

const PostHeader = props => {
  return (
    <>
      <img className="thumbnail" src={props.src} alt={props.username} />
      <p className="username">{props.username}</p>
    </>
  );
};

export default PostHeader;
