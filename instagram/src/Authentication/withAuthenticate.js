import React from "react";

const withAuthenticate = App => Login =>
  class extends React.Component {
    render() {
      return <App />;
    }
  };

export default withAuthenticate;
