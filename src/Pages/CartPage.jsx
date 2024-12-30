import React, { useContext } from "react";
import { cartContext } from "../Store/CartContext";
import Button from "../Components/UI/Button";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { items, removeItem } = useContext(cartContext);
  const cartTotal = items.reduce((totalPrice, item) => {
    return totalPrice + item.quantity * item.price;
  }, 0);

  return (
    <div>
      <div>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.name} - {item.price} - {item.quantity}
              <Button onClick={() => removeItem(item.id)}>Remove</Button>
            </li>
          ))}
        </ul>
      </div>
      <div>Total{cartTotal}</div>
      <Link to="/payment">
        <Button>Checkout</Button>
      </Link>
    </div>
  );
};

export default CartPage;
