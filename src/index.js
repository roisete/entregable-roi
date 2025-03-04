import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./componentes/App";
import { BrowserRouter } from "react-router-dom";

//https://github.com/roisete/entregable-roi

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
