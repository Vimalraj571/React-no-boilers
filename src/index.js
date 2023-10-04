import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { store, persistor } from "./redux/store";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';

let demo = React.createElement(
    "h1", { style: { color: "green" } }, "Simple React Render"
)

// console.log(demo)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
        {/* {demo} */}
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

/* 
All are Object in the React

simple JSON Example

Like DOM Tree

{
  h1:"element"
}

*/
