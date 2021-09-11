import React from 'react';
import "./Header.css"
import img from "../../images/logo.png"
const Header = () => {
    return (
        <div className="imageAlign">
           <img src={img} alt="images" />
           <div className="nav">
               <a href="/shop">Shop</a>
               <a href="/review">Review</a>
               <a href="/management">management</a>
           </div>
        </div>
    );
};

export default Header;