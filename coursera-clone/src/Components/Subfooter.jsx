import { Container,Grid,Box, Link } from "@mui/material"
export const SubFooterComponent=()=>{
    console.log("q")
    let arr1=["Google Data Analyst","Google Project Management","Google UX Design","Google IT Support","IBM Data Science","IBM Data Analyst","IBM Data Analytics with Excel and R","IBM Cybersecurity Analyst","IBM Data Engineering",
"IBM Full Stack Cloud Developer","Facebook Social Media Marketing","Facebook Marketing Analytics","Salesforce Sales Development","Salesforce Sales Operations","Intuit Bookkeeping","Preparing for Google Cloud Certification:Cloud Architect","Preparing for Google Cloud Certification: Cloud Data Engineer","Launch your career","Prepare for a certification","Advance your career"];
let arr2=["Free Courses","Learn a Language","Python","Java","Web Design","SQL","Cursos Gratis","Microsoft Excel","Project Management","Cybersecurity","Human Resources","Data Science Free Courses","Speaking English","Content Writing","Full Stack Web Development","Artificial Intelligence","C Programming","Communication Skills","Blockchain"]
let arr3=["Skills for Data Science Teams","Data Driven Decision Making","Software Engineering Skills","Soft Skills for Engineering Teams","Management Skills","Marketing Skills","Skills for Sales Teams","Product Manager Skills","Skills for Finance","Popular Data Science Courses in the UK","Beliebte Technologiekurse in Deutschland","Popular Cybersecurity Certifications","Popular IT Certifications","Popular SQL Certifications","Marketing Manager Career Guide","Project Manager Career Guide","Python Programming Skills","Web Developer Career Guide","Data Analyst Skills","Skills for UX Designers"];
let arr4=["MasterTrack® Certificates","Professional Certificates","University Certificates","MBA & Business Degrees","Data Science Degrees","Computer Science Degrees","Data Analytics Degrees","Public Health Degrees","Social Sciences Degrees","Management Degrees","Degrees from Top European Universities","Master's Degrees","Bachelor's Degrees","Degrees with a Performance Pathway","Bsc Courses","What is a Bachelor's Degree?","How Long Does a Master's Degree Take?","Is an Online MBA Worth It?","7 Ways to Pay for Graduate School","See all certificates"]   
return (
        <>
     
         <footer>
         <hr style={{marginTop:"50px",width:"80%"}} />
           <Box sx={{border:"1px solid transparent",marginTop:"20px"}}>
               <Container maxWidth="lg">
                   <Grid container spacing={5} >
                   <Grid item xs={12} sm={3}  > 
                  <Box ><h3>Start or advance your career</h3></Box>
               {arr1.map((e)=>{
                   return <p>{e}</p>
               })}
                   </Grid>
               {/* two */}
               <Grid item xs={12} sm={3}  > 
                  <Box ><h3>Browse popular topics</h3></Box>
               {arr2.map((e)=>{
                   return <p>{e}</p>
               })}
                   </Grid>
                   {/* three */}
                   <Grid item xs={12} sm={3}  > 
                  <Box ><h3>Popular courses and articles</h3></Box>
               {arr3.map((e)=>{
                   return <p>{e}</p>
               })}
                   </Grid>
                   {/* for images */}
                    <Grid item sm={3} xs={12}  >
                    <Box ><h3>Earn a degree or certificate online</h3></Box>
               {arr3.map((e)=>{
                   return <p>{e}</p>
               })}
                    </Grid>
                   

                   </Grid>
               </Container>
               </Box> 
        </footer></>
       
    )
            }