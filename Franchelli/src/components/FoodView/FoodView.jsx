import React, { useContext } from "react";
import "./FoodView.css";
import { StoreContext } from "../../context/StoreContext.jsx";
import FoodItem from "../FoodItem/FoodItem.jsx";

const FoodView = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="food-display" id="food-display">
      <h2>Dishes</h2>
      <div className="food-list">
        {food_list.map((item, index) => {
            return <FoodItem key={index} {...item} />;
        })}
      </div>
    </div>
  );
};

export default FoodView;
