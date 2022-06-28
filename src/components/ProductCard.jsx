import React from "react";

const ProductCard = ({ name, price, img, setCount, count }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{price} €</h2>
      <img src={img} alt={img} />
      <input
        type="button"
        value="Ajouter"
        onClick={() => setCount(count + price)}
      />
      <input
        type="button"
        value="Enlever"
        onClick={() => setCount(count - price)}
      />
    </div>
  );
};

export default ProductCard;
