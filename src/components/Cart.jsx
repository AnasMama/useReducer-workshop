import React from "react";

const Cart = ({ cartList, cartPrice }) => {
  return (
    <div className="cart">
      {cartList
        .filter((el) => el.quantity !== 0)
        .map((e) => (
          <div className="cart-row">
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
