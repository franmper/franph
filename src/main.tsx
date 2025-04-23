import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/index.css";
import App from "./App.tsx";

const root = createRoot(document.querySelector("#root") as HTMLElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
