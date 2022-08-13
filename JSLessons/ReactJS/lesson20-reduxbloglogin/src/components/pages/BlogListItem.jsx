import React,{useEffect} from 'react'
import Aos from 'aos';
import { Link } from 'react-router-dom'

const BlogListItem = ({title,id,img}) => {
  useEffect(()=>{
    Aos.init({duration:700})
  },[])
  return (
    <div className="card col-12 col-sm-12 col-md-4" data-aos="fade-up">
      <img width="50" src={img} class="card-img-top" alt={img}></img>
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{id}</p>
      <Link to={`/blog/${id}`} className="btn btn-primary">Read More</Link>
    </div>
  </div>
  )
}

export default BlogListItem