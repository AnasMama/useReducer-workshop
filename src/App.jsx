import { useReducer, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart";
import NavBar from "./components/NavBar";
import ProductList from "./components/ProductList";
import { products } from "./components/products";
import { reducer } from "./reducer";

const initialCart = products.map((fruit) => ({ ...fruit, quantity: 0 }));

function App() {
  const [cartList, dispatch] = useReducer(reducer, initialCart); 

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
                dispatch={dispatch}
              />
            }
          />
          <Route
            path="/panier"
            element={<Cart cartList={cartList}/>}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
