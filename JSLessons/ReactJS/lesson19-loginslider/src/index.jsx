import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { useState } from "react";
import userData from './data/userData';

const Login = () => {
  const [user,setUser] = useState();
  const [pass,setPass] = useState();
  const [alert,setAlert] = useState();
  const [color,setColor] = useState();

 
const mySubmit = (e)=>{
  e.preventDefault();
  if ((user === userData.users[0].username)&&(pass === userData.users[0].pass)) {
    // setAlert("Girish ugurludur")
    setAlert(userData.users[0].name+userData.users[0].surname)
    setColor("alert-success")

  }else{
    setAlert("Sehv melumat daxil etdiniz")
    setColor("alert-danger")

  }
}
  return (
    <form onSubmit={mySubmit} className="container">
   <p className={color}>{alert}</p>
    <div className="mb-3">
      <label  className="form-label">Username</label>
      <input onChange={(e)=>{setUser(e.target.value)}} type="text" className="form-control" />
    </div>
    <div className="mb-3">
      <label  className="form-label">Password</label>
      <input onChange={(e)=>{setPass(e.target.value)}} type="password" className="form-control" />
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
  );

};
const App = () => {
  return <Login />;
};

ReactDOM.render(<App />, document.querySelector("#root"));
