import React from 'react'
import { connect } from 'react-redux'
import BlogListItem from './BlogListItem'

const BlogListPage = (props) => {
  return (
    <div className='row'>
      {props.deyer.map(senan=>{
        return <BlogListItem key={senan.id} {...senan}/>
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