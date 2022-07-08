import React from "react";

const ProductCard = ({
  fruit,
  setCartList,
  cartList,
  cartPrice,
  setCartPrice,
}) => {
  const { name, price, img } = fruit;

  const addProductToCart = () => {
    const changedCart = cartList.map((el) =>
      el.name === fruit.name ? { ...el, quantity: (el.quantity += 1) } : el
    );
    setCartList(changedCart);
    setCartPrice((cartPrice += fruit.price));
  };

  const removeProductToCart = () => {
    const changedCart = cartList.map((el) => {
      if (el.name === fruit.name && el.quantity > 0) {
        setCartPrice((cartPrice -= fruit.price));
        return { ...el, quantity: el.quantity - 1 };
      }
      return el;
    });
    setCartList(changedCart);
  };

  return (
    <div className="card">
      <img src={img} alt={img} />
      <div>
        <h1>{name}</h1>
        <h2>{price} €</h2>
      </div>
      <div>
        <input type="button" value="Ajouter" onClick={addProductToCart} />
        <input type="button" value="Enlever" onClick={removeProductToCart} />
      </div>
    </div>
  );
};

export default ProductCard;
