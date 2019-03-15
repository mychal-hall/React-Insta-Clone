import React from "react";

import './CommentSection.css';

function Comment(props) {
  return (
    <>
      {props.comment.map(comment => (
        <div className="comment">
          <p className='commentUsername'>{comment.username}</p>
          <p className='commentText'>{comment.text}</p>
        </div>
      ))}
    </>
  );
}

export default Comment;
