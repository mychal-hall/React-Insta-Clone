import React from "react";
import PropTypes from "prop-types";

import "./CommentSection.css";
import styled from 'styled-components';

const CommentHolder = styled.div `
display: flex;
margin-left: 10px;`

const NewComment = styled.p `
margin-top: 0;
margin-bottom: 8px;
font-size: 16px;
`

function Comment(props) {
  return (
    <>
      {props.data.map(comment => (
        <CommentHolder>
          <NewComment className="commentContent">
            <b>{comment.username}</b> {comment.text}
          </NewComment>
        </CommentHolder>
      ))}
    </>
  );
}

Comment.propTypes = {
  comment: PropTypes.shape({
    username: PropTypes.string,
    text: PropTypes.string
  })
};

export default Comment;
