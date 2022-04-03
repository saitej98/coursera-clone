import React from "react"
import ReactDOM from "react-dom"
import { FinalAccordin } from "../Accordin/FinalAccordin"
import { Professional_Certificates } from "../Certificates/Professional_Certificate"
import { Explore_Carrer } from "../Explore_Carrers"
import Complete_Find_A_Carrer from "../Find_A_Carrer/Complete_Find_A_Carrer"
import { Finish_Professional_Certificate } from "../Finish_Professional_Certificate/Finish_Professional_Certificate"
import Final_Card from "../First_step_Towards/Final_Card"


const CarrerAcademy=()=>{
    return(
<div className="App">
  <Explore_Carrer/>
  <Final_Card/>
  <Professional_Certificates/>
  <Complete_Find_A_Carrer/>
  <Finish_Professional_Certificate/>
  <FinalAccordin/>

</div>
        
    )
}


export default CarrerAcademy
