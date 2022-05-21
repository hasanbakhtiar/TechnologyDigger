import React, { Component } from 'react'

export class Mode extends Component {
    constructor(props){
        super(props);
        this.colorMode = this.colorMode.bind(this);
        this.state={
            nameMode : 'box light-mode'
        }
    }
    colorMode(){
        this.setState({
            nameMode: 'box dark-mode'
        })
    }
  render() {
    return (
      <div>
          <div className={this.state.nameMode}></div>
          <button className='btn btn-outline-dark mt-5' onClick={this.colorMode}>Mode</button>
      </div>
    )
  }
}

export default Mode