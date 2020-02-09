import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";

const Index = function() {
  return <App />;
};

ReactDOM.render(<Index />, document.querySelector("#main-container"));
