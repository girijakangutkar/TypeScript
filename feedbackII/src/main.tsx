import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import FormContext from "./components/context/FormContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FormContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FormContext>
  </StrictMode>
);
