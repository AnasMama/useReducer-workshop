import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import ProductCard from "./ProductCard";
import { products } from "./products";

const ProductList = () => {
  const { cartList, dispatch } = useContext(CartContext);

  return (
    <div className="list">
      {products.map((fruit, index) => (
        <ProductCard
          key={index}
          fruit={fruit}
          cartList={cartList}
          dispatch={dispatch}
        />
      ))}
    </div>
  );
};

export default ProductList;
