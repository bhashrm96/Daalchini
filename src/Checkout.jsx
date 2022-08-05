import React from "react";
import "./components/Styles/checkout.css"
import IncDecCounter from "./components/IncDecCounter"
import Footerbar from "./components/Footerbar-check"
import {useLocation} from 'react-router-dom'

function Checkout()
{
    const location = useLocation()
    return(
        <>
        <div className="checkout">
            <h3 style={{marginTop:"16px", marginBottom: "2px"}}>Checkout</h3>
            <img src="" alt="" />
        </div>
        <h5 style={{marginTop:"34px", marginLeft:"26px"}}>PICK UP</h5>
        <hr></hr>
        <div className="pickup-address">
            <h4 style={{marginTop:"9px"}}>Test</h4>
            <h4>Dalchini Office Noida Uttar Pradesh</h4>
            <h5 style={{marginBottom:"40px"}}>Order Expires within 30 mins</h5>
        </div>
        <h5 style={{marginBottom:"2px", marginLeft:"23px"}}>CART DETAILS</h5>
        <hr></hr>
        <div className="check-cart-details">
            <div className="check-items">
            <h4 style={{marginTop:"27px", marginBottom:"24px"}}>Items</h4>
            <h4>{location.state.title}</h4>
            </div>
            <div className="check-qty">
                <h4 style={{marginTop:"27px", marginBottom:"24px"}}>Qty</h4>
                <IncDecCounter />
            </div>
            <div className="check-amount">
                <h4 style={{marginTop:"27px", marginBottom:"24px"}}>Amount</h4>
                <h4>Rs. {location.state.price}</h4>
            </div>
        </div>
        <hr></hr>
            <div className="check-final-amt">
                <h3>Total</h3>
                <h3>Rs. 1</h3>
            </div>
        <Footerbar />
        </>
    )
}

export default Checkout;