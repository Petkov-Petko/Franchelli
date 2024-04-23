import React, { useContext } from "react";
import "./FoodView.css";
import { StoreContext } from "../../context/StoreContext.jsx";
import FoodItem from "../FoodItem/FoodItem.jsx";

const FoodView = ({ category }) => {
  const { food_list, top_dishes } = useContext(StoreContext);

  const itemsToDisplay =
    category === "Top Dishes"
      ? top_dishes
      : food_list.filter((item) => item.category === category);

  return (
    <div className="food-display" id="food-display">
      <h2>{category}</h2>
      <div className="food-list">
        {itemsToDisplay.map((item, index) => (
          <FoodItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default FoodView;
