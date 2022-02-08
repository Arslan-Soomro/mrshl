import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import GlobalState from "./context/GlobalState";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalState>
        <App />
      </GlobalState>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
