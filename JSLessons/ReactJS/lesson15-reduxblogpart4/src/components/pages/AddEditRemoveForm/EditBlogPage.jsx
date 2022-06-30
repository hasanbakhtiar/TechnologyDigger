import React from 'react'
import { connect } from 'react-redux'
import { editBlog, removeBlog } from '../../../actions/actionBlog'
import BlogForm from './BlogForm'

const EditBlogPage = props => {
  return (
    <div>
        <h3 className='text-center'>Edit Blog</h3>
        <BlogForm editblog={props.deyer}
        onFormSubmit={(a)=>{
            props.dispatch(editBlog(props.deyer.id,a));
            props.history.push('/dashboard');
        }}/>
        <button className='btn btn-danger mt-3' 
        onClick={()=>{
            props.dispatch(removeBlog({id:props.deyer.id}))
            props.history.push('/dashboard');
        }}
        >Delete</button>
    </div>
  )
}

const mapStateToProps=(state,props)=>{
    return{
        deyer:state.item.find((b)=>{
            return b.id === props.match.params.id;
        })
    }
}

export default connect(mapStateToProps)(EditBlogPage)