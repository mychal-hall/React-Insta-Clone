import React from "react";

import "./PostContainer.css";
import likeMe from "../img/smallheart.png";
import Comment from "../img/smallcomment.png";

const PostFooter = props => {
  return (
    <div className="postFooter">
      <img className="smallHeart" src={likeMe} alt="Like button" />
      <img className="smallComment" src={Comment} alt="Comment" />
      <p className="likeCount">{props.likes} likes</p>
    </div>
  );
};

export default PostFooter;
