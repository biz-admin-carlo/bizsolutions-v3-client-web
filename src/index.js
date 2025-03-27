import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { VERSION_CONTROL } from "./utils"; 

function checkVersion() {
  const localVersion = localStorage.getItem("version");

  if (localVersion && localVersion !== VERSION_CONTROL) {
    localStorage.clear();
    localStorage.setItem("version", VERSION_CONTROL);
  } else if (!localVersion) {
    localStorage.setItem("version", VERSION_CONTROL);
  }
}

checkVersion();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
