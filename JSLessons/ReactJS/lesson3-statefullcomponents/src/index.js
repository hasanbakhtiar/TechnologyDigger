import React, { Component } from 'react';
import  ReactDOM  from 'react-dom';
import './sass/style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

const myList = {
  list1:"Pen",
  list2:"Book",
  list3:"Board",
}



class ListItem extends Component{
  render(){
    return(
     <li>
       {myList.list1}
     </li>
    )
  }
}


class List extends Component{
  render(){
    return(
     <ul>
       <ListItem />
     </ul>
    )
  }
}

 class App extends Component {
  render() {
    return (
      <>
        <List />
        <h1>{myList.list3}</h1>
        
      </>
    )
  }
}

ReactDOM.render(<App />,document.querySelector('#root'));
