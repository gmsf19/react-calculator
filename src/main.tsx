import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ContextProvider from "./store/context";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ContextProvider>
    <App />
  </ContextProvider>
);
