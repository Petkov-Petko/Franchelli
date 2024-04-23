import { createContext, useEffect } from "react";
import { food_list, top_dishes } from "../assets/assets";
import { useState } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cardItems, setCardItems] = useState({});

  const addToCart = (id) => {
    if (!cardItems[id]) {
      setCardItems((prev) => ({ ...prev, [id]: 1 }));
    } else {
      setCardItems((prev) => ({ ...prev, [id]: prev[id] + 1 }));
    }
  };

  const removeFromCart = (id) => {
    setCardItems((prev) => ({ ...prev, [id]: prev[id] - 1 }));
  };

  useEffect(() => {
    console.log(cardItems);
  }, [cardItems]);

  const contextValue = {
    top_dishes,
    food_list,
    cardItems,
    addToCart,
    removeFromCart,
    setCardItems,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
