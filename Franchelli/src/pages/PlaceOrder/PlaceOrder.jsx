import React from "react";
import "./PlaceOrder.css";

const PlaceOrder = () => {
  return <div className="checkOut">
    <h1>Order information</h1>
    <h4>Personal information</h4>
    <hr />
    <form className="checkoutForm">
        <label htmlFor="name">Your name:</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="email">E-mail:</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="phone">Phone:</label>
        <input type="tel" id="phone" name="phone" required />
    </form>
    <hr />
    <h4>Delivery address</h4>
    <form className="checkoutForm">
        <label htmlFor="address">Address:</label>
        <input type="text" id="address" name="address" required />
        <label htmlFor="city">City:</label>
        <input type="text" id="city" name="city" required />       
    </form>
    <hr />
    <h4>Others</h4>
    <form className="checkoutForm">
        <label htmlFor="payment">Payment:</label>
        <select id="payment" name="payment" required>
            <option value="credit">Credit Card</option>
            <option value="debit">Debit Card</option>
            <option value="paypal">Paypal</option>  
            <option value="cash">Cash on Delivery</option>
        </select>
        <label htmlFor="invoice">Invoice:</label>
        <input type="checkbox" id="invoice" name="invoice"  />
        <button type="submit" id="orderBtn">Place order</button>
    </form>
  </div>;
};

export default PlaceOrder;
