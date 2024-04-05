import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  const finalPrice = cart.reduce(
    (prevPrice, currPrice) => prevPrice + currPrice.price,
    0
  );

  const deliveryCharge = finalPrice > 0 ? 30 : 0;

  return (
    <div className="cart-compo-style">
      <h4>Order Information</h4>
      <p>Items Seleceted {cart.length}</p>
      <p>Price: ৳ {finalPrice}</p>
      <p>Delivery Charge: ৳ {deliveryCharge}</p>
      <h4>Sub Total: ৳ {finalPrice + deliveryCharge}</h4>
    </div>
  );
};

export default Cart;
