import { Container,Grid,Box, Link } from "@mui/material"
export const FooterComponent=()=>{
    console.log("q")
    let arr1=["About","What We Offer","Leadership","Careers","Catalog","Coursera Plus","Professional Certificates",
"MasterTrack® Certificates","Degrees","For Enterprise","For Government","For Campus","Become a Partner","Coronavirus Response"];
let arr2=["Learners","Partners","Developers","Beta Testers","Translators","Blog","Tech Blog","Teaching Center"]
let arr3=["Press","Investors","Terms","Privacy","Help","Accessibility","Contact","Articles","Directory","Affiliates"];
    return (
        <>
          <hr />
         <footer>
     
           <Box sx={{border:"1px solid transparent",marginTop:"70px"}}>
               <Container maxWidth="lg">
                   <Grid container spacing={5} >
                   <Grid item xs={12} sm={4}  > 
                  <Box ><h3>Coursea</h3></Box>
               {arr1.map((e)=>{
                   return <p>{e}</p>
               })}
                   </Grid>
               {/* two */}
               <Grid item xs={12} sm={4}  > 
                  <Box ><h3>Community</h3></Box>
               {arr2.map((e)=>{
                   return <p>{e}</p>
               })}
                   </Grid>
                   {/* three */}
                   <Grid item xs={12} sm={2}  > 
                  <Box ><h3>More</h3></Box>
               {arr3.map((e)=>{
                   return <p>{e}</p>
               })}
                   </Grid>
                   {/* for images */}
                    <Grid sm={2} xs={12}  sx={{marginTop:"60px"}}>
                        <a href="https://apps.apple.com/app/apple-store/id736535961">
                        <img src="https://d3njjcbhbojbot.cloudfront.net/web/images/icons/download_on_the_app_store_badge_en.svg"></img>
                        </a>
                   <a href="https://play.google.com/store/apps/details?id=org.coursera.android">
                   <img src="https://d3njjcbhbojbot.cloudfront.net/web/images/icons/en_generic_rgb_wo_45.png" style={{width:"135px",height:"40px",marginTop:"10px"}} alt="" />
                   </a>
                   
                    <img   style={{marginTop:"10px"}} src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d3njjcbhbojbot.cloudfront.net/web/images/icons/2018-B-Corp-Logo-Black-S.png?auto=format%2Ccompress&dpr=1&w=151&h=120&q=40" alt="" />
                    </Grid>
                   

                   </Grid>
               </Container>
               </Box> 
        </footer></>
       
    )


}