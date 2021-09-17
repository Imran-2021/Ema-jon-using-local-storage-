import React, { useEffect, useState } from 'react';
import "./Shop.css"
import fakeData from '../../fakeData';
import Products from '../Products/Products';
import Card from '../Card/Card';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
const Shop = () => {
    const first10 = fakeData.slice(0, 10)

    const [data,setData]=useState(first10)
    const [count, setCount]=useState([])

    useEffect(()=>{
        const saveCart = getDatabaseCart();
        const productKeys=Object.keys(saveCart)
        const previousCart = productKeys.map(pkey=>{
            const product = fakeData.find(pd=>pd.key===pkey);
            product.quantity=saveCart[pkey]
            return product;

        })
        setCount(previousCart)
    },[])

    const handleEvent =(pd)=>{
        
        const countt = count.find(pdd=>pdd.key===pd.key)
        let cout=1;
        let newCart;
        if(countt){
            cout= countt.quantity +1;
            countt.quantity= cout;
            const others = count.filter(pdd=>pdd.key !==pd.key);
            newCart=[...others,countt]

        }else{
            pd.quantity=1;
            newCart=[...count,pd]
        }
        setCount(newCart);
        addToDatabaseCart(pd.key, cout);
    }
    
    return (
        <div className="container-shop">
            <div>
            {
                data.map(x=><Products x={x} key={x.key} showBTN={true} events={handleEvent} />)
            }
            </div>
            <div className="innerContainer-card">
                <Card showBTNN={true} counts={count} />
            </div>
        </div>
    );
};
export default Shop;