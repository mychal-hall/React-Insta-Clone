import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  loginSubmit = event => {
    const user = this.state.username;
    localStorage.setItem("user", user);
    const password = this.state.password;
    localStorage.setItem("password", password)
    window.location.reload();
  };

  render() {
    return (
      <form>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={this.state.username}
          onChange={this.changeHandler}
        />
        <input
          type="text"
          name="password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.changeHandler}
        />
        <button onClick={this.loginSubmit}>Login</button>{" "}
      </form>
    );
  }
}

export default Login;
