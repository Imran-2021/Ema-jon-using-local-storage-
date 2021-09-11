import React from 'react';

const Card = (props) => {
    const s = props.counts.reduce((total,value)=>total+value.price,0);
  let shipping = 0;
  if(s>300){
      shipping = 0;
  }
  else if(s>12){
        shipping = 10;
  }else if(s>0)
  {
      shipping =4;
  }
  else{
      shipping =0
  }
  const tex = s/10;
  const formatNumber=num=>{
      const precision= num.toFixed(2)
      return Number(precision)
  }
    return (
        <div>
            <h4>Order Summary!!! </h4>
            <p>items : {props.counts.length} </p>
            <p>items Price : {formatNumber(s)}</p>
            <small>Shipping & Handing : {formatNumber(shipping)}</small> <br />
            <small>Tex : {formatNumber(tex)}</small>
            <h4>Total : {formatNumber(s+ shipping+tex)}</h4>
            <button>Review Your Order</button>
        </div>
    );
};

export default Card; 