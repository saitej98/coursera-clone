import React, { useState } from "react"
import {AppBar,Typography,Toolbar, Tabs, Tab, InputBase,useMediaQuery,useTheme, Button } from "@mui/material"
 import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
 import SearchIcon from '@mui/icons-material/Search';
import { DrawerCoomponent } from "./DrawerComponent";

export const Navbar=()=>{
    const [value,setValue]=useState();
    const theme=useTheme(null);
   const isMatch=useMediaQuery(theme.breakpoints.down("md"));
    return(
        <React.Fragment>
            <AppBar sx={{backgroundColor:"white"}}>
                <Toolbar>
            {isMatch?
            <>
            <DrawerCoomponent/>
            <Typography sx={{color: "#007bff",
            fontSize:"25px",
            fontWeight:"20px",
            marginLeft:"40%"}}>
                    coursera
                </Typography>
                
                <SearchIcon sx={{color:"black",marginLeft:"auto"}}/>
            </>
        :
        <>
             <Typography sx={{color: "#007bff",
            fontSize:"25px",
            fontWeight:"20px"}}>
                    coursera
                </Typography>
                <Typography sx={{border:"1px solid ", backgroundColor:"#007bff", borderRadius:"5%", marginLeft:"2%",paddingLeft:"1%",paddingRight:"1%",paddingTop:"0.5%",paddingBottom:"0.5%", marginRight:"2%"}}>Explore</Typography>
                <InputBase sx={{color:"black",border:"1px solid black", width:"20%",height:"25px"}}>
                   
                </InputBase>
                <SearchIcon sx={{color:"white", border:"0px solid ",backgroundColor:"#007bff",paddingLeft:"0.2%",paddingRight:"0.2%",height:"25px"}}/>
                <Tabs  value={value} onChange={(e,value)=>{setValue(value)}} indicatorColor="primary">
                    <Tab label="Degrees" sx={{color:"black",fontSize:"10px"}}/>
                    <Tab label="Find Your New Career" sx={{color:"black",fontSize:"10px"}}/>
                    <Tab label="Enterprise" sx={{color:"black",fontSize:"10px"}}/>
                    <Tab label="Universities" sx={{color:"black",fontSize:"10px"}}/>
                    <Tab label="Log in" sx={{color:"black",fontSize:"10px"}}/>
                </Tabs>
                {/* <NotificationsNoneIcon sx={{color:"black"}}/> if person Login only   */}
                <Typography sx={{border:"1px solid ", backgroundColor:"#007bff", borderRadius:"5%", marginLeft:"2%",paddingLeft:"0.5%",paddingRight:"0.5%",paddingTop:"0.5%",paddingBottom:"0.5%", marginRight:"2%"}}>Join For Free</Typography>
        </>    
        }


           
                </Toolbar>
                {/* <DrawerCoomponent/> */}
            </AppBar>
        </React.Fragment>
    )
}