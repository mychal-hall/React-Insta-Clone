import React, { Component } from "react";
import "./App.css";

import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";
import dummyData from './dummy-data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    return(
    (this.setState({ data: dummyData}))
    )}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SearchBar />
        </header>
        <div>
          <PostContainer data={this.state.data} />
        </div>
      </div>
    );
  }
}

export default App;
