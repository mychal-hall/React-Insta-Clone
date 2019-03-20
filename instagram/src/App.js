import React, { Component } from "react";
import "./App.css";

import PostsPage from './components/PostContainer/PostsPage';
import withAuthenticate from './Authentication/withAuthenticate';
import Login from './components/Login/Login';


const ComponentFromWithAuthenticate = withAuthenticate(PostsPage);

class App extends Component {


  render() {
    return (
      <div className="App">
      <Login />
      <ComponentFromWithAuthenticate />
      </div>
    );
  }
}

export default App;
