import React, { useEffect, useState } from "react";
import "./FoodAndCart.css";
import FoodList from "../../components/FoodList/FoodList";
import AddToCartLists from "../../components/AddToCartLists/AddToCartLists";
const FoodAndCart = () => {
  return (
    <div className="food-and-cart flex flex-col justify-center items-center md:items-start md:flex-row p-1 md:p-10 gap-6 md:gap-2">
      <div className="left-fAc flex flex-col gap-4">
        <div className="food-category-tile font-bold text-4xl">Desserts</div>
        <div className="food-list-container">
          <FoodList />
        </div>
      </div>
      <div className="right-fAc flex max-w-[22rem]">
        <AddToCartLists/>
      </div>
    </div>
  );
};

export default FoodAndCart;
