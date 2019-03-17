import React from "react";
import PropTypes from "prop-types";

import "./CommentSection.css";

function Comment(props) {
  return (
    <>
      {props.data.map(comment => (
        <div className="comment">
          <p className="commentContent">
            <b>{comment.username}</b> {comment.text}
          </p>
        </div>
      ))}
    </>
  );
}

Comment.propTypes = {
  comment: PropTypes.shape({
    username: PropTypes.string,
    text: PropTypes.string
  })
};

export default Comment;
