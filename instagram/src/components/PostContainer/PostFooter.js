import React, { Component } from "react";

import "./PostContainer.css";
import likeMe from "../img/smallheart.png";
import Comment from "../img/smallcomment.png";

class PostFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.likes
    };
  }

  incrementLike = () => {
    let likes = this.props.likes + 1;
    this.setState({ likes });
  };
  render() {
    return (
      <div className="postFooter">
        <img
          className="smallHeart"
          src={likeMe}
          alt="Like button"
          onClick={this.incrementLike}
        />
        <img className="smallComment" src={Comment} alt="Comment" />
        <p className="likeCount">{this.state.likes} likes</p>
      </div>
    );
  }
}

export default PostFooter;
