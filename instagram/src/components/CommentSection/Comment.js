import React from "react";

import './CommentSection.css';

function Comment(props) {
  return (
    <>
      {props.comment.map(comment => (
        <div className="comment">
          <p className='commentContent'><b>{comment.username}</b> {comment.text}</p>
          {/* <p className='commentText'>{comment.text}</p> */}
        </div>
      ))}
    </>
  );
}

export default Comment;
