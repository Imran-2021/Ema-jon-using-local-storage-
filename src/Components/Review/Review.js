import React, { useEffect, useState } from 'react';
import { getDatabaseCart } from '../../utilities/databaseManager';

const Review = () => {
    const [cart,setCart]=useState([])

    useEffect(() => {
        const data = getDatabaseCart();
        console.log(data);
    })
    return (
        <div>
            <h4>this is review file.......</h4>
        </div>
    );
};

export default Review;