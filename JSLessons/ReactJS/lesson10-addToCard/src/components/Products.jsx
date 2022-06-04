import React, { Component } from "react";
import ProductItem from "./ProductItem";
import data from "./data";


class Products extends Component {
render(){
    return (
        <div className="container mt-3">
          <div className="row">
            {data.productData.map((deyer,acar) => {
              return (
                <ProductItem
                  sekil={deyer.img}
                  basliq={deyer.title}
                  aciqlama={deyer.desc}
                  qiymet={deyer.price}
                  mehsul = {deyer}
                  key={acar}
                />
              );
            })}
          </div>
        </div>
      );
}
};

export default Products;
