import React from "react";

import Comment from "./Comment";

const CommentSection = props => {
  return (
    <>
    {props.comments.map(comments => (
        <div key={comments.id} className='comment'>
        <Comment comment={props.comments}/>
        </div>
    ))}
    </>
  );
};

export default CommentSection;
