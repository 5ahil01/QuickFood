import React, { useEffect, useState } from "react";
import MealItem from "./MealItem";
import { useContext } from "react";

const Meals = () => {
  const [loadedMeals, setLoadedMeals] = useState([]);

  useEffect(() => {
    async function fetchMeals() {
      const response = await fetch("http://localhost:3000/meals");

      if (!response.ok) {
        console.log("👍");
      }

      const meals = await response.json();

      setLoadedMeals(meals);
    }
    fetchMeals();
  }, []);

  return (
    <>
      <div>
        <h1>Meals</h1>
        <ul>
          {loadedMeals.map((meal) => (
            <li key={meal.id}>
              <MealItem mealData={meal} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Meals;
