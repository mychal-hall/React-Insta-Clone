import React from "react";

function Comment(props) {
  return (
    <>
      {props.comment.map(comment => (
        <div className="comment">
          <p>{comment.username}</p>
          <p>{comment.text}</p>
        </div>
      ))}
    </>
  );
}

export default Comment;
