import React, { useEffect, useState } from "react";
import "./FoodAndCart.css";
import FoodList from "../../components/FoodList/FoodList";
import AddToCartLists from "../../components/AddToCartLists/AddToCartLists";
const FoodAndCart = () => {
  const [data, setData] = useState(null)
    useEffect(() => {
        fetch('./../../../data.json')
            .then(res => res.json())
            .then(gotData => setData(gotData))
    }, [])
    // console.log(data);
  const [itemQuantity, setItemQuantity] = useState(0)
  const [cartItems, setCartItems] = useState({})
  return (
    <div className="food-and-cart flex flex-col justify-center items-center md:items-start md:flex-row p-1 md:p-10 gap-6 md:gap-2">
      <div className="left-fAc flex flex-col gap-4">
        <div className="food-category-tile font-bold text-4xl">Desserts</div>
        <div className="food-list-container">
          <FoodList data={data} itemQuantity={itemQuantity} setItemQuantity={setItemQuantity} setData={setData} cartItems={cartItems} setCartItems={setCartItems}/>
        </div>
      </div>
      <div className="right-fAc flex max-w-[22rem]">
        <AddToCartLists data={data} itemQuantity={itemQuantity} setItemQuantity={setItemQuantity} setData={setData} cartItems={cartItems} setCartItems={setCartItems}/>
      </div>
    </div>
  );
};

export default FoodAndCart;
