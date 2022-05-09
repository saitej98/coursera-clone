import React, { useState } from "react"
import { Drawer, IconButton,Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography,InputBase} from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom";
export const DrawerCoomponent=()=>{
    const [openDrawer,setOpenDrawer]=useState(false);
    const arr1=["For Enterprise","For Universities","Find your new career"]
    const arr2=["Take a free course","Earn a degree","Earn a certificate","Advance your career"]
    const arr3=["Data Science","Business","Computer Science","Information Technology","Language Learning","Health","Presonal Development","Physical Science and Engineering","Social Sciences","Arts and Humanities","Math and Logic"]
    const [input,setInput]=useState("");
    const navigate =useNavigate()
       const handleClick=()=>{
        return navigate(`/search/${input}`);
  }
  const handlelogin=()=>{
    return navigate(`/login`);
}
  
    return(
        <React.Fragment>
         <Drawer open={openDrawer}
         onClose={()=>setOpenDrawer(false)}>
           <List >
             <span style={{border:"1px solid transparent"}}>
             <InputBase sx={{color:"black",border:"1px solid ", width:"70%",height:"23px"}} onChange={(e)=>{setInput(e.target.value)}}>
                   
                   </InputBase>
                   <SearchIcon sx={{color:"white", border:"1px solid ",backgroundColor:"#007bff",paddingLeft:"0.2%",paddingRight:"0.2%",height:"23px",marginBottom:"-7.5px",marginLeft:"-1px"}} onClick={()=>{handleClick()}}/>
             </span>
           
           <Button sx={{marginLeft:"15%",marginTop:"0.5%"}} onClick={handlelogin}>LOG In</Button>
               {arr1.map((e,i)=>{
               return  <ListItemButton key={i} >
                 <ListItemIcon>
                     <ListItemText>
                      {e}
                     </ListItemText>
                 </ListItemIcon>
             </ListItemButton>
               })}
               <Typography sx={{marginLeft:"2%"}}>Goals</Typography>
               {arr2.map((e,i)=>{
               return  <ListItemButton key={i}>
                 <ListItemIcon>
                     <ListItemText>
                      {e}
                     </ListItemText>
                 </ListItemIcon>
             </ListItemButton>
               })}
               <Typography sx={{marginLeft:"2%"}}>Subjects</Typography>
               {arr3.map((e,i)=>{
               return  <ListItemButton key={i}>
                 <ListItemIcon>
                     <ListItemText>
                      {e}
                     </ListItemText>
                 </ListItemIcon>
             </ListItemButton>
               })}
               
               </List>  
         </Drawer>
         <IconButton onClick={()=>{setOpenDrawer(!openDrawer)}}>
        <MenuIcon/>
         </IconButton>
        </React.Fragment>
    )
}