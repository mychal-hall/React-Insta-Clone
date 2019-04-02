import React, { Component } from "react";

import "./Login.css";
import logo from "../img/logo.png";
import styled from "styled-components";

const Div = styled.div`
  margin: 100px auto;
  width: 300px;
`;

const Button = styled.button`
  height: 30px;
  background: black;
  color: white;
  border: 1px solid black;
  border-radius: 3px;
`;

const Input = styled.input`
  height: 30px;
  margin-bottom: 10px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-left: 45px;
  width: 200px;
`;

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
      <Div>
        <img className="loginLogo" src={logo} alt="Instagram logo" />
        <Form>
          <Input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.changeHandler}
            placeholder="Username"
          />
          <Input
            type="text"
            name="password"
            value={this.state.password}
            onChange={this.changeHandler}
            placeholder="Password"
          />
          <Button onClick={this.loginSubmit}>Submit</Button>
        </Form>
      </Div>
    );
  }
}

export default Login;
