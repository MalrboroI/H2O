import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { StoreProvider } from "./store/StoreProvider";
import { AuthProvider } from "./components/Auth/AuthProvider";
import ErrorBoundary from "./utils/ErrorBoundary";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <StoreProvider>
        <AuthProvider>
          <ErrorBoundary>
            <App />
          </ErrorBoundary>
        </AuthProvider>
      </StoreProvider>
    </BrowserRouter>
  </StrictMode>
);
