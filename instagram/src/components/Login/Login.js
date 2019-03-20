import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  

  render() {
    return (
      <form>
        <input name="username" placeholder="Username" />
        <input name="password" placeholder="Password" />
        <button>Login</button>{" "}
      </form>
    );
  }
}

export default Login;
