import React, { Component } from "react";
import Slider from "react-slick";
import Responsive from "../Coursera/Coursera";
import "./secondbox.css";


export default class PauseOnHoverResponsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true
    };
    return (
      <div className="main">
        <h2> Get Started with These Free Courses </h2>
        <Slider {...settings}>
          <div className="cards">
            <img
              src="/edinburg.png"
              alt=""
            />
            <div style={{ display: "flex" }}>
              <h3>Computer Science: Programming with a Purpose</h3>
              <p className="free">Free</p>
            </div>

            <p>princeton University</p>
            <br />
            <h5>COURSE</h5>
          </div>
          <div className="cards">
            <img
              src="/princeton.png"
              alt=""
            />
            <div style={{ display: "flex" }}>
              <h3>Computer Science: Programming with a Purpose</h3>
              <p className="free">Free</p>
            </div>{" "}
            <p>The University of Edinburgh</p>
            <br />
            <h5>COURSE</h5>
          </div>
          <div className="cards">
            <img
              src="/stanford.png"
              alt=""
            />
            <div style={{ display: "flex" }}>
              <h3>Computer Science: Programming with a Purpose</h3>
              <p className="free">Free</p>
            </div>{" "}
            <p>princeton University</p>
            <br />
            <h5>COURSE</h5>
          </div>
          <div className="cards">
            <img
              src="yonsei-university.png"
              alt=""
            />
            <div style={{ display: "flex" }}>
              <h3>Computer Science: Programming with a Purpose</h3>
              <p className="free">Free</p>
            </div>{" "}
            <p>princeton University</p>
            <br />
            <h5>COURSE</h5>
          </div>
          <div className="cards">
            <img
              src="https://images.unsplash.com/photo-1543373014-cfe4f4bc1cdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGlnaCUyMHJlcyUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80"
              alt=""
            />
            <div style={{ display: "flex" }}>
              <h3>Computer Science: Programming with a Purpose</h3>
              <p className="free">Free</p>
            </div>{" "}
            <p>princeton University</p>
            <br />
            <h5>COURSE</h5>
          </div>
          <div className="cards">
            <img
              src="https://images.unsplash.com/photo-1543373014-cfe4f4bc1cdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGlnaCUyMHJlcyUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80"
              alt=""
            />
            <div style={{ display: "flex" }}>
              <h3>Computer Science: Programming with a Purpose</h3>
              <p className="free">Free</p>
            </div>{" "}
            <p>princeton University</p>
            <br />
            <h5>COURSE</h5>
          </div>
          <div className="cards">
            <img
              src="https://images.unsplash.com/photo-1543373014-cfe4f4bc1cdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGlnaCUyMHJlcyUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80"
              alt=""
            />
            <div style={{ display: "flex" }}>
              <h3>Computer Science: Programming with a Purpose</h3>
              <p className="free">Free</p>
            </div>{" "}
            <p>princeton University</p>
            <br />
            <h5>COURSE</h5>
          </div>
          <div className="cards">
            <img
              src="https://images.unsplash.com/photo-1543373014-cfe4f4bc1cdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGlnaCUyMHJlcyUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80"
              alt=""
            />
            <div style={{ display: "flex" }}>
              <h3>Computer Science: Programming with a Purpose</h3>
              <p className="free">Free</p>
            </div>{" "}
            <p>princeton University</p>
            <br />
            <h5>COURSE</h5>
          </div>
          <div className="cards">
            <img
              src="https://images.unsplash.com/photo-1543373014-cfe4f4bc1cdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGlnaCUyMHJlcyUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80"
              alt=""
            />
            <div style={{ display: "flex" }}>
              <h3>Computer Science: Programming with a Purpose</h3>
              <p className="free">Free</p>
            </div>{" "}
            <p>princeton University</p>
            <br />
            <h5>COURSE</h5>
          </div>
          <div className="cards">
            <img
              src="https://images.unsplash.com/photo-1543373014-cfe4f4bc1cdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGlnaCUyMHJlcyUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80"
              alt=""
            />
            <div style={{ display: "flex" }}>
              <h3>Computer Science: Programming with a Purpose</h3>
              <p className="free">Free</p>
            </div>{" "}
            <p>princeton University</p>
            <br />
            <h5>COURSE</h5>
          </div>
          <div className="cards">
            <img
              src="https://images.unsplash.com/photo-1543373014-cfe4f4bc1cdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGlnaCUyMHJlcyUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80"
              alt=""
            />
            <div style={{ display: "flex" }}>
              <h3>Computer Science: Programming with a Purpose</h3>
              <p className="free">Free</p>
            </div>{" "}
            <p>princeton University</p>
            <br />
            <h5>COURSE</h5>
          </div>
          <div className="cards">
            <img
              src="https://images.unsplash.com/photo-1543373014-cfe4f4bc1cdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGlnaCUyMHJlcyUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80"
              alt=""
            />
            <div style={{ display: "flex" }}>
              <h3>Computer Science: Programming with a Purpose</h3>
              <p className="free">Free</p>
            </div>{" "}
            <p>princeton University</p>
            <br />
            <h5>COURSE</h5>
          </div>
        </Slider>
      </div>
    );
  }
}
