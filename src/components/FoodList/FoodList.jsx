import React, { useEffect, useState } from 'react'
import './FoodList.css'
import FoodCart from '../FoodCart/FoodCart'
const FoodList = () => {
    const [data, setData] = useState(null)
    useEffect(() => {
        fetch('./../../../data.json')
            .then(res => res.json())
            .then(gotData => setData(gotData))
    }, [])
    // console.log(data);
  return (
    <div className='foodList grid grid-cols-1 gap-y-3 md:grid-cols-2 md:gap-3 xl:grid-cols-3 xl:gap-5'>
        {data && data.map((item, idx) => (
            <FoodCart key={idx} value = {item}/>
        ))}
    </div>
  )
}

export default FoodList