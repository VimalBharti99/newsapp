import React from "react";
import ReactDom from 'react-dom/client'
import App from "./FunctionalComponent/App";
//import App from "./ClassComponent/App";


var root = ReactDom.createRoot(document.getElementById("root"))

root.render(
    <>
      <App/>
    </>
)