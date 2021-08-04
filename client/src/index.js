import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "react-redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";

import reducers from "./reducers";

import App from "./App";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
