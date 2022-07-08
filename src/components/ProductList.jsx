import ProductCard from "./ProductCard";
import { products } from "./products";

const ProductList = ({ cartList, setCartList, cartPrice, setCartPrice }) => {
  return (
    <div className="list">
      {products.map((fruit) => (
        <ProductCard
          fruit={fruit}
          cartList={cartList}
          setCartList={setCartList}
          cartPrice={cartPrice}
          setCartPrice={setCartPrice}
        />
      ))}
    </div>
  );
};

export default ProductList;
