import React, { Component } from "react";
import "./App.css";

import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";
import dummyData from './dummy-data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      post: dummyData
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SearchBar />
        </header>
        <div>
          <PostContainer post={this.state.post} />
        </div>
      </div>
    );
  }
}

export default App;
