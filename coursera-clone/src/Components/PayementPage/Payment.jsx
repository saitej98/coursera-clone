import React from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const navigate = useNavigate();

  const submitfun = (e) => {
    e.preventDefault();
    //   alert("Payment susseful");
    return navigate("/checkout");
  };

  return (
    <div className="Container_Payment">
      <div className="left_payment">
        <div className="logo_div">
          <img src="https://iconape.com/wp-content/uploads/1/12/google-pay-logo-0%D9%A2.png"></img>
          <img src="https://pixlok.com/wp-content/uploads/2021/05/PhonePe-Icons-PNG-Image-300x300.jpg"></img>
          <img src="https://p.kindpng.com/picc/s/12-123392_transparent-paytm-logo-png-nerd-badge-png-download.png"></img>
          <img src="https://is3-ssl.mzstatic.com/image/thumb/Purple114/v4/49/3b/cd/493bcd27-9434-74c6-77c5-de7514e870d3/AppIcon-0-0-1x_U007emarketing-0-0-0-10-0-0-85-220.png/1024x1024bb.png"></img>
        </div>
        <h1 className="payment_heading">Online Payment Made Easy For You.</h1>
        <p className="payment_para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          facere delectus, laud
        </p>
        <div className="form_div">
          <h1 className="payment_heading">Payment</h1>
          <form onSubmit={(e) => submitfun(e)}>
            <input
              className="name"
              type="text"
              placeholder="Name on Card*"
              required
            ></input>
            <br></br>
            <br></br>
            <input
              className="card_number"
              type="number"
              placeholder="Card Number*"
              required
            ></input>
            <br></br>
            <br></br>
            <input
              className="date"
              type="date"
              placeholder="Expiry Date*"
              required
            ></input>
            <input
              className="security"
              type="number"
              placeholder="Security Code*"
              min="100"
              max="999"
              required
            ></input>
            <br></br>
            <br></br>
            <input className="submitbtn" type="submit"></input>
          </form>
        </div>
      </div>

      <div className="right_payment">
        <div className="ist_img">
          <img src="https://techsathi.com/wp-content/uploads/2020/05/18769-1024x681.jpg"></img>
        </div>
        <div className="iind_img">
          <img src="https://www.paymentvision.com/wp-content/uploads/2019/11/mobile-app-newthumb.jpg"></img>
        </div>
      </div>
    </div>
  );
};

export default Payment;
