
import React from 'react';
import "./Login.css"



const Login = () => {
  return (
    <div className='box'>
        
           <div className='loginDiv'>
           <h1 className='main_head'>Welcome Back</h1>
               

               <div className='login_inputDiv'>
                   

                 <label htmlFor="Full Name" className='login_pw_head'>EMAIL</label><br />
                 <input type = "email" placeholder='name@ email.com' className='login_pw'></input><br />

                  <label htmlFor="Full Name" className='login_pw_head'>PASSWORD</label><br />
                 <input type = "password" placeholder='Enter your  Password' className='login_pw'></input><br />
                   
                <button id = "signup_input">Login</button>
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


                 
                   

                    <div className='hv_account'>New to Coursera <a href = "#">Sign up</a></div>
                    <hr className='hr_line_login'></hr>
              
                </div>
                <h4 className='below_head'>Log in with your organization</h4>
                 <h5 className='condition'> 
                 Having trouble logging in? <a hreaf ="#">Learner help center</a> </h5>

                 
                 <h5 className='condition'>This site is protected by reCAPTCHA Enterprise and <br /> 
                 the Google <a href= "#" className='condition_tag'>privacy policy</a> and <a href= "#" className='condition_tag'>Terms of services</a>  apply
                 </h5>
           </div>
           

          
    </div>
  )
}
export default Login
