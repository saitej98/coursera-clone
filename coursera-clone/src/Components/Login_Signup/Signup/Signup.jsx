import { useState } from 'react';
import React from 'react';
import "./Signup.css";
import axios from "axios"



const Signup = () => {
    
    const [formData,setFormData] = useState({

        fullname:"",
        email:"",
        password:""
     });

    
    
     const handlechange=(e)=>{

        const {id,value} = e.target;
        
        setFormData({...formData,[id]:value})

    }
    const handleSubmit = ()=>{
        axios.post("https://courseera-backend-api.herokuapp.com/register",formData)
    }

  return (
    <div className='box'>
        
           <div className='loginDiv'>
           <h1 className='main_head'>Sign up</h1>
               <h4 className='head_down'>Learn on your own time from top <br /> universities and businesses.</h4>
               

               <div className='login_inputDiv'>
                   <label htmlFor="fullname" className='login_pw_head'>Full Name</label><br />
                 <input type = "text" placeholder='Enter your full Name' className='login_pw' id = "fullname" autoComplete='off' 
                  onChange={handlechange}></input><br />

                 <label htmlFor="email" className='login_pw_head'>Email</label><br />
                 <input type = "email" placeholder='name@ email.com' className='login_pw' autoComplete='off' id = "email"
                   onChange={handlechange}></input><br />

                  <label htmlFor="password" className='login_pw_head'>Password</label><br />
                 <input type = "password" placeholder='Create Password' className='login_pw' autoComplete='off' id = "password"
                    onChange={handlechange}></input><br />
                   
                <button id = "signup_input" onClick = {handleSubmit}>Join for free</button>
                <div id = "line">
            <div><hr /></div>Or
            <div><hr /></div>
            
        </div>
        <div id = "logobox">

            
            <div class = "boxes" id = "fb">
                <img src = "https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"/>
                <h4 id = "social">Continue with FACEBOOK</h4>
            </div>

            <div>
               
                <div class = "boxes" id = "google">
                    <img src = "https://www.teambonding.com/wp-content/uploads/2018/07/google.jpg"/>
                    <h4 id = "social">Continue with GOOGLE</h4>
                </div>
            </div> 
        </div>


                    <div className='hv_account'>Alreday on Coursera <a href = "#">Log in</a></div>
                    <hr className='hr_line_login'></hr>
              
                </div>
                <h4 className='below_head'>Sign up with your organization</h4>
                 <h5 className='condition'>I accept Coursera's <a href= "#" className='condition_tag'>Terms of use</a> and <a href= "#" className='condition_tag'>privacy policy</a><br/>
                 Having trouble logging in? <a hreaf ="#">Learner help center</a> </h5>

                 
                 <h5 className='condition'>This site is protected by reCAPTCHA Enterprise and <br /> 
                 the Google <a href= "#" className='condition_tag'>privacy policy</a> and <a href= "#" className='condition_tag'>Terms of services</a>  apply
                 </h5>
           </div>
           

          
    </div>
  )
}
export default Signup
