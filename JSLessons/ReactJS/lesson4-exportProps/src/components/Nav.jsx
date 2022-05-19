import React, { Component } from "react";

class Dropdown extends Component{
  render(){
    return(
      <li className="nav-item dropdown">
      <p
        className="nav-link dropdown-toggle"
        href="#"
        id="navbarDropdown"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {this.props.senan}
      </p>
      <ul
        className="dropdown-menu"
        aria-labelledby="navbarDropdown"
      >
        <li>
          <p className="dropdown-item" href="#">
            {this.props.item1}
          </p>
        </li>

        <li>
          <p className="dropdown-item" href="#">
            {this.props.item2}
          </p>
        </li>
       
      </ul>
    </li>
    )
  }
}

class Nav extends Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <p className="navbar-brand" href="#">
              Navbar
            </p>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <p className="nav-link active" aria-current="page" href="#">
                    Home
                  </p>
                </li>
             
               <Dropdown senan ="PC" item1="Mac" item2="Dell"/>
               <Dropdown senan ="Notebook" item1="Acer" item2="MSI"/>
               <Dropdown senan ="Phone" item1="Asus" item2="HP"/>
              
              </ul>
        
            </div>
          </div>
        </nav>
        )
    }
}

export default Nav;