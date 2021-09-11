import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import "./Products.css"
const Products = (props) => {
    const {name,price,img,seller}=props.x
    return (
        <div>
            <div className="innerContainer-shop">
                   <div>
                   <img src={img} alt="" />
                   </div>
                   <div className="xx">
                   <p>{name}</p> 
                   <small>by : {seller}</small>
                    <h4> $ {price}</h4>
                    <button onClick={()=>props.events(props.x)}> <FontAwesomeIcon icon={faShoppingCart} />  add to card</button>
                   </div>
                </div>
        </div>
    );
};

export default Products;