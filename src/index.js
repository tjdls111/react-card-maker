import React from "react";
import ReactDOM from "react-dom";
import "./index.module.css";
import App from "./App";
import AuthService from "./services/auth_service";

const authService = new AuthService();
ReactDOM.render(
  <>
    <App authService={authService} />
  </>,
  document.getElementById("root")
);
