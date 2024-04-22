import React, { useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header.jsx";
import MenuList from "../../components/Menu/MenuList.jsx";
import FoodView from "../../components/FoodView/FoodView.jsx";

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header />
      <MenuList category={category} setCategory={setCategory} />
      <FoodView category={category} />
    </div>
  );
};

export default Home;
