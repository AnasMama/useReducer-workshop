import ProductCard from "./ProductCard"
import { products } from "./products"





const ProductList = ({ count, setCount }) => {
  return (
    <div className="list">{products.map(fruit => <ProductCard {...fruit} count={count} setCount={setCount} />)}</div>
  )
}

export default ProductList