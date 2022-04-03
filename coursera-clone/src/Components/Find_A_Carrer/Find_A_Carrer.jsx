import React from "react"
import ReactDOm from "react-dom"


const Find_A_Carrer=(props)=>{
    return(
        <>
        <div className="FindCarrers">
        <div className="Find_Carrer_Card">
        <div className="F_C_img_div"><img src={props.imgsrc}/></div>
        <div className="department_div"> <h3> {props.department}</h3></div>
        <div className="about_depart_div"> <p> {props.about_depart}</p></div>
        <div className=" li_div"> <ul> {props. li} </ul></div>
        <div className="ul_div"> 
        <li> {props.ul1} </li> 
        <li> {props.ul2} </li> 
        <li> {props.ul3} </li>   </div>
        <div className="salary_div"> <h3> {props.salary}</h3></div>
        <div className="opening_div"> <h3> {props.  opening}</h3></div>
        <div className="ver_line"></div>
        <div className="recomnd_div"> <h4> {props.recomnd}</h4></div>
        <div className="company_div"> <h3> {props.company}</h3></div>

   
   
   


        </div>

        </div>

        </>
    )

}

export default Find_A_Carrer