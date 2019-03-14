import React from "react";

import CommentSection from "../CommentSection/CommentSection";

function PostContainer(props) {
  return (
    <>
      {props.post.map(post => (
        <div key={post.id} className="post">
          <img src={post.thumbnailUrl} alt={post.username} />
          <p>{post.username}</p>
          <img src={post.imageUrl} alt='A post by {post.username}' />
          <CommentSection />
        </div>
      ))}
    </>
  );
}

export default PostContainer;
