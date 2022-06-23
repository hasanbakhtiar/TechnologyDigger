import React from 'react'
import { connect } from 'react-redux'
import BlogList from './BlogList'
import BlogListItem from './BlogListItem'

const BlogListPage = (props) => {
  return (
    <ol>
      {props.deyer.map(senan=>{
        return <BlogListItem {...senan}/>
      })}
    </ol>
  )
}
const mapStateToProps = (state)=>{
  return{
    deyer: state.item
  }
}

export default connect(mapStateToProps)(BlogListPage)