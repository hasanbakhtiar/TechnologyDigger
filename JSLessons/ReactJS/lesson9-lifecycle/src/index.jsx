import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import FuncComponent from "./components/FuncComponent";
// import ClassComponent from "./components/ClassComponent";

const App =()=>{
  return (
    <>
    <FuncComponent />
    </>
  )
}

ReactDOM.render(<App />, document.querySelector("#root"));
