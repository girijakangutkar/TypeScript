import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider as ChakraUi } from "@/components/ui/provider";
import { Provider } from "react-redux";
import store from "./components/redux/store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ChakraUi>
        <App />
      </ChakraUi>
    </Provider>
  </StrictMode>
);
