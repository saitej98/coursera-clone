import React from "react"
import ReactDOm from "react-dom"
import Cdata from "./Cdata"
import Find_A_Carrer from "./Find_A_Carrer"


const Complete_Find_A_Carrer=()=>{
    return(
        <>
            <h1 className="Find_Carrer_heading">Find a career that works for you</h1>
            <p className="find_carrer_para">Whatever your background or interests are, Professional Certificates have you covered.</p>

            {Cdata.map((val,index)=>{
                return(

                <Find_A_Carrer
                key={val.id}
                imgsrc={val.imgsrc}
                department={val.department}
                about_depart={val.about_depart}
                li={val.li}
                ul1={val.ul1}
                ul2={val.ul2}
                ul3={val.ul3}
                salary={val.salary}
                opening={val.opening}
                recomnd={val.recomnd}
                company={val.company}

                />
                )
            })}
        </>
    )

}

export default Complete_Find_A_Carrer