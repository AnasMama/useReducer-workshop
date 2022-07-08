import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart";
import NavBar from "./components/NavBar";
import ProductList from "./components/ProductList";
import { products } from "./components/products";

const initialCart = products.map((fruit) => ({ ...fruit, quantity: 0 }));

function App() {
  const [cartList, setCartList] = useState(initialCart);
  const [cartPrice, setCartPrice] = useState(0);

  return (
    <Router>
      <div className="App">
        <NavBar cartList={cartList}/>
        <Routes>
          <Route
            path="/"
            element={
              <ProductList
                cartList={cartList}
                setCartList={setCartList}
                cartPrice={cartPrice}
                setCartPrice={setCartPrice}
              />
            }
          />
          <Route
            path="/panier"
            element={<Cart cartList={cartList} cartPrice={cartPrice} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
