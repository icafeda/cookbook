import React from "react";
import ReactDOM from "react-dom/client";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./index.css";
import App from "./App";

import { BrowserRouter as Router } from "react-router-dom";
import { ScrollToStop } from "./components";
import { FilterProvider, CartProvider, LoginRegisterProvider } from "./context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartProvider>
      <LoginRegisterProvider>
        <Router>
          <FilterProvider>
            <ScrollToStop />
            <ToastContainer
              closeButton={true}
              autoClose={1700}
              position={"top-right"}
              theme="colored"
            />
            <App />
          </FilterProvider>
        </Router>
      </LoginRegisterProvider>
    </CartProvider>
  </React.StrictMode>,
);
