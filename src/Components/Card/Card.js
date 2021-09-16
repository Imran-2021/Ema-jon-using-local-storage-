import React from 'react';
import { Link } from 'react-router-dom';
const Card = (props) => {
    console.log(props.counts)
    const s = props.counts.reduce((total,value)=>{
        // console.log(value.quantity)
   
       
       return total+ value.price* value.quantity;},0);
    
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
            {props.showBTNN ? <Link to="/review"><button>Review Your Order</button></Link>: <Link to="/management"><button>payment</button></Link>}
        </div>
    );
};

export default Card; 