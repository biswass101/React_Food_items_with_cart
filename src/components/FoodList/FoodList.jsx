import React, { useEffect, useState } from 'react'
import './FoodList.css'
import FoodCart from '../FoodCart/FoodCart'
const FoodList = ({cartItems, setCartItems, data, setData, itemQuantity, setItemQuantity}) => {
  return (
    <div className='foodList grid grid-cols-1 gap-y-3 md:grid-cols-2 md:gap-3 xl:grid-cols-3 xl:gap-5'>
        {data && data.map((item, idx) => (
            <FoodCart key={idx} value = {item} itemQuantity={itemQuantity} setItemQuantity={setItemQuantity} cartItems={cartItems} setCartItems={setCartItems}/>
        ))}
    </div>
  )
}

export default FoodList