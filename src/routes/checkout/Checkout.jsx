import React from "react";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart";
import CheckoutItem from "../../components/checkout-item/CheckoutItem";
import "./checkout.scss";

const Checkout = () => {
  const { cartItems, cartItemTotal } = useContext(CartContext);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => {
        return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
      })}
      <span className="total"> Total: ${cartItemTotal}</span>
    </div>
  );
};

export default Checkout;
