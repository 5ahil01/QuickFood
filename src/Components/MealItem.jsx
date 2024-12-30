import React, { useEffect } from "react";
// import { currencyFormatter } from "../Util/formatting";
import Button from "./UI/Button";
import { useContext } from "react";
import { cartContext } from "../Store/CartContext.jsx";

const MealItem = ({ mealData }) => {
  const { addItem, items } = useContext(cartContext);
  function handleAddMealToCart(meal) {
    addItem(meal);

    // console.log(items);
    console.log("hi");
  }

  return (
    <div>
      <img
        src={`http://localhost:3000/${mealData.image}`}
        alt=""
        className="h-[200px]"
      />
      <h4>{mealData.name}</h4>
      <p>Price :{mealData.price}</p>
      <p>{mealData.description}</p>
      <Button onClick={() => handleAddMealToCart(mealData)}>Add to Cart</Button>
    </div>
  );
};

export default MealItem;
