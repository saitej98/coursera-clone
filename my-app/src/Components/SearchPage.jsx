import { Checkbox, Grid } from "@mui/material"
import { useEffect, useState } from "react"
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { searchedData } from "../Searchdata/action";
export const SearchPage=()=>{
  let [input,setInput]=useState("");
  let [data,setData]=useState([]);
  const dispatch=useDispatch();
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
       dispatch(searchedData(res.data));
     })
}
const getdata= useSelector((store)=>store.data);
console.log(getdata);

let {name}=useParams();
// console.log("name",name)
    return(<>
    {/* <input type="text" onChange={(e)=>setInput(e.target.value)}/>
    <button onClick={()=>handleSubmit()}>Submit</button> */}
    <Grid container spacing={2} sx={{border:"1px solid transparent",marginTop:"20px",marginTop:"45px" }}>
  
   
  <Grid item xs={12} md={3} sx={{border:"1px solid transparent"}}>
    <h3>Filter By:</h3>
   <h4>Subject</h4>
 <label><input type="checkbox" value={"Information Technology"}/>Information Technology</label>
 <label><input type="checkbox" value={"Business"}/>Business</label>
 <label><input type="checkbox" value={"Data Science"}/>Data Science</label>
 <label><input type="checkbox" value={"Computer Science"}/>Computer Science</label>
  </Grid>
  <Grid item xs={12} md={8} sx={{border:"1px solid transparent"}}>
   

    {data.filter((e)=>{
     if(e.language==name){
       console.log(e.language);
       return true;
     }
    }).map((e,i)=>{
      return (
      <div className="subdiv" key={i} style={{display:"flex",margin:"5px",flexWrap:"wrap",boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px"}} > 
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
<hr style={{width:"90%"}}/>
    </>)
}