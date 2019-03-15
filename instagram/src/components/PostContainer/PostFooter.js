import React from "react";

import likeMe from '../img/smallheart.png';
import Comment from '../img/smallcomment.png';

const PostFooter = props => {
  return (
    <div>
      <img
        src={likeMe}
        alt="Like button"
      />
      <img src={Comment} alt='Comment'/>
    </div>
  );
};

export default PostFooter;
