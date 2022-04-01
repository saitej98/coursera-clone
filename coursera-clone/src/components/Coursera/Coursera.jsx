import React, { Component } from "react";
import Slider from "react-slick";
import "./coursera.css";

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
        <h2>Earn Your Degree</h2>
        <Slider {...settings}>
          <div className="coursera">
            <div className="chover">
              <div>
                <img
                  src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/browse/domains/math_and_logic.png?auto=format%2Ccompress&dpr=1&w=&h=&fit=crop"
                  alt=""
                />
              </div>
              <div>
                <h5>Data Sciences</h5>
                <p>422 Courses</p>
              </div>
            </div>
          </div>
          <div className="coursera">
            <div className="chover">
              <div>
                <img
                  src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/browse/domains/business.png?auto=format%2Ccompress&dpr=1&w=&h=&fit=crop"
                  alt=""
                />
              </div>
              <div>
                <h5>Business</h5>
                <p>1095 Courses</p>
              </div>
            </div>
          </div>
          <div className="coursera">
            <div className="chover">
              <div>
                <img
                  src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/browse/domains/computer_science.png?auto=format%2Ccompress&dpr=1&w=&h=&fit=crop"
                  alt=""
                />
              </div>
              <div>
                <h5>Computer Science</h5>
                <p>668 Courses</p>
              </div>
            </div>
          </div>
          <div className="coursera">
            <div className="chover">
              <div>
                <img
                  src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/browse/domains/health.png?auto=format%2Ccompress&dpr=1&w=&h=&fit=crop"
                  alt=""
                />
              </div>
              <div>
                <h5>Health</h5>
                <p>471 Courses</p>
              </div>
            </div>
          </div>
          <div className="coursera">
            <div className="chover">
              <div>
                <img
                  src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/browse/domains/social_sciences.png?auto=format%2Ccompress&dpr=1&w=&h=&fit=crop"
                  alt=""
                />
              </div>
              <div>
                <h5>Social Sciences</h5>
                <p>401 Courses</p>
              </div>
            </div>
          </div>
          <div className="coursera">
            <div className="chover">
              <div>
                <img
                  src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/browse/domains/personal_development.png?auto=format%2Ccompress&dpr=1&w=&h=&fit=crop"
                  alt=""
                />
              </div>
              <div>
                <h5>Personal Development</h5>
                <p>137 Courses</p>
              </div>
            </div>
          </div>
          <div className="coursera">
            <div className="chover">
              <div>
                <img
                  src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/browse/domains/arts_and_humanities.png?auto=format%2Ccompress&dpr=1&w=&h=&fit=crop"
                  alt=""
                />
              </div>
              <div>
                <h5>Arts and Humanities</h5>
                <p>338 Courses</p>
              </div>
            </div>
          </div>
          <div className="coursera">
            <div className="chover">
              <div>
                <img
                  src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/browse/domains/physical_science_and_engineering.png?auto=format%2Ccompress&dpr=1&w=&h=&fit=crop"
                  alt=""
                />
              </div>
              <div>
                <h5>Physical Science and Engineering</h5>
                <p>413 Courses</p>
              </div>
            </div>
          </div>
          <div className="coursera">
            <div className="chover">
              <div>
                <img
                  src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/browse/domains/physical_science_and_engineering.png?auto=format%2Ccompress&dpr=1&w=&h=&fit=crop"
                  alt=""
                />
              </div>
              <div>
                <h5>Language Learning</h5>
                <p>145 Courses</p>
              </div>
            </div>
          </div>
          <div className="coursera">
            <div className="chover">
              <div>
                <img
                  src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/browse/domains/information_technology.png?auto=format%2Ccompress&dpr=1&w=&h=&fit=crop"
                  alt=""
                />
              </div>
              <div>
                <h5>Information Technology</h5>
                <p>145 Courses</p>
              </div>
            </div>
          </div>
          <div className="coursera">
            <div className="chover">
              <div>
                <img
                  src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/browse/domains/math_and_logic.png?auto=format%2Ccompress&dpr=1&w=&h=&fit=crop"
                  alt=""
                />
              </div>
              <div>
                <h5>Math and Logic</h5>
                <p>70 Courses</p>
              </div>
            </div>
          </div>
        </Slider>
        <br />
        <h2>Explore Career Learning Paths</h2>
        <br />
        <div className="main">
          <img
            src="/career paths.png"
            alt=""
            style={{ width: "100%", margin: "auto", hover: "cursor: pointer" }}
          />
        </div>
      </div>
    );
  }
}
