import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

let demo = React.createElement(
    "h1", { style: { color: "green" } }, "Simple React Render"
)

// console.log(demo)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* {demo} */}
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
