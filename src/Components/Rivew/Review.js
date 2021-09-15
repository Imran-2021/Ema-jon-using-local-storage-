import React, { useEffect, useState } from 'react';
import { getDatabaseCart } from '../../utilities/databaseManager';

const Review = () => {
    const [cart,setCart]= useState([])
    useEffect(()=>{
        //cart 
        const saveCart= getDatabaseCart();
        console.log(saveCart, "object")
        console.log("object")
    })
    console.log("object")
    return (
        <div>
            <h4>this is reviesw</h4>
        </div>
    );
};

export default Review;
