import React, { Component } from "react";
import Slider from "react-slick";
import "./explore.css";

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
        <h2>Explore MasterTrack® Certificates</h2>
        <Slider {...settings}>
          <div className="degree">
            <div className="dhover">
              <img
                src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/ddp/branding/ma-international-relations-security-strategy-jgu/ma-international-relations-security-strategy-jgu-banner.jpg?auto=compress&dpr=1&w=270&h=90&fit=crop"
                alt=""
              />
              <h5>Master of Science in Management</h5>
              <p>University Urbana-Champaign</p>
              <h5
                style={{
                  "background-color": "#13294b",
                  color: "white",
                  width: "119%",
                  height: "20px",
                  "margin-left": "-20px",
                  padding: "5px 0px",
                }}
              >
                100% ONLINE
              </h5>
            </div>
          </div>
          <div className="degree">
            <div className="dhover">
              <img
                src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/growth_certificate_degree/degree_background_image/Illinois_cropped.png?auto=compress&dpr=1&w=270&h=90&fit=crop"
                alt=""
              />
              <h5>Bachelor of Applied Arts and Sciences</h5>
              <p>University of North Texas</p>
              <h5
                style={{
                  "background-color": "green",
                  color: "white",
                  width: "119%",
                  height: "20px",
                  "margin-left": "-20px",
                  padding: "5px 0px",
                }}
              >
                100% ONLINE
              </h5>
            </div>
          </div>
          <div className="degree">
            <div className="dhover">
              <img
                src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/premium_hub/mph-imperial.jpg?auto=compress&dpr=1&w=270&h=90&fit=crop"
                alt=""
              />
              <h5>Bachelor of Applied Arts and Sciences</h5>
              <p>University of North Texas</p>
              <h5
                style={{
                  "background-color": "brown",
                  color: "white",
                  width: "119%",
                  height: "20px",
                  "margin-left": "-20px",
                  padding: "5px 0px",
                }}
              >
                100% ONLINE
              </h5>
            </div>
          </div>
          <div className="degree">
            <div className="dhover">
              <img
                src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/ddp/branding/mba-fia/mba-fia-banner.jpg?auto=compress&dpr=1&w=270&h=90&fit=crop"
                alt=""
              />
              <h5>Bachelor of Applied Arts and Sciences</h5>
              <p>University of North Texas</p>
              <h5
                style={{
                  "background-color": "green",
                  color: "white",
                  width: "119%",
                  height: "20px",
                  "margin-left": "-20px",
                  padding: "5px 0px",
                }}
              >
                100% ONLINE
              </h5>
            </div>
          </div>{" "}
          <div className="degree">
            <div className="dhover">
              <img
                src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/premium_hub/mph-umich.jpg?auto=compress&dpr=1&w=270&h=90&fit=crop"
                alt=""
              />
              <h5>Bachelor of Applied Arts and Sciences</h5>
              <p>University of North Texas</p>
              <h5
                style={{
                  "background-color": "chocolate",
                  color: "white",
                  width: "119%",
                  height: "20px",
                  "margin-left": "-20px",
                  padding: "5px 0px",
                }}
              >
                100% ONLINE
              </h5>
            </div>
          </div>{" "}
          <div className="degree">
            <div className="dhover">
              <img
                src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/ddp/branding/bsc-business-administration-london/bsc-business-administration-london-banner.jpg?auto=compress&dpr=1&w=270&h=90&fit=crop"
                alt=""
              />
              <h5>Bachelor of Applied Arts and Sciences</h5>
              <p>University of North Texas</p>
              <h5
                style={{
                  "background-color": "green",
                  color: "white",
                  width: "119%",
                  height: "20px",
                  "margin-left": "-20px",
                  padding: "5px 0px",
                }}
              >
                100% ONLINE
              </h5>
            </div>
          </div>{" "}
          <div className="degree">
            <div className="dhover">
              <img
                src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/ddp/branding/msds-boulder/header.jpg?auto=compress&dpr=1&w=270&h=90&fit=crop"
                alt=""
              />
              <h5>Bachelor of Applied Arts and Sciences</h5>
              <p>University of North Texas</p>
              <h5
                style={{
                  "background-color": "beige",
                  color: "white",
                  width: "119%",
                  height: "20px",
                  "margin-left": "-20px",
                  padding: "5px 0px",
                }}
              >
                100% ONLINE
              </h5>
            </div>
          </div>{" "}
          <div className="degree">
            <div className="dhover">
              <img
                src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/ddp/branding/global-mba-macquarie/banner.jpg?auto=compress&dpr=1&w=270&h=90&fit=crop"
                alt=""
              />
              <h5>Bachelor of Applied Arts and Sciences</h5>
              <p>University of North Texas</p>
              <h5
                style={{
                  "background-color": "aqua",
                  color: "white",
                  width: "119%",
                  height: "20px",
                  "margin-left": "-20px",
                  padding: "5px 0px",
                }}
              >
                100% ONLINE
              </h5>
            </div>
          </div>{" "}
          <div className="degree">
            <div className="dhover">
              <img
                src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/ddp/branding/bachelor-of-science-general-business-unt/bachelor-of-science-general-business-unt-banner.jpg?auto=compress&dpr=1&w=270&h=90&fit=crop"
                alt=""
              />
              <h5>Bachelor of Applied Arts and Sciences</h5>
              <p>University of North Texas</p>
              <h5
                style={{
                  "background-color": "green",
                  color: "white",
                  width: "119%",
                  height: "20px",
                  "margin-left": "-20px",
                  padding: "5px 0px",
                }}
              >
                100% ONLINE
              </h5>
            </div>
          </div>{" "}
          <div className="degree">
            <div className="dhover">
              <img
                src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/ddp/branding/mcit-penn/headerv2.png?auto=compress&dpr=1&w=270&h=90&fit=crop"
                alt=""
              />
              <h5>Bachelor of Applied Arts and Sciences</h5>
              <p>University of North Texas</p>
              <h5
                style={{
                  "background-color": "teal",
                  color: "white",
                  width: "119%",
                  height: "20px",
                  "margin-left": "-20px",
                  padding: "5px 0px",
                }}
              >
                100% ONLINE
              </h5>
            </div>
          </div>{" "}
          <div className="degree">
            <div className="dhover">
              <img
                src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/degree-landing-pages/masters-innovation-entrepreneurship/croplogo.png?auto=compress&dpr=1&w=270&h=90&fit=crop"
                alt=""
              />
              <h5>Bachelor of Applied Arts and Sciences</h5>
              <p>University of North Texas</p>
              <h5
                style={{
                  "background-color": "yellow",
                  color: "white",
                  width: "119%",
                  height: "20px",
                  "margin-left": "-20px",
                  padding: "5px 0px",
                }}
              >
                100% ONLINE
              </h5>
            </div>
          </div>{" "}
          <div className="degree">
            <div className="dhover">
              <img
                src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/degree-landing-pages/masters-innovation-entrepreneurship/croplogo.png?auto=compress&dpr=1&w=270&h=90&fit=crop"
                alt=""
              />
              <h5>Bachelor of Applied Arts and Sciences</h5>
              <p>University of North Texas</p>
              <h5
                style={{
                  "background-color": "red",
                  color: "white",
                  width: "119%",
                  height: "20px",
                  "margin-left": "-20px",
                  padding: "5px 0px",
                }}
              >
                100% ONLINE
              </h5>
            </div>
          </div>{" "}
          <div className="degree">
            <div className="dhover">
              <img
                src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/ddp/branding/mcit-penn/headerv2.png?auto=compress&dpr=1&w=270&h=90&fit=crop"
                alt=""
              />
              <h5>Bachelor of Applied Arts and Sciences</h5>
              <p>University of North Texas</p>
              <h5
                style={{
                  "background-color": "pink",
                  color: "white",
                  width: "119%",
                  height: "20px",
                  "margin-left": "-20px",
                  padding: "5px 0px",
                }}
              >
                100% ONLINE
              </h5>
            </div>
          </div>
          <div className="degree">
            <div className="dhover">
              <img
                src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/degree-assets/unt-online-bachelor-completion/banner.jpg?auto=compress&dpr=1&w=270&h=90&fit=crop"
                alt=""
              />
              <h5>Bachelor of Applied Arts and Sciences</h5>
              <p>University of North Texas</p>
              <h5
                style={{
                  "background-color": "green",
                  color: "white",
                  width: "119%",
                  height: "20px",
                  "margin-left": "-20px",
                  padding: "5px 0px",
                }}
              >
                100% ONLINE
              </h5>
            </div>
          </div>
          <div className="degree">
            <div className="dhover">
              <img
                src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/premium_hub/bscs-uol.jpg?auto=compress&dpr=1&w=270&h=90&fit=crop"
                alt=""
              />
              <h5>Bachelor of Science in Computer Science</h5>
              <p>University of London</p>
              <h5
                style={{
                  "background-color": "blue",
                  color: "white",
                  width: "119%",
                  height: "20px",
                  "margin-left": "-20px",
                  padding: "5px 0px",
                }}
              >
                100% ONLINE
              </h5>
            </div>
          </div>
          <div className="degree">
            <div className="dhover">
              <img
                src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/ddp/branding/bsc-marketing-london/bsc-marketing-london-banner.jpg?auto=compress&dpr=1&w=270&h=90&fit=crop"
                alt=""
              />
              <h5>Bachelor of Science in Marketing</h5>
              <p>University of London</p>
              <h5
                style={{
                  "background-color": "#0055a6",
                  color: "white",
                  width: "119%",
                  height: "20px",
                  "margin-left": "-20px",
                  padding: "5px 0px",
                }}
              >
                100% ONLINE
              </h5>
            </div>
          </div>
          <div className="degree">
            <div className="dhover">
              <img
                src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/ddp/branding/ma-international-relations-security-strategy-jgu/ma-international-relations-security-strategy-jgu-banner.jpg?auto=compress&dpr=1&w=270&h=90&fit=crop"
                alt=""
              />
              <h5>Bachelor of Applied Arts and Sciences</h5>
              <p>University O.P Jindal Global</p>
              <h5
                style={{
                  "background-color": "blue",
                  color: "white",
                  width: "119%",
                  height: "20px",
                  "margin-left": "-20px",
                  padding: "5px 0px",
                }}
              >
                100% ONLINE
              </h5>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
