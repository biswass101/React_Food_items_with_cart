import React, { useContext, useState } from "react";
import cartBg from "../../assets/images/illustration-empty-cart.svg";
import crossIcon from "../../assets/images/icon-remove-item.svg";
import { CartContext } from "../../Context/CartContext";
const AddToCartLists = () => {
  const {
    data,
    setData,
    cartItems,
    setCartItems
  } = useContext(CartContext);
  
  console.log(cartItems);
  let totalAdded = 0;
  let addedThings = [];
  for (let item in cartItems) totalAdded += cartItems[item];
  for (const key in cartItems) {
    data.map((itemInfo) => {
      if (key == itemInfo.id) addedThings.push(itemInfo);
    });
  }

  // console.log(addedThings);
  return (
    <div className="cart-container bg-white w-full max-h-[30rem] p-5 rounded-xl">
      <div className="flex flex-col justify-start items-center gap-5 cart-title-details">
        <h1 className="text-xl text-orange-600 font-bold self-start">
          Your Cart <span>{`(${totalAdded})`}</span>
        </h1>
        {totalAdded === 0 ? (
          <>
            <img src={cartBg} alt="" />
            <p className="text-gray-500">Your added item will appear here</p>
          </>
        ) : (
          <div className="orderd-container self-start w-full">
            {addedThings.map(
              (itemInfo, idx) =>
                cartItems[itemInfo.id] !== 0 && (
                  <div
                    key={idx}
                    className="ordered-itmes-details flex flex-col justify-start relative"
                  >
                    <img
                      onClick={() => {
                        setCartItems((prev) => ({...prev, [itemInfo.id] : prev[itemInfo.id] - 1}))
                      }}
                      className="absolute top-5 right-0 h-4 w-4 p-[0.1rem] border border-gray-600 hover:border-black hover:border-[1.5px] rounded-full"
                      src={crossIcon}
                      alt=""
                    />
                    <h1 className="font-semibold">{itemInfo.name}</h1>
                    <div className="item-info-cal flex justify-start gap-8 max-w-[11rem]">
                      <p className="font-semibold text-orange-700">
                        {cartItems[itemInfo.id] + "x"}
                      </p>
                      <p className="text-gray-600">
                        {"@ " + "$" + itemInfo.price}
                      </p>
                      <p className="text-gray-600">
                        ${itemInfo.price * cartItems[itemInfo.id]}
                      </p>
                    </div>
                    <hr className="h-1 w-full mt-3" />
                  </div>
                )
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AddToCartLists;
