import React from "react";
import Products from "../components/Products";
import Cart from "../components/Cart";
import Nav from "../components/Nav";
import { CartProvider } from "react-use-cart";
import { BrowserRouter,Route } from "react-router-dom";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <Nav />
        <Route path="/" exact component={Products}></Route>
        <Route path="/cart" component={Cart}></Route>
      </CartProvider>
    </BrowserRouter>
  );
};

export default AppRouter;
