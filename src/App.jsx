import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart";
import NavBar from "./components/NavBar";
import ProductList from "./components/ProductList";
import CartProvider from "./contexts/CartContext";

function App() {
  return (
    <div className="App">
      <Router>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/panier" element={<Cart />} />
          </Routes>
        </CartProvider>
      </Router>
    </div>
  );
}

export default App;
