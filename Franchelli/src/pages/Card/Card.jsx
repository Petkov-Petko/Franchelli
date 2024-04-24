import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Card = () => {
  const { cardItems, food_list, removeFromCart, cardTotalAmount } = useContext(StoreContext);
  
  const navigate = useNavigate();

  return (
    <div className="card">
      <h1>Card</h1>
      <div className="card-items">
        <div className="card-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cardItems[item.id] > 0) {
            return (
              <>
                <div
                  className="card-items-content card-items-title"
                  key={index}
                >
                  <img src={item.image}></img>
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cardItems[item.id]}</p>
                  <p>${cardItems[item.id] * item.price}</p>
                  <button onClick={() => removeFromCart(item.id)}>X</button>
                </div>
                <hr />
              </>
            );
          }
        })}
      </div>
      <div className="card-total">
        <h2>Card Totals</h2>
        <div className="card-total-details">
          <p>Subtotal</p>
          <p>${cardTotalAmount()}</p>
        </div>
        <hr/>

        <div className="card-total-details">
          <p>Delivery fee</p>
          <p>${3}</p>
        </div>
        <hr/>
        <div className="card-total-details">
          <p>Total</p>
          <p>${cardTotalAmount() + 3}</p>
        </div>
        <button onClick={() => navigate("/Franchelli/order")}>Checkout</button>
      </div>
    </div>
  );
};

export default Card;
