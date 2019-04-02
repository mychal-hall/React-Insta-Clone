import React, { Component } from "react";

import dummyData from "../../dummy-data";
import SearchBar from "../SearchBar/SearchBar";
import PostContainer from "./PostContainer";

class PostsPage extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      filteredData: []
    };
  }

  componentDidMount() {
    return this.setState({ data: dummyData });
  }

  searchHandler = event => {
    const data = this.state.data.filter(data => {
      if (data.username.includes(event.target.value)) {
        return data;
      }
    });
    this.setState({ filteredData: data });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SearchBar
            searchTerm={this.state.searchTerm}
            searchPosts={this.searchHandler}
          />
        </header>
        <div>
          <PostContainer
            incrementLike={this.incrementLike}
            data={
              this.state.filteredData.length > 0
                ? this.state.filteredData
                : this.state.data
            }
          />
        </div>
      </div>
    );
  }
}
export default PostsPage;
