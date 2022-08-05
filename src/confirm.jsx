import React from "react";
import './components/Styles/confirm.css'
import {Link} from 'react-router-dom'

function Confirm() {
  return(
    <>
    <div className="confirm-container">
    <div style={{width: '500px',backgroundColor: "#15b077", color: 'white', padding: '30px', borderRadius: '20px', textAlign: 'center'}}>
        <h1>Order Confirmed!</h1>
    </div>
    <Link to='/'>Home</Link>
    </div>
    </>
  )
}

export default Confirm;
