import React, { Component } from "react";
import Slider from "react-slick";
import "./skill.css";

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
          <div className="skill">
            <div className="shover">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeTslb76j_bS62H45wMunJ6ogggspTacEH1Q&usqp=CAU"
                alt=""
              />
              <h3>Business Foundations</h3>
              <p>University of Pennysylvania</p>
              <br />
              <h5>SPECIALIZATION (5 COURSES)</h5>
            </div>
          </div>
          <div className="skill">
            <div className="shover">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFpZ_66fjtTQToiMVqob5KKcc4Lh7VYbqduw&usqp=CAU"
                alt=""
              />

              <h3>Online Learning Design for Educators</h3>

              <p>Macquarie University</p>
              <br />
              <h5>SPECIALIZATION (3 COURSES)</h5>
            </div>
          </div>
          <div className="skill">
            <div className="shover">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP0oN823YVrFCadIAwwAeVIyF7TLSrB1mnyg&usqp=CAU"
                alt=""
              />

              <h3>Leading People and Teams</h3>

              <p>University of Michigan</p>
              <br />
              <h5>SPECIALIZATION (5 COURSES)</h5>
            </div>
          </div>
          <div className="skill">
            <div className="shover">
              <img
                src="/stanford.png"
                alt=""
              />

              <h3>Machine Learning</h3>

              <p>Stanford University</p>
              <br />
              <h5>COURSE</h5>
            </div>
          </div>
          <div className="skill">
            <div className="shover">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbD80bbXVWZP4Kya49UUPkVz1oFBVBCzeAFQ&usqp=CAU"
                alt=""
              />
              <h3>Google IT Support</h3>
              <p>Google</p>
              <br />
              <h5>SPECIALIZATION (5 COURSES)</h5>
            </div>
          </div>
          <div className="skill">
            <div className="shover">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIjOtOVg1_xWFPFotmSH3Ke4a-fdTsP3vNsQ&usqp=CAU"
                alt=""
              />
              <h3>IBM Data Science</h3>

              <p>IBM</p>
              <br />
              <h5>SPECIALIZATION (5 COURSES)</h5>
            </div>
          </div>
          <div className="skill">
            <div className="shover">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrkWHxDaopOgyQHrR_AcYlmwhmVljFcnrQ-w&usqp=CAU"
                alt=""
              />

              <h3>Deep Learning</h3>

              <p>DeepLearning.AI</p>
              <br />
              <h5>SPECIALIZATION (5 COURSES)</h5>
            </div>
          </div>
          <div className="skill">
            <div className="shover">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIjOtOVg1_xWFPFotmSH3Ke4a-fdTsP3vNsQ&usqp=CAU"
                alt=""
              />
              <h3>IBM Data Science</h3>

              <p>IBM</p>
              <br />
              <h5>SPECIALIZATION (5 COURSES)</h5>
            </div>
          </div>
          <div className="skill">
            <div className="shover">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbD80bbXVWZP4Kya49UUPkVz1oFBVBCzeAFQ&usqp=CAU"
                alt=""
              />
              <h3>Google IT Support</h3>
              <p>Google</p>
              <br />
              <h5>SPECIALIZATION (5 COURSES)</h5>
            </div>
          </div>
          <div className="skill">
            <div className="shover">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrkWHxDaopOgyQHrR_AcYlmwhmVljFcnrQ-w&usqp=CAU"
                alt=""
              />

              <h3>Deep Learning</h3>

              <p>DeepLearning.AI</p>
              <br />
              <h5>SPECIALIZATION (5 COURSES)</h5>
            </div>
          </div>
          <div className="skill">
            <div className="shover">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIjOtOVg1_xWFPFotmSH3Ke4a-fdTsP3vNsQ&usqp=CAU"
                alt=""
              />
              <h3>IBM Data Science</h3>

              <p>IBM</p>
              <br />
              <h5>SPECIALIZATION (5 COURSES)</h5>
            </div>
          </div>
          <div className="skill">
            <div className="shover">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbD80bbXVWZP4Kya49UUPkVz1oFBVBCzeAFQ&usqp=CAU"
                alt=""
              />
              <h3>Google IT Support</h3>
              <p>Google</p>
              <br />
              <h5>SPECIALIZATION (5 COURSES)</h5>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
