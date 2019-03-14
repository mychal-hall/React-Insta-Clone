import React from "react";


const Comment = (props) => {
    return (
        <div className="comment">
            <p className="comment-username">{props.comment.username}{props.comment.text}</p>
        </div>
    );
}

export default Comment;