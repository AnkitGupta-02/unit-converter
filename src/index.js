import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import { UnitProvider } from "./context/unit-context";
import "./index.css";

const el = document.getElementById("root");
const root = ReactDom.createRoot(el);

root.render(
  <UnitProvider>
    <App />
  </UnitProvider>
);
