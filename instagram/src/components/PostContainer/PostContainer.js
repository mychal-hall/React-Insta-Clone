import React from "react";

import './PostContainer.css'
import CommentSection from "../CommentSection/CommentSection";

function PostContainer(props) {
  return (
    <>
      {props.data.map(data => (
        <div key={data.id} className="post">
          <img className='thumbnail' src={data.thumbnailUrl} alt={data.username} />
          <p className='username'>{data.username}</p>
          <img className='dataImage' src={data.imageUrl} alt='A post by {data.username}' />
          <CommentSection comments={props.data.comments}/>
        </div>
      ))}
    </>
  );
}

export default PostContainer;
