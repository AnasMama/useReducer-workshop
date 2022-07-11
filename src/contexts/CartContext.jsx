import { createContext, useReducer } from "react";
import { products } from "../components/products";
import { reducer } from "../reducer";

export const CartContext = createContext(null);

const initialCart = products.map((fruit) => ({ ...fruit, quantity: 0 }));

const CartProvider = ({ children }) => {
  const [cartList, dispatch] = useReducer(reducer, initialCart);

  return (
    <CartContext.Provider value={{ cartList, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
