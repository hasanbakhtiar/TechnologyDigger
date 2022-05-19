import React, { Component } from 'react'

 class ProductItem extends Component {
  render() {
    return (
        <div className="card">
        <img src={this.props.photo} height="300" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          <p style={{"color":"red"}} className="card-text">
            This is a wider card with supporting text below as a natural
            lead-in to additional content. This content is a little bit
            longer.
          </p>
          <p className="card-text">
            <small className="text-muted">
              Last updated 3 mins ago
            </small>
          </p>
        </div>
      </div>
    )
  }
}

export default ProductItem