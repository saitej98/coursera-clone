import React, { useState } from "react"
import { Drawer, IconButton,Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography} from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
export const DrawerCoomponent=()=>{
    const [openDrawer,setOpenDrawer]=useState(false);
    const arr1=["For Enterprise","For Universities","Find your new career"]
    const arr2=["Take a free course","Earn a degree","Earn a certificate","Advance your career"]
    const arr3=["Data Science","Business","Computer Science","Information Technology","Language Learning","Health","Presonal Development","Physical Science and Engineering","Social Sciences","Arts and Humanities","Math and Logic"]
    return(
        <React.Fragment>
         <Drawer open={openDrawer}
         onClose={()=>setOpenDrawer(false)}>
           <List >
           <Button sx={{marginLeft:"15%",marginTop:"0.5%"}}>LOG In</Button>
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