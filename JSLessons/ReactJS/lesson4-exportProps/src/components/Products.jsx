import React, { Component } from 'react'
import ProductItem from './ProductItem'
import img1 from '../assets/img/cardImg1.jpg';
import img2 from '../assets/img/cardImg2.jpg';
import img3 from '../assets/img/cardImg3.jpg';

class Products extends Component {
  render() {
    return (
        <section>
        <div classNameName="row">
          <div className="card-group">
           <ProductItem title="Product1" photo = {img1}/>
           <ProductItem title="Product2" photo = {img2}/>
           <ProductItem  title="Product3" photo = {img3}/>
          </div>
        </div>
        </section>
        
    )
  }
}

export default Products