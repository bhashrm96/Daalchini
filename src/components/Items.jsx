import React, {useEffect, useState} from "react";
import "./Styles/items.css"
import IncDecCounter from "./IncDecCounter";
import Footerbar from "./Footerbar";

function Items(props)
{
    const [state, setState] = useState(false)
    const [data, setData] = useState({
        title:props.title,
        price: props.price
    })

    function handleclick()
    {
        setState(true)
        console.log(data.title)
    }

    

    return(
        <>

        
        <div className="all-items" style={{width:'100%'}}>
            <div className="items" style={{width:'100%'}}>
            <img src={`${props.image}`} alt="" />
            <div style={{width:'100%'}}>
            <h2 className="item-heading" style={{marginBottom: '2px'}} >{props.title}</h2>
            <p className="item-desc" style={{marginBottom: '15px'}}>{props.desc}</p>
            <div className="items-bottom">
            <div className="item-price">
            <h2 style={{display: 'inline',marginRight: '18px'}}>₹{props.price}</h2>
            <h2 style={{display: 'inline', textDecoration: 'line-through'}}>{props.offer}</h2>
            </div>
            <button style={{display: state? "none":null}} onClick={handleclick} className="add">Add</button>
            {state && <IncDecCounter />}
            </div>
            </div>
            </div>
            
        </div>
        <hr></hr>
        <Footerbar title={data.title} price={data.price}  />
        </>
    )
}

export default Items