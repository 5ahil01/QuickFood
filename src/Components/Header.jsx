import React, { useContext } from "react";
import Button from "./UI/Button";
import { cartContext } from "../Store/CartContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { items } = useContext(cartContext);

  const totalCartItems = items.reduce((totalItems, item) => {
    return totalItems + item.quantity;
  }, 0);

  return (
    <div className="flex w-full justify-between">
      <div>QuickFood</div>
      <div>
        <Link to="/cart">
          <Button>Cart ({totalCartItems})</Button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
