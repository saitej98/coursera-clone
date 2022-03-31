import React, { Component } from "react";
import Slider from "react-slick";
import "./secondbox.css";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="main">
        <h2> Get Started with These Free Courses </h2>
        <Slider {...settings}>
          <div className="cards">
            <img
              src="https://images.unsplash.com/photo-1543373014-cfe4f4bc1cdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGlnaCUyMHJlcyUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80"
              alt=""
            />
            <h3>Computer Science: Programming with a Purpose</h3>
            <p>princeton University</p>
            <h5>COURSE</h5>
          </div>
          <div className="cards">
            <img
              src="https://images.unsplash.com/photo-1543373014-cfe4f4bc1cdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGlnaCUyMHJlcyUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80"
              alt=""
            />
            <h3>Code Yourself! An Introduction to Programming</h3>
            <p>The University of Edinburgh</p>
            <h5>COURSE</h5>
          </div>
          <div className="cards">
            <img
              src="https://images.unsplash.com/photo-1543373014-cfe4f4bc1cdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGlnaCUyMHJlcyUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80"
              alt=""
            />
            <h3>Computer Science: Programming with a Purpose</h3>
            <p>princeton University</p>
            <h5>COURSE</h5>
          </div>
          <div className="cards">
            <img
              src="https://images.unsplash.com/photo-1543373014-cfe4f4bc1cdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGlnaCUyMHJlcyUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80"
              alt=""
            />
            <h3>Computer Science: Programming with a Purpose</h3>
            <p>princeton University</p>
            <h5>COURSE</h5>
          </div>
          <div className="cards">
            <img
              src="https://images.unsplash.com/photo-1543373014-cfe4f4bc1cdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGlnaCUyMHJlcyUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80"
              alt=""
            />
            <h3>Computer Science: Programming with a Purpose</h3>
            <p>princeton University</p>
            <h5>COURSE</h5>
          </div>
          <div className="cards">
            <img
              src="https://images.unsplash.com/photo-1543373014-cfe4f4bc1cdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGlnaCUyMHJlcyUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80"
              alt=""
            />
            <h3>Computer Science: Programming with a Purpose</h3>
            <p>princeton University</p>
            <h5>COURSE</h5>
          </div>
          <div className="cards">
            <img
              src="https://images.unsplash.com/photo-1543373014-cfe4f4bc1cdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGlnaCUyMHJlcyUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80"
              alt=""
            />
            <h3>Computer Science: Programming with a Purpose</h3>
            <p>princeton University</p>
            <h5>COURSE</h5>
          </div>
          <div className="cards">
            <img
              src="https://images.unsplash.com/photo-1543373014-cfe4f4bc1cdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGlnaCUyMHJlcyUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80"
              alt=""
            />
            <h3>Computer Science: Programming with a Purpose</h3>
            <p>princeton University</p>
            <h5>COURSE</h5>
          </div>
          <div className="cards">
            <img
              src="https://images.unsplash.com/photo-1543373014-cfe4f4bc1cdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGlnaCUyMHJlcyUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80"
              alt=""
            />
            <h3>Computer Science: Programming with a Purpose</h3>
            <p>princeton University</p>
            <h5>COURSE</h5>
          </div>
          <div className="cards">
            <img
              src="https://images.unsplash.com/photo-1543373014-cfe4f4bc1cdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGlnaCUyMHJlcyUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80"
              alt=""
            />
            <h3>Computer Science: Programming with a Purpose</h3>
            <p>princeton University</p>
            <h5>COURSE</h5>
          </div>
          <div className="cards">
            <img
              src="https://images.unsplash.com/photo-1543373014-cfe4f4bc1cdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGlnaCUyMHJlcyUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80"
              alt=""
            />
            <h3>Computer Science: Programming with a Purpose</h3>
            <p>princeton University</p>
            <h5>COURSE</h5>
          </div>
          <div className="cards">
            <img
              src="https://images.unsplash.com/photo-1543373014-cfe4f4bc1cdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGlnaCUyMHJlcyUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80"
              alt=""
            />
            <h3>Computer Science: Programming with a Purpose</h3>
            <p>princeton University</p>
            <h5>COURSE</h5>
          </div>
        </Slider>
      </div>
    );
  }
}
