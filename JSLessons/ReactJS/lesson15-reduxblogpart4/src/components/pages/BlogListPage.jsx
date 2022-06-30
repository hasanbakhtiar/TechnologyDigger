import React from 'react'
import { connect } from 'react-redux'
import BlogListItem from './BlogListItem'

const BlogListPage = (props) => {
  return (
    <div className='row'>
      {props.deyer.map(calldata=>{
        return <BlogListItem key={calldata.id} {...calldata}/>
      })}
    </div>
  )
}
const mapStateToProps = (state)=>{
  return{
    deyer: state.item
  }
}

export default connect(mapStateToProps)(BlogListPage)