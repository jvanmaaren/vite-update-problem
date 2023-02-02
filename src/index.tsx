import "vite/modulepreload-polyfill";
import App from "./MyApp";
import { createRoot } from "react-dom/client";
import React from "react";

const container = document.getElementById("app");

const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
