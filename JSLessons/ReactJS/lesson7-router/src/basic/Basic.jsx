import React, { Component } from 'react'
import {BrowserRouter,Route,Link} from 'react-router-dom';


class Nav extends Component{
    render(){
        return(
            <ul className='d-flex'>
                <Link className='ms-3' to="/">Home</Link>
                <Link className='ms-3' to="/about">About</Link>
                <Link className='ms-3' to="/contact">Contact</Link>
            </ul>
        )
    }
}


class Home extends Component{
    render(){
        return(
            <h1>Home</h1>
        )
    }
}

class About extends Component{
    render(){
        return(
            <h1>About</h1>
        )
    }
}

class Contact extends Component{
    render(){
        return(
            <h1>Contact</h1>
        )
    }
}



class Basic extends Component {
  render() {
    return (
      <BrowserRouter>
      <Nav />
            <Route exact path="/" component={Home}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/contact" component={Contact}></Route>
      </BrowserRouter>
    )
  }
}

export default Basic