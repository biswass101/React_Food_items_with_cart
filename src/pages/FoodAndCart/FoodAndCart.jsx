import React from "react";
import "./FoodAndCart.css";
import FoodList from "../../components/FoodList/FoodList";
import cartBg from "../../assets/images/illustration-empty-cart.svg";
const FoodAndCart = () => {
  return (
    <div className="food-and-cart flex p-10 gap-2">
      <div className="left-fAc flex flex-col gap-4">
        <div className="food-category-tile font-bold text-4xl">Desserts</div>
        <div className="food-list-container">
          <FoodList />
        </div>
      </div>
      <div className="right-fAc hidden md:flex max-w-[22rem]">
        <div className="cart-container bg-white w-full max-h-[17rem] p-5 rounded-xl">
          <div className="flex flex-col justify-center items-center gap-5 cart-title-details">
            <h1 className="text-xl text-orange-600 font-bold self-start">
              Your Cart <span>(0)</span>
            </h1>
            <img src={cartBg} alt="" />
            <p className="text-gray-500">Your added item will appear here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodAndCart;
