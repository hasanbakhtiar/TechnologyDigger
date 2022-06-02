import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Counter from "./components/Counter";


// function App() {
//   return(
//     <h1>Hello</h1>
//   )
// }


const App =()=>{
  return(
  <div className="container mt-5">
    <Counter />
  </div>
  )
}


ReactDOM.render(<App />, document.querySelector("#root"));
