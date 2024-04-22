import React, { useContext } from "react";
import "./FoodItem.css";
import { StoreContext } from "../../context/StoreContext.jsx";

const FoodItem = ({ id, name, price, description, image }) => {

  const {cardItems, addToCart, removeFromCart} = useContext(StoreContext);

  return (
    <div className="food-item">
      <div className="food-item-image">
        <img className="food-item-image" src={image} alt="" />
      </div>
      <div className="food-item-details">
        <h3>{name}</h3>
        <p>{description}</p>
        <p id="price">${price}</p>
      </div>
      <div>
        <button onClick={() => addToCart(id)} className="add-to-cart">Add to cart</button>
      </div>
    </div>
  );
};

export default FoodItem;
