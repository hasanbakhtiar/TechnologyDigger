import React from "react";
import { useCart } from "react-use-cart";

const Cart = () => {
  const {
    isEmpty,
    cartTotal,
    totalUniqueItems,
    totalItems,
    items,removeItem,
    updateItemQuantity,
    emptyCart,
  } = useCart();
  if (isEmpty) return <h1 className="text-center mt-5">Your cart is empty</h1>;
  return (
    <div className="py-4 container">
      <h2 className="text-center">Total Price:({cartTotal}$)</h2>
      <div className="col-auto ms-auto d-flex align-items-center justify-content-center w-100">
        <div className="row d-flex justify-content-center">
          <h5>
            Cart({totalUniqueItems}) total Items:({totalItems})
          </h5>
          <table className="d-flex align-items-center justify-content-center table table-light table-hover m-0">
            <tbody>
              {items.map((item, index) => {
                return (
                  <tr>
                    <td><img width="100" src={item.img} alt="" /></td>
                    <td>{item.title}</td>
                    <td>{item.price}</td>

                    <td>
                      Say:({item.quantity})
                      <button onClick={()=>updateItemQuantity(item.id,item.quantity - 1)} className="btn btn-success ms-2">-</button>
                      <button onClick={()=>updateItemQuantity(item.id,item.quantity + 1)} className="btn btn-success ms-2">+</button>
                      <button onClick={()=>removeItem(item.id)} className="btn btn-danger ms-2">X</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-3 col-auto ms-auto d-flex align-items-center justify-content-center w-100">
        <button className="btn btn-danger" onClick={()=>{emptyCart()}}>Clear Cart</button>
      </div>
    </div>
  );
};

export default Cart;
