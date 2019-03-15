import React from "react";

import Comment from "./Comment";

const CommentSection = props => {
  return (
    <div className="commentSection">
      <Comment comment={props.comments} />
    </div>
  );
};

export default CommentSection;
