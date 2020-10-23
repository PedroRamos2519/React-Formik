import React from "react";
import ReactDOM from "react-dom";
import Formik from "./App";
import "./styles.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Formik />
  </React.StrictMode>,
  rootElement
);
