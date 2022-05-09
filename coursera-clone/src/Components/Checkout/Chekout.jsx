import React from "react";
import "./checkout.css";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  let navigate = useNavigate();
  const handleClick = () => {
    return navigate("/");
  };
  return (
    <div className="checkout">
      <div className="head">
        <h1 className="courser" onClick={handleClick}>
          Coursera
        </h1>
        <span>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjH4Z7afwkLwnhGaLKDSfRbUynZQtWYi91mQ&usqp=CAU"
            alt=""
          />
        </span>
      </div>
      <div className="content">
        <h2>WE'VE RECEIVED YOUR ORDER!</h2>
        <p>
          Please keep this receipt as record of your payment.
          <br />
          <br /> With this payment,you are eligible to earn a Coursera
          Certificate in this course.We'll send you an email when the course
          opens,and you must earn your Certificate within 180 days of the course
          start date.During this 180-day period,you may attempt the course in
          multiple sessions,if time allows.If you choose not to complete this
          course,you may request a refund at any time within two weeks of the
          course start date in My Purchases.Once you earn your Course
          Certificate,You are no longer eligible for a refund,even if you
          complete the course within the refund period.View our{" "}
          <a href="refund policy"></a>
          <br />
          <br />
          Happy Learning!
          <br />
          <br />
          The Course Team
        </p>
      </div>
      <div className="order">
        <div>
          <h3>
            Order Number: <span>987655</span>
          </h3>
        </div>
      </div>
      <div className="add">
        <button>REVIEW MY ORDER</button>
        <button>CONTACT CUSTOMER CARE</button>
      </div>
    </div>
  );
}
