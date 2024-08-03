import React, { useContext, useEffect, useState } from 'react'
import './FoodList.css'
import FoodCart from '../FoodCart/FoodCart'
import { CartContext } from '../../Context/CartContext'
const FoodList = () => {
  const {data} = useContext(CartContext)
  return (
    <div className='foodList grid grid-cols-1 gap-y-3 md:grid-cols-2 md:gap-3 xl:grid-cols-3 xl:gap-5'>
        {data && data.map((item, idx) => (
            <FoodCart key={idx} value = {item}/>
        ))}
    </div>
  )
}

export default FoodList