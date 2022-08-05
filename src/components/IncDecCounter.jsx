import React from "react";
import "./Styles/IncDecCounter.css"
import {useState} from "react";

function IncDecCounter(){
  let [num, setNum]= useState(0);
  let incNum =()=>{
    if(num<10)
    {
    setNum(Number(num)+1);
    }
  };
  let decNum = () => {
     if(num>0)
     {
      setNum(num - 1);
     }
  }
 let handleChange = (e)=>{
   setNum(e.target.value);
  }
   return(
    <>
        <div class="incdec-container">
          <button class="decbtn" type="button" onClick={decNum}>-</button>
          <input type="text" class="form-control" value={num} onChange={handleChange}/>
          <button class="incbtn" type="button" onClick={incNum}>+</button>
        </div>
    </>
  );
}

export default IncDecCounter;