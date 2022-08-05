import React from "react";
import './Styles/Auth.css'
import {useNavigate} from 'react-router-dom'

function Auth(props)
{
    const navigate = useNavigate()

    function handleclick() {
        navigate('/checkout', {state:{title:props.title, price:props.price}})
    }
    return(
        <>

        {props.auth && <div className="window">
        </div>}
        <div style={{height: props.auth ? '250px' : '70px'}}  className="auth-container">

            <div  className="auth-top">
            <h3 style={{marginBottom: "20px", marginTop: "16px"}}>Login</h3>
            <hr />
            </div>
            <form onSubmit={handleclick}>
                <input type="text" placeholder="Enter your phone number" required />
                <button  style={{cursor: 'pointer'}}>Submit</button>             
            </form>
        </div>
        </>
    )


}

export default Auth