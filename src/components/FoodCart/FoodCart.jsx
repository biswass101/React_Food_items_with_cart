import React, { useState } from "react";
import "./FoodCart.css";
import plusIcon from "../../assets/images/icon-increment-quantity.svg";
import minusIcon from "../../assets/images/icon-decrement-quantity.svg";
import addToCartIcon from "../../assets/images/icon-add-to-cart.svg";
const FoodCart = ({ value, cartItems, setCartItems, itemQuantity, setItemQuantity }) => {
    // console.log(value);
  const [isQuantityChaning, setIsQuantityChanging] = useState(false);
  return (
    <div className="food-cart-container flex flex-col gap-8 max-w-[17rem] mx-auto">
      <div className="img-and-addTc-container w-full min-h-[12rem] min-w-[12rem] relative">
        <img
          className="w-full h-full rounded-xl"
          src={value.image.desktop}
          alt=""
        />

        {(isQuantityChaning && itemQuantity !== 0) ? (
          <div className="add-to-c-btn absolute  bottom-[-7%] mr-3 xl:mr-0 left-[23%] xl:left-[20%] flex justify-center items-center gap-7 border border-none bg-orange-700 text-white py-1 px-4 xl:py-2 xl:px-6 rounded-3xl">
            <img
              onClick={() => {
                setItemQuantity(itemQuantity - 1)
                if(cartItems[value.id] > 0)
                {
                  setCartItems((prev) => ({...prev, [value.id] : prev[value.id] - 1}))
                }
              }}
              className="border border-white rounded-full py-2 px-1 cursor-pointer"
              src={minusIcon}
            />
            <span>{itemQuantity}</span>
            <img
              onClick={() => {
                setItemQuantity(itemQuantity + 1)
                if(!cartItems[value.id]) {
                  setCartItems((prev) => ({...prev, [value.id] : 1}))
                }
                else {
                  setCartItems((prev) => ({...prev, [value.id] : prev[value.id] + 1}))
                }
              }}
              className="border border-white rounded-full p-1 cursor-pointer"
              src={plusIcon}
              alt=""
            />
          </div>
        ) : (
          <button onClick={() => {
            setIsQuantityChanging(true)
            setItemQuantity(itemQuantity + 1)
            if(!cartItems[parseInt(value.id)]) {
              setCartItems((prev) => ({...prev, [value.id] : 1}))
            }
            else {
              setCartItems((prev) => ({...prev, [value.id] : prev[value.id] + 1}))
            }
          }} className=" add-to-c-btn absolute  bottom-[-7%] mr-3 xl:mr-0 left-[23%] xl:left-[20%] flex gap-1 border border-gray-600 bg-white py-1 px-4 xl:py-2 xl:px-6 rounded-3xl">
            <img className="min-w-4" src={addToCartIcon} alt="" />
            <p>Add to cart</p>
          </button>
        )}
      </div>
      <div className="cart-details-texts flex flex-col">
        <p className="text-gray-600">{value.category}</p>
        <h1 className="text-xl font-semibold">{value.name}</h1>
        <p className="text-xl text-orange-600 font-semibold">$ {value.price}</p>
      </div>
    </div>
  );
};

export default FoodCart;
