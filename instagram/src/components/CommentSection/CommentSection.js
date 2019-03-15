import React from "react";

import Comment from "./Comment";

const CommentSection = props => {
    return(
        <Comment comment={props.comments} />
    )
}

export default CommentSection;
