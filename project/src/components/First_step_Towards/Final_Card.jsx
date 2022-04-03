import React from "react"
import  Card  from "./Card"
import Sdata from "./Sdata"


 const Final_Card=()=>{
     return(
         <>
             <h1 className="first_step_heading">Take the first step toward your new career</h1>
             <p className="firsr_step_para">  Get professional-level training and earn a credential from a leading company</p>
             {Sdata.map((val,index)=>{
                 return(
                     <Card
                         key={val.id}
                         imgsrc={val.imgsrc}
                         title={val.title}
                         short={val.short}
                         quantity={val.quantity}
                         description={val.description}
                     />
                 )

             })}
         </>
     )
}

export default Final_Card
