import React, { Component } from 'react'
import kitab1984 from '../assets/img/1984.jpg';
import sefiller from '../assets/img/sefiller.jpg';

class BookStore extends Component {
    constructor(props){
        super(props);
        this.nextBook = this.nextBook.bind(this);
        this.state={
            img:kitab1984,
            bookName: "1984",
            auther:"George Orwell",
            pageLenght: 300
        }
    }

    nextBook(){
        this.setState({
            img:sefiller,
            bookName: "Sefiller",
            auther:"Viktor Hugo",
            pageLenght: 900
        })
    }
  render() {
    return (
      <div>
          <img src={this.state.img} width="300" alt="err" />
          <h1>{this.state.bookName}</h1>
          <p>{this.state.auther}</p>
          <p>{this.state.pageLenght}</p>
          <button className='btn btn-primary' onClick={this.nextBook}>next book</button>
      </div>
    )
  }
}

export default BookStore