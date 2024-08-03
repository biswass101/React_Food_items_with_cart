import { useEffect, useState } from "react";
import "./App.css";
import { CartContext } from "./Context/CartContext";
import FoodAndCart from "./pages/FoodAndCart/FoodAndCart";

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("../data.json")
      .then((res) => res.json())
      .then((gotData) => setData(gotData));
  }, []);
  // console.log(data);
  const [cartItems, setCartItems] = useState({});
  return (
    <CartContext.Provider value={{
      data,
      setData,
      cartItems,
      setCartItems,

    }}>
      <div className="app-container bg-[#f8f6f6]">
        <FoodAndCart />
      </div>
    </CartContext.Provider>
  );
}

export default App;
