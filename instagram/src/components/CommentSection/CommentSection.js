import React, { Component } from "react";

import moment from "moment";
import "./CommentSection.css";
import Comment from "./Comment";


class CommentSection extends Component {
  constructor(props) {
    super(props);
      this.state = {
        comments: props.comments,
        text: ''
    }
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
            username: 'frankenstein789465',
            text: prevState.text,
          }
        ],
        text: ''
      };
    }); 
  };


  render() {
  return (
    <div className="commentSection">
      <Comment data={this.state.comments} />
      <p className="momentTrack">{moment().fromNow("hh")} ago . . . </p>
      <form onSubmit={this.submitHandler} className="newComment">
        <input value={this.props.text} onChange={this.changeHandler} className="addComment" placeholder="Add a comment..." />
      </form>
    </div>
  );
  }
};

export default CommentSection;
