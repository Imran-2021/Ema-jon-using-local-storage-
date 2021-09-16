import React, { useState } from 'react';
import "./Shop.css"
import fakeData from '../../fakeData';
import Products from '../Products/Products';
import Card from '../Card/Card';
import { addToDatabaseCart } from '../../utilities/databaseManager';
const Shop = () => {
    const first10 = fakeData.slice(0, 10)

    const [data,setData]=useState(first10)
    const [count, setCount]=useState([])
    const handleEvent =(pd)=>{
        const card =[...count,pd];
        setCount(card);
        const countt = card.filter(pdd=>pdd.key===pd.key)
        addToDatabaseCart(pd.key, countt.length);
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