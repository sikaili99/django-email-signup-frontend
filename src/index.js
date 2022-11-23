import React from "react";
import { createRoot } from 'react-dom/client';
import { createBrowserHistory } from "history"
import { Provider } from "react-redux";
import { store } from "./store";
import App  from "./App";
import "./styles.css";
import "./login.css";

export const history = createBrowserHistory();

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
