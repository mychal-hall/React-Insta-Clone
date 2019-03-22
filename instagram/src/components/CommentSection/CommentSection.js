import React, { Component } from "react";

import moment from "moment";
import "./CommentSection.css";
import Comment from "./Comment";
import styled from 'styled-components';

const CommentContainer = styled.div`
width: 100%;
margin-top: 0px;
`

const CommentAdd = styled.input`
margin-top: 20px;
width: 90%;
height: 20px;
font-size: 16px;
border: none;
::placeholder {
  font-size: 16px;
  text-align: left;
}
`
const NewComment = styled.form`
margin-left: 12px;
width: 95%;
height: 60px;
border-top: 1px solid rgb(240, 240, 240);
`

class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      text: ""
    };
  }

  changeHandler = e => {
    this.setState({ text: e.target.value });
  };

  submitHandler = event => {
    event.preventDefault();
    this.setState(prevState => {
      return {
        comments: [
          ...prevState.comments,
          {
            username: localStorage.getItem("user"),
            text: prevState.text
          }
        ],
        text: ""
      };
    });
  };

  render() {
    return (
      <CommentContainer>
        <Comment data={this.state.comments} />
        <p className="momentTrack">{moment().fromNow("hh")} ago . . . </p>
        <NewComment onSubmit={this.submitHandler}>
          <CommentAdd
            value={this.state.text}
            onChange={this.changeHandler}
            placeholder="Add a comment..."
          />
        </NewComment>
      </CommentContainer>
    );
  }
}

export default CommentSection;
