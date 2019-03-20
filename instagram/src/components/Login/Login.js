import React from "react";

const Login = props => {
  return (
    <form>
      <input name="username" placeholder="Username" />
      <input name="password" placeholder="Password" />
      <button>Login</button>{" "}
    </form>
  );
};

export default Login;
