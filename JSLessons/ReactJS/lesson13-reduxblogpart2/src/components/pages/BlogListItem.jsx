import React from 'react'

const BlogListItem = ({title}) => {
  return (
    <li>{title} - <button className='btn btn-success'>desc</button></li>
  )
}

export default BlogListItem