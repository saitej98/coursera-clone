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
        <br />
        <Slider {...settings}>
          <div className="cards">
            <div className="hover">
              <img src="/edinburg.png" alt="" />
              <div style={{ display: "flex" }}>
                <h3>Code Yourself! An Introduction to Programming</h3>
                <p className="free">Free</p>
              </div>

              <p>The University of Edinburgh</p>
              <h5>COURSE</h5>
            </div>
          </div>
          <div className="cards">
            <div className="hover">
              <img src="/princeton.png" alt="" />
              <div style={{ display: "flex" }}>
                <h3>Computer Science: Programming with a Purpose</h3>
                <p className="free">Free</p>
              </div>{" "}
              <p>Princeton University</p>
              <br />
              <h5>COURSE</h5>
            </div>
          </div>
          <div className="cards">
            <div className="hover">
              <img src="/stanford.png" alt="" />
              <div style={{ display: "flex" }}>
                <h3>Cryptography I</h3>
                <p className="free">Free</p>
              </div>{" "}
              <p>Stanford University</p>
              <br />
              <h5>COURSE</h5>
            </div>
          </div>
          <div className="cards">
            <div className="hover">
              <img src="yonsei-university.png" alt="" />
              <div style={{ display: "flex" }}>
                <h3>Introduction to TCP/IP</h3>
                <p className="free">Free</p>
              </div>{" "}
              <p>Yonsei University</p>
              <br />
              <h5>COURSE</h5>
            </div>
          </div>
          <div className="cards">
            <div className="hover">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkFRrs1elKDOtv-N0KjzGylgtxu4Jwd0XO2g&usqp=CAU"
                alt=""
              />
              <div style={{ display: "flex" }}>
                <h3>Cybersecurity for Everyone</h3>
                <p className="free">Free</p>
              </div>{" "}
              <p>university of Maryland,College Park</p>
              <br />
              <h5>COURSE</h5>
            </div>
          </div>
          <div className="cards">
            <div className="hover">
              <img src="/london.jfif" alt="" />
              <div style={{ display: "flex" }}>
                <h3>Information Security: Context and Introduction</h3>
                <p className="free">Free</p>
              </div>{" "}
              <p>University of London</p>
              <br />
              <h5>COURSE</h5>
            </div>
          </div>
          <div className="cards">
            <div className="hover">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOgRmQrxoiKoAX0gee9t44OcRC-3sXXgijoA&usqp=CAU"
                alt=""
              />
              <div style={{ display: "flex" }}>
                <h3>Learn to Program: The Fundamentals</h3>
                <p className="free">Free</p>
              </div>{" "}
              <p>University of Toronto</p>
              <br />
              <h5>COURSE</h5>
            </div>
          </div>
          <div className="cards">
            <div className="hover">
              <img src="/princeton.png" alt="" />
              <div style={{ display: "flex" }}>
                <h3>Algorithms,Part I</h3>
                <p className="free">Free</p>
              </div>{" "}
              <p>Princeton University</p>
              <br />
              <h5>COURSE</h5>
            </div>
          </div>
          <div className="cards">
            <div className="hover">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8CBl-YiI33JvDiDKR8hxLqt5UO9X9MjPxBg&usqp=CAU"
                alt=""
              />
              <div style={{ display: "flex" }}>
                <h3>Problem Solving, Python Programming, and Video Games</h3>
                <p className="free">Free</p>
              </div>{" "}
              <p>University of Alberta</p>
              <h5>COURSE</h5>
            </div>
          </div>
          <div className="cards">
            <div className="hover">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbGfqLx5qPrWoMnSeAK3bgpB2KLclqIICXgA&usqp=CAU"
                alt=""
              />
              <div style={{ display: "flex" }}>
                <h3>Data Science Math Skills</h3>
                <p className="free">Free</p>
              </div>{" "}
              <p>Duke University</p>
              <br />
              <h5>COURSE</h5>
            </div>
          </div>
          <div className="cards">
            <div className="hover">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZkinz_ToLQ0DK21dCB3E83Xa_wd0TswQB6A&usqp=CAU"
                alt=""
              />
              <div style={{ display: "flex" }}>
                <h3>Data Processing Using Python</h3>
                <p className="free">Free</p>
              </div>{" "}
              <p>Nanjing University</p>
              <br />
              <h5>COURSE</h5>
            </div>
          </div>
          <div className="cards">
            <div className="hover">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsJNxByklcJmmjV4XjbdvZiJbEP2UuYycb1w&usqp=CAU"
                alt=""
              />
              <div style={{ display: "flex" }}>
                <h3>Python and Statistics for Financial Analysis</h3>
                <p className="free">Free</p>
              </div>{" "}
              <p>The Hong Kong University of Science and Technology</p>
              <h5>COURSE</h5>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
