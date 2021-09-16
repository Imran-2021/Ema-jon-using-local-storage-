import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Card from '../Card/Card';
import ReviewItems from '../ReviewItems/ReviewItems';

const Review = () => {

    const [cart,setCart]=useState([]);
    useEffect(() => {
        const data = getDatabaseCart();
        const productKeys = Object.keys(data);
       const cartProducts=  productKeys.map(x=>{
        const product = fakeData.find(pd=>pd.key===x);
        product.quantity= data[x];
        return product;
       });
     setCart(cartProducts);
    },[])
    const hadnleRemoveProduct =(productKey)=>{
        
        const newCart = cart.filter(pd=>pd.key !==productKey)
        setCart(newCart)
        removeFromDatabaseCart(productKey)

    }
    return (
        <div >
            <h4 style={{textAlign: 'center'}}>cart items - {cart.length}</h4>
           <div className="container-shop">
                <div>
                {
                cart.map(x=> <ReviewItems  hadnleRemoveProduct={hadnleRemoveProduct } key={x.eky} pd={x}/>)
                }
                </div>
                <div className="innerContainer-card">
                   <Card showBTNN={false} counts={cart}/>
                </div>
           </div>
        </div>
    );
};

export default Review;