import React from "react";
import "./FoodCart.css";

import addToCartIcon from "../../assets/images/icon-add-to-cart.svg";
const FoodCart = ({ value }) => {
  //   console.log(value);
  return (
    <div className="flex flex-col gap-8 max-w-[17rem] mx-auto">
      <div className="img-container w-full min-h-[12rem] min-w-[12rem] relative">
        <img className="w-full h-full rounded-xl" src={value.image.desktop} alt="" />
        <button className="absolute  bottom-[-7%] mr-3 xl:mr-0 left-[23%] xl:left-[20%] flex gap-1 border border-gray-600 bg-white py-1 px-4 xl:py-2 xl:px-6 rounded-3xl">
            <img className="min-w-4" src={addToCartIcon} alt="" />
            <p>Add to cart</p>
        </button>
      </div>
      <div className="flex flex-col">
        <p className="text-gray-600">{value.category}</p>
        <h1 className="text-xl font-semibold">{value.name}</h1>
        <p className="text-xl text-orange-600 font-semibold">$ {value.price}</p>
      </div>
    </div>
  );
};

export default FoodCart;
