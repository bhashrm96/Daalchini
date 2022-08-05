import React from "react";
import { useState } from "react";
import "./Styles/footerbar.css"
import Cart from './Cart';
import Auth from "./auth";

function Footerbar(props)
{
    const [state, setState] = useState(false)
    const [auth, setAuth] = useState(false)

    function handleclick()
    {
        setAuth(false)
        setState(pValue =>{
            return  !pValue
        });

    }

    function handleclickCheckout()
    {
        setState(false)
        setAuth(true);
    }

    return(
        <>
        <Auth title={props.title} price={props.price} auth={auth} />
        <div className="fbar">
            <div onClick={handleclick} className="cart-opener">
                <div className="cart-details">
                    <h3 style={{marginTop: "2px"}}>1 Item(s)</h3>
                    <h3 style={{marginTop: "2px"}}>Total Rs. 1</h3>
                </div>
                <div className="cart-arrow">
                </div>
            </div>
                <button onClick={handleclickCheckout} style={{height: '50px', padding: '0 10px', borderRadius: '5px'}} className="fbtn">Continue</button>
        </div>
        <Cart title={props.title} price={props.price} changedState = {state}/>
        </>
    )


}

export default Footerbar