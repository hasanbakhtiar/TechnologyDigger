import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
// import BookStore from "./components/BookStore";
// import Counter from "./components/Counter";
import Mode from "./components/Mode";
import './assets/sass/style.css';

class App extends Component {
  render() {
    return (
      <div className="container mt-5">
          <Mode />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
