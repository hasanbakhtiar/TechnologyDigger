import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./assets/sass/style.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Nav from "./components/Nav";
import Products from "./components/Products";

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Products />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
