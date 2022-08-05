import React from "react";
import "./Styles/footerbar.css"
import {useNavigate} from 'react-router-dom'

function Footerbar(props)
{
    const navigate = useNavigate()

    function handleclick()
    {
        navigate('/confirm')
    }

    return(
        <>
        <div className="fbar">
            <button onClick={handleclick} style={{height: '50px', padding: '0 10px', borderRadius: '5px'}} className="fbtn">Continue</button>
        </div>
        </>
    )


}

export default Footerbar