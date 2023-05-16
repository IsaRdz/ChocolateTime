import React, { useContext } from "react";
import Cart from "./Cart";
import { MoonLoader } from "react-spinners";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

const CartContainer = () => {
  const { cart, cleanCart, deleteProductById, totalPrice } =
    useContext(CartContext);

  let total = totalPrice();
  const navigate = useNavigate();

  return (
    <div>
      <Cart
        cart={cart}
        cleanCart={cleanCart}
        deleteProductById={deleteProductById}
        total={total}
        navigate={navigate}
      />
    </div>
  );
};

export default CartContainer;
