import React from "react";
import ReactDOM from "react-dom";
import createHistory from "history/createBrowserHistory";
import App  from "./app";
import "./styles.css";

export const history = createHistory();

ReactDOM.render(
    <App />,
  document.getElementById("root")
);
