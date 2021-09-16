import React from 'react';

const ReviewItems = (props) => {

    const {name,quantity,key,price} = props.pd;

    return ( 
        <div style={{borderBottom: '2px solid red' ,borderRight: '2px solid red'}} className="innerContainer-card">
            <h3>this is review items . </h3>
            <p>{name}</p>
            <p>quantity: {quantity}</p>
            <p>Price : {price}</p>
            <button onClick={()=> props.hadnleRemoveProduct(key)}>Remove </button>
        </div>
    );
};

export default ReviewItems;
