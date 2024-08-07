import React, { useContext, useState } from "react";
import cartBg from "../../assets/images/illustration-empty-cart.svg";
import crossIcon from "../../assets/images/icon-remove-item.svg";
import { CartContext } from "../../Context/CartContext";

import treeIcon from "../../assets/images/icon-carbon-neutral.svg";
import tick from "../../assets/images/icon-order-confirmed.svg";
const AddToCartLists = () => {
  const { data, setData, cartItems, setCartItems } = useContext(CartContext);
  const [showConfirmOrder, setShowConfirmOrder] = useState(false);
  console.log(cartItems);
  let totalAdded = 0;
  let totalCost = 0;
  let addedThings = [];
  for (let item in cartItems) totalAdded += cartItems[item];
  for (const key in cartItems) {
    data.map((itemInfo) => {
      if (key == itemInfo.id) addedThings.push(itemInfo);
    });
  }

  addedThings.map((item) => {
    totalCost += item.price * cartItems[item.id];
  });

  console.log(addedThings);
  return (
    <div className="cart-container bg-white w-full p-4 md:p-5 rounded-xl">
      <div
        className="
        flex
        flex-col
        justify-start
        items-center
        gap-5
        cart-title-details
        "
      >
        <h1 className="text-xl text-orange-600 font-bold self-start">
          Your Cart <span>{`(${totalAdded})`}</span>
        </h1>
        {totalAdded === 0 ? (
          <>
            <img src={cartBg} alt="" />
            <p className="text-gray-500">Your added item will appear here</p>
          </>
        ) : (
          <>
            <div className="orderd-container self-start w-full max-h-[15rem] overflow-y-scroll">
              {addedThings.map(
                (itemInfo, idx) =>
                  cartItems[itemInfo.id] !== 0 && (
                    <div
                      key={idx}
                      className="
                        ordered-itmes-details
                        flex
                        flex-col
                        justify-start
                        relative
                        "
                    >
                      <img
                        onClick={() => {
                          setCartItems((prev) => ({
                            ...prev,
                            [itemInfo.id]: prev[itemInfo.id] - 1,
                          }));
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
            <div className="total-cost-container flex self-start w-full justify-between items-center">
              <p className="text-gray-600">Order Total</p>
              <span className="font-extrabold text-2xl">${totalCost}</span>
            </div>
            <div className="devliver-motto flex self-start w-full justify-center gap-1 md:gap-2 p-4 md:px-0 rounded bg-[#f7f6f3]">
              <img src={treeIcon} alt="" />
              <p className="text-gray-600 text-sm md:text-[1rem]">
                This is a{" "}
                <span className="font-semibold text-black">carbon-neutral</span>{" "}
                delivery
              </p>
            </div>
            <div className="confim-order-btn flex self-start w-full overflow-hidden justify-center items-center py-4 rounded-3xl bg-orange-700">
              <button
                onClick={() => setShowConfirmOrder(true)}
                className="font-semibold text-white"
              >
                Confirm Order
              </button>
            </div>
            {showConfirmOrder && (
              <div className="fixed w-full bottom-0 md:absolute z-10 confim-order-modal md:bg-black/[0.3] md:inset-0 flex justify-center items-center">
                <div className="bg-white flex flex-col gap-3 items-start p-5 rounded-xl">
                  <img src={tick} alt="" />
                  <h1 className="text-3xl font-bold">Order Confirmed</h1>
                  <p>We hope you enjoy your food!</p>
                  {/* existing codes */}
                  <div className="orderd-container max-h-[15rem] overflow-y-scroll flex flex-col gap-2 self-start w-full bg-gray-50 rounded p-3">
                    {addedThings.map(
                      (itemInfo, idx) =>
                        cartItems[itemInfo.id] !== 0 && (
                          <><div className="flex items-center gap-2">
                            <img
                              className="h-14 w-14 rounded"
                              src={itemInfo.image.thumbnail}
                              alt=""
                            />
                            <div
                              key={idx+1}
                              className="
                        ordered-itmes-details
                        flex
                        flex-col
                        justify-start
                        relative
                        w-full
                        "
                            >
                              <h1 className="font-semibold">{itemInfo.name}</h1>
                              <div className="item-info-cal flex justify-between">
                                <div className="flex gap-2">
                                  <p className="font-semibold text-orange-700">
                                    {cartItems[itemInfo.id] + "x"}
                                  </p>
                                  <p className="text-gray-600">
                                    {"@ " + "$" + itemInfo.price}
                                  </p>
                                </div>
                                <p className="text-gray-600">
                                  ${itemInfo.price * cartItems[itemInfo.id]}
                                </p>
                              </div>
                            </div>
                          </div>
                          <hr className="h-1 w-full mt-3" /></>
                        )
                    )}
                  </div>
                  <div className="total-cost-container flex self-start w-full justify-between items-center">
                    <p className="text-gray-600">Order Total</p>
                    <span className="font-extrabold text-2xl">
                      ${totalCost}
                    </span>
                  </div>
                  <div className="confim-order-btn flex self-start w-full overflow-hidden justify-center items-center py-4 rounded-3xl bg-orange-700">
                    <button onClick={() => {
                      setShowConfirmOrder(false)
                      setCartItems({})
                    }} className="font-semibold text-white">
                      Start New Order
                    </button>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default AddToCartLists;
