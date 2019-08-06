import React from "react";
import { render } from "react-dom";

import { configureStore } from "./store";
import App from "./App";
import { unregister } from "./serviceWorker";

import "./index.css";
declare global {
  interface Window {
    __INITIAL_STATE__: any;
  }
}

const store = configureStore(window.__INITIAL_STATE__);
render(<App store={store} />, document.getElementById("root"));
unregister();
