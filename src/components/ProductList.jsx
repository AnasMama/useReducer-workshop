import ProductCard from "./ProductCard";
import { products } from "./products";

const ProductList = ({ cartList, dispatch }) => {
  return (
    <div className="list">
      {products.map((fruit) => (
        <ProductCard
          fruit={fruit}
          cartList={cartList}
          dispatch={dispatch}
        />
      ))}
    </div>
  );
};

export default ProductList;
