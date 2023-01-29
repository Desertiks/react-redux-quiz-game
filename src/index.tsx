import React from "react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bulma/css/bulma.css";
import App from "./App";
import { HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);
