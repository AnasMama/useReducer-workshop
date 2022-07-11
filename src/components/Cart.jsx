import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const Cart = () => {
  const { cartList } = useContext(CartContext);

  let cartPrice = 0;
  cartList.forEach(
    (product) => (cartPrice += product.quantity * product.price)
  );

  return (
    <div className="cart">
      {cartList
        .filter((el) => el.quantity !== 0)
        .map((e, index) => (
          <div className="cart-row" key={index}>
            <img src={e.img} alt={e.name} />
            <h1>{e.name}</h1>
            <h1>{e.quantity}</h1>
          </div>
        ))}
      <h1>Total: {cartPrice} €</h1>
    </div>
  );
};

export default Cart;
