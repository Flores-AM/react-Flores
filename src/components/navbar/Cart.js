import React from "react";
import { ImCart } from "react-icons/im";
import "./carrito.css";

const Cart = () => {
  return (
    <div className="carrito">
      <ImCart size={30} className="img" />
    </div>
  );
};

export default Cart;
