import React, { Component } from "react";

import "./Login.css";
import logo from "../img/logo.png";

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
    localStorage.setItem("password", password);
    window.location.reload();
  };

  render() {
    return (
      <div className="loginContainer">
        <img className="loginLogo" src={logo} alt="Instagram logo" />
        <form className="loginForm">
          <input
            className="loginInput"
            type="text"
            name="username"
            placeholder="Username"
            value={this.state.username}
            onChange={this.changeHandler}
          />
          <input
            className="loginInput"
            type="text"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.changeHandler}
          />
          <button className="loginButton" onClick={this.loginSubmit}>Login</button>{" "}
        </form>
      </div>
    );
  }
}

export default Login;
