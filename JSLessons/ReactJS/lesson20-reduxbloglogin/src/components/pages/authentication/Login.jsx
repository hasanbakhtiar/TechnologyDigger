import React, { useState } from "react";
import users from "../../../data/authentication";
const Login = (props) => {
  const [username, setUser] = useState();
  const [password, setPass] = useState();
  const [alert, setAlert] = useState();
  const authenticationLogin = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setAlert("Xanalari doldurun.");
    } else {
      if (username === users[0].username && password === users[0].password) {
        props.history.push("/dashboard");
      } else {
        setAlert("Wrong password or username");
      }
    }
  };
  return (
    <div>
      <h1 className="text-center">Login</h1>
      <div className="d-flex align-items-center justify-content-center">
        <h6 className="col-6 text-center alert-danger">{alert}</h6>
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <form onSubmit={authenticationLogin} className="col-6  ">
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Username
            </label>
            <input
              onChange={(e) => {
                setUser(e.target.value);
              }}
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              Enter username
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              onChange={(e) => {
                setPass(e.target.value);
              }}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
            <div id="passwordHelp" className="form-text">
              Enter password
            </div>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
