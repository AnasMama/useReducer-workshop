import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ cartList }) => {
  let count = 0;
  cartList.forEach((product) => (count += product.quantity));
  return (
    <div className="navbar">
      <Link to="/">Produits</Link>
      <Link to="/panier">
        Mon panier <span>{count}</span>
      </Link>
    </div>
  );
};

export default NavBar;
