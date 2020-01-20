import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";

const API_KEY = "383fad9661a33d6164b48dd1309a05cd";

const Index = function() {
  return <App />;
};

ReactDOM.render(<Index />, document.querySelector("#main-container"));
