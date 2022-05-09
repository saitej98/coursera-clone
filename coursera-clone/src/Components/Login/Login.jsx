import React from "react";
import "./Login.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handlechange = (e) => {
    const { id, value } = e.target;

    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async () => {
    try {
      let data = await axios.post(
        "https://courseera-backend-api.herokuapp.com/login",
        formData
      );
      localStorage.setItem("username", JSON.stringify(data.data.user.name));
      return navigate("/");
      document.getElementsByClassName("login").innerHTML = "";
    } catch (error) {
      alert("Entered wrong email or password");
    }
  };
  const handleClick = () => {
    navigate("/signup");
  };

  return (
    <div id="box">
      <div className="loginDiv">
        <h1 className="main_head">Welcome Back</h1>

        <div className="login_inputDiv">
          <label htmlFor="Full Name" className="login_pw_head">
            EMAIL
          </label>
          <br />
          <input
            type="email"
            placeholder="name@ email.com"
            className="login_pw"
            id="email"
            onChange={handlechange}
          ></input>
          <br />

          <label htmlFor="Full Name" className="login_pw_head">
            PASSWORD
          </label>
          <br />
          <input
            type="password"
            placeholder="Enter your  Password"
            className="login_pw"
            id="password"
            onChange={handlechange}
          ></input>
          <br />

          <button onClick={handleSubmit} id="signup_input">
            Login
          </button>
          <div id="line">
            <div>
              <hr />
            </div>
            Or
            <div>
              <hr />
            </div>
          </div>
          <div id="logobox">
            <div className="boxes" id="fb">
              <img src="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" />
              <h4 id="social">Continue with FACEBOOK</h4>
            </div>

            <div>
              <div className="boxes" id="google">
                <img src="https://www.teambonding.com/wp-content/uploads/2018/07/google.jpg" />
                <h4 id="social">Continue with GOOGLE</h4>
              </div>
            </div>
          </div>

          <div className="hv_account">
            New to Coursera{" "}
            <span id="sign-up" onClick={handleClick}>
              Sign up
            </span>
          </div>
          <hr className="hr_line_login"></hr>
        </div>
        <h4 className="below_head">Log in with your organization</h4>
        <h5 className="condition">
          Having trouble logging in? <a hreaf="#">Learner help center</a>{" "}
        </h5>

        <h5 className="condition">
          This site is protected by reCAPTCHA Enterprise and <br />
          the Google{" "}
          <a href="#" className="condition_tag">
            privacy policy
          </a>{" "}
          and{" "}
          <a href="#" className="condition_tag">
            Terms of services
          </a>{" "}
          apply
        </h5>
      </div>
    </div>
  );
};
export default Login;
