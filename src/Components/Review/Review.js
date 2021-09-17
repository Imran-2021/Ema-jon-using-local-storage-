import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Card from '../Card/Card';
import ReviewItems from '../ReviewItems/ReviewItems';
import happyImage from "../../images/giphy.gif"
const Review = () => {

    const [cart,setCart]=useState([]);
    const [orderPlaced,setOrderPlaced]=useState(false);


    const handleCard=()=>{
        setCart([])
        setOrderPlaced(true)
        processOrder()

    }
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
    let thankyou ;
    if(orderPlaced){
        thankyou= <img style={{width:"500px"}} src={happyImage} alt="imge"/>
    }
    return (
        <div >
            <h4 style={{textAlign: 'center'}}>cart items - {cart.length}</h4>
           <div className="container-shop">
                <div>
                {
                cart.map(x=> <ReviewItems  hadnleRemoveProduct={hadnleRemoveProduct } key={x.eky} pd={x}/>)
                }
                {
                    thankyou
                }
                </div>
                <div className="innerContainer-card">
                   <Card showBTNN={false} counts={cart}><button onClick={handleCard}>place Order</button> </Card>
                </div>
           </div>
        </div>
    );
};

export default Review;