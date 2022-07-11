import React from "react";

const ProductCard = ({
  fruit,
  dispatch,
  cartPrice,
  setCartPrice,
}) => {
  const { name, price, img } = fruit;

  return (
    <div className="card">
      <img src={img} alt={img} />
      <div>
        <h1>{name}</h1>
        <h2>{price} €</h2>
      </div>
      <div>
        <input
          type="button"
          value="Ajouter"
          onClick={() =>
            dispatch({
              type: "add",
              payload: { fruit, cartPrice, setCartPrice },
            })
          }
        />
        <input
          type="button"
          value="Enlever"
          onClick={() =>
            dispatch({
              type: "remove",
              payload: { fruit, cartPrice, setCartPrice },
            })
          }
        />
      </div>
    </div>
  );
};

export default ProductCard;
