import React from "react";

import './PostContainer.css'
import CommentSection from "../CommentSection/CommentSection";

function PostContainer(props) {
  return (
    <>
      {props.post.map(post => (
        <div key={post.id} className="post">
          <img className='thumbnail' src={post.thumbnailUrl} alt={post.username} />
          <p className='username'>{post.username}</p>
          <img className='postImage' src={post.imageUrl} alt='A post by {post.username}' />
          <CommentSection />
        </div>
      ))}
    </>
  );
}

export default PostContainer;
