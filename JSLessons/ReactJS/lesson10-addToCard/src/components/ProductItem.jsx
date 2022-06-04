import React from 'react'
import { useCart } from 'react-use-cart'



const ProductItem = (props) => {
  const {addItem} = useCart();
  return (
    <div className="card col-12 col-sm-12 col-md-4">
    <img src={props.sekil} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">{props.basliq}</h5>
      <p className="card-text">{props.aciqlama}</p>
      <p className="card-text">{props.qiymet}$</p>
      <button onClick={()=>addItem(props.mehsul)} className="btn btn-primary">Add To Card</button>
    </div>
  </div>
  )
}

export default ProductItem