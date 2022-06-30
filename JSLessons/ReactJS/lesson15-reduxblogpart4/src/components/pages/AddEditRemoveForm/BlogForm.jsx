import React, { Component } from 'react'

export class BlogForm extends Component {
    constructor(props){
            super(props);
            this.state={
                title:props.editblog? props.editblog.title:"",
                desk:props.editblog? props.editblog.desk:"",
                err:""
            }
    }
    onTitleChange=(e)=>{
        const title=e.target.value;
        this.setState(()=>({title}))
    }

    onDescChange=(e)=>{
        const desk=e.target.value;
        this.setState(()=>({desk}))
    }
    onTesdiq=(e)=>{
        e.preventDefault();
        if (!this.state.title || !this.state.desk) {
            this.setState({err: "Xanalari doldurun!"})
        }else{
            this.setState({err:""})
            this.props.onFormSubmit({
                title: this.state.title,
                desk: this.state.desk
            })
        }
    }
  render() {
    return (
        <div>
            {this.state.err && (
                <p className='alert alert-danger'>{this.state.err}</p>

            )}
        <form onSubmit={this.onTesdiq}>
        <div className="mb-3">
          <label className="form-label">Add Title</label>
          <input onChange={this.onTitleChange} value={this.state.title} type="text" className="form-control"  />
        </div>
        <div className="mb-3">
          <label  className="form-label">Add Description</label>
          <input onChange={this.onDescChange} value={this.state.desk} type="text" className="form-control" />
        </div>
            {/* <p>t:{this.state.title}</p>
            <p>d:{this.state.desk}</p> */}
        <button type="submit" className="btn btn-primary">Save</button>
      </form>
      </div>
    )
  }
}

export default BlogForm