import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import {useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const SingleProductPage=()=>{
   
    const getdata= useSelector((store)=>store.data);
    let {id}=useParams();
  
    // console.log("getdata",getdata);
   let filtered= getdata.filter((e)=>{
      
        if(e._id==id){
            // console.log("e",e);
            return true;
        }
    })
    
  let obj=filtered[0];
  console.log("obj",obj)
    
    useEffect(()=>{

    },[])

    return(
        <>
        <Grid container spacing={2} sx={{border:"1px solid transparent",marginTop:"45px",backgroundColor:"#165da4" }}>
        <Grid item xs={12} md={7} sx={{border:"1px solid transparent",color:"white"}}>
            <p>Browse {`>`} Computer Scince {`>`} Mobile and Web Development</p>
        <h2 style={{marginTop:"70px"}}>{obj.title}</h2>
        <p>Build Complete Web and Hybrid Mobile Solutions. Master front-end web, hybrid mobile app and server-side development in three comprehensive courses.</p>
        <button style={{padding:"10px",backgroundColor:"#a78337",color:"white",border:"none"}}>Enroll Now</button>
        <p>38,781 students already enrolled</p>
        <h3>About:</h3>
        <p>{obj.about1}</p>
        <p>{obj.about2}</p>
        <p>{obj.about3}</p>
        </Grid>
        <Grid item xs={12} md={5} sx={{border:"1px solid transparent",color:"white"}}>
        <h4 style={{marginTop:"70px"}}>{obj.place}</h4>
        </Grid>



        </Grid>
       
        </>
    )
}

