import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import "./Products.css"
import { Link } from 'react-router-dom';
const Products = (props) => {
    const {name,price,img,seller,key}=props.x
    return (
        <div>
            <div className="innerContainer-shop">
                   <div>
                   <img src={img} alt="" />
                   </div>
                   <div className="xx">
                  <Link to={"/product/" + key}> <p>{name}</p> </Link>
                   <small>by : {seller}</small>
                    <h4> $ {price}</h4>
                    {
                        props.showBTN && <button onClick={()=>props.events(props.x)}> <FontAwesomeIcon icon={faShoppingCart} />  add to card</button>
                    }
                   </div>
                </div>
        </div>
    );
};

export default Products;