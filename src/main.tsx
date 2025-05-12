import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { StoreProvider } from "./store/Hooks/useStore";
// import { rootStore } from "./store/store";
import { BrowserRouter } from "react-router-dom";
import { StoreProvider } from "./store/StoreProvider";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <StoreProvider>
        <App />
      </StoreProvider>
    </BrowserRouter>
  </StrictMode>
);
