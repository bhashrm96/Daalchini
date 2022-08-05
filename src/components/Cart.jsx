import React from "react";
import "./Styles/cart.css"
import IncDecCounter from "./IncDecCounter";

function Cart(props)
{
    return(
        <>
        {props.changedState && <div className="window">
        </div>}
        <div style={{height: props.changedState? "316px":"70px"}}  className="cart-container">

            <div className="cart-top">
            <h3 style={{marginBottom: "32px", marginTop: "16px"}}>Cart Details</h3>
            </div>

            <div className="cart-mid">
            <div className="d1">
                <h3 style={{marginBottom: "32px"}}>Items</h3>
                <h3 style={{marginBottom: "32px"}}>{props.title}</h3>
            </div>
            <div className="d2">
                <h3 style={{marginBottom: "32px"}}>Qty</h3>
                < IncDecCounter style={{marginBottom: "32px"}} />
            </div>
            <div className="d3">
                <h3 style={{marginBottom: "32px"}}>Amount</h3>
                <h3 style={{marginBottom: "32px"}}>Rs. {props.price}</h3>
            </div>
            </div>
            <hr></hr>
            <div className="cart-bottom">
                <h3 style={{marginTop: "22px"}}>Total</h3>
                <h3 style={{marginTop: "22px"}}>Rs. {props.price}</h3>
            </div>

        </div>
        </>
    )


}

export default Cart