import React from "react";

import moment from "moment";
import "./CommentSection.css";
import Comment from "./Comment";

const CommentSection = props => {
  return (
    <div className="commentSection">
      <Comment comment={props.comments} />
      <p className="momentTrack">{moment().fromNow("hh")} ago . . . </p>
      <form className="newComment">
        <input className="addComment" placeholder="Add a comment..." />
      </form>
    </div>
  );
};

export default CommentSection;
