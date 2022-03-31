import React from "react";
import "./ad.css";

export default function Ad() {
  return (
    <div className="parent">
      <div className="flex">
        <div>
          <h2>Accelerate business transformation</h2>
          <p>
            With Coursera for Teams, you can train your employees with
            world-class content.
          </p>
          <button className="off">GET 10% off</button>
        </div>
        <div>
          <img
            src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-promounit-images.s3.amazonaws.com/89/bf58f588c84773bd5d00d431a60a7b/MCR2021-932-PromoUnits-C4Teams-Generic-1.png?auto=format%2Ccompress&dpr=1&w=172"
            alt=""
          />
        </div>
      </div>
      <div className="flex">
        <div>
          <h2>Invest in your professional goals with Coursera Plus</h2>
          <p>
          Get unlimited access to 7,000+ courses for one all-inclusive subscription price.
          </p>
          <button className="off">Learn more</button>
        </div>
        <div>
          <img
            src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-promounit-images.s3.amazonaws.com/d0/f1251094f64ce186ba7080d78ea6b2/MCR2021-791_CPlus_Promo_Unit_784x1096-LATAM.png?auto=format%2Ccompress&dpr=1&w=172"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
