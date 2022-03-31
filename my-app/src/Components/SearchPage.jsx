import { Checkbox, Grid } from "@mui/material"
import { useEffect, useState } from "react"
import axios from "axios";
import { useParams } from "react-router-dom";
export const SearchPage=()=>{
  let [input,setInput]=useState("");
  let [data,setData]=useState([]);
// const handleSubmit=()=>{
//   // console.log(input);
  // getData();
// }
useEffect(()=>{
  getData();
},[])
const getData=()=>{
  console.log("yes")
     axios.get("http://localhost:8080/search").then((res)=>{
       setData([...res.data]);
     })
}

let {name}=useParams();
// console.log("name",name)
    return(<>
    {/* <input type="text" onChange={(e)=>setInput(e.target.value)}/>
    <button onClick={()=>handleSubmit()}>Submit</button> */}
    <Grid container spacing={2} sx={{border:"1px solid red",marginTop:"20px"}}>
  
   
  <Grid item xs={12} md={3} sx={{border:"1px solid brown" }}>
    {/* <h2>xs=6 md=4</h2> */}
 <label>Filter<input type="checkbox"/></label>
  </Grid>
  <Grid item xs={12} md={8} sx={{border:"1px solid pink"}}>
    {/* <h2>xs=6 md=8</h2>
    <h2>xs=6 md=8</h2>
    <h2>xs=6 md=8</h2>
    <h2>xs=6 md=8</h2>
    <h2>xs=6 md=8</h2>
    <h2>xs=6 md=8</h2> */}

    {data.filter((e)=>{
     if(e.language==name){
       console.log(e.language);
       return true;
     }
    }).map((e,i)=>{
      return (
      <div className="subdiv" key={i} style={{display:"flex",margin:"5px"}} > 
      <img src={e.imageurl} style={{width:"150px",height:"150px"}}/>
      <div className="contentContainer" style={{lineHeight:"1.5px",marginLeft:"5px"}}>
        <h3>{e.title}</h3>
        <p style={{color:"grey"}}>{e.place}</p>
        <h4>{e.coursetype}</h4>
         <p>⭐{e.ratings}|{e.students}</p>
         <h4>{e.level}</h4>
      </div>
      </div>
     )
    })}

  </Grid>
</Grid>
    </>)
}