import React from "react"


 const Card=(props)=>{
    return(
        <div className="first_step_container">
        <div className="card">
        <div className="div_img"><img src={props.imgsrc}/></div>
        <div className="card_title"> <p> {props.title}</p></div>
        <div className="card_short"> <p>{props.short}</p></div>
        <div className="vertical_line"></div>
        <div className="card_quantity"> {props.quantity}</div>
        <div className="card_description"> <p> {props.description}</p> </div>
        </div>

        
     
        </div>
    )
}

export default Card