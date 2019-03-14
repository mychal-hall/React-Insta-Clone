import React from "react";

import Comment from "./Comment";

const CommentSection = props => {
  return (
    <>
      {props.comments.map(comment => (
        <div className="comment">
          <Comment comment={comment} />
        </div>
      ))}
    </>
  );
};

export default CommentSection;
