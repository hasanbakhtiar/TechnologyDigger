import React, { Component } from 'react'

class ClassComponent extends Component {
  
    componentDidMount(){
        console.log('componentDidMount is running...');
    }
    componentDidUpdate(){
        console.log('componentDidUpdate is running..');
        document.querySelector('button').style.background='red';
    }

    constructor(props){
        super(props);
        console.log('constructor is running...');
        this.myClick = this.myClick.bind(this);
        this.state={
            a:"hello"
        }
    }
    myClick(){
        this.setState({
            a: "salam"
        })
    }
  render() {
    return (
      <div>
          {this.state.a}
          <button onClick={this.myClick}>new</button>
      </div>
    )
  }
}

export default ClassComponent