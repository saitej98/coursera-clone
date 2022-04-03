import React, { useState } from "react"
import ReactDOM from "react-dom"

//import React, { useState } from 'react';

const Myaccordin=(props)=>{

    const[show,setshow]=useState(false)

    const fun2=()=>{
        setshow(!show)
    }


    return(
        <>
        <div className='main-heading'>
        <div className="q_symbol">
        <p onClick={fun2}>     {show?  '-' : '+'      }</p>
        <h3 className="Q_heading"> {props.text.question}   </h3>
        </div>
        
      {/* <imgsrc>{props.text.imgsrc}</imgsrc>  */}
      {show&&   <p className='ans'>{props.text.answer}</p>  }
       </div>
  
        </>

    )
}

export default Myaccordin