import React, { Component } from "react";
import Slider from "react-slick";
import "./projects.css";

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
        <h2> Recently Launched Guided Projects </h2>
        <Slider {...settings}>
          <div className="projects">
            <div className="phover">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2Sw3XvaGzmorTHpsFxd2xmn6rjd3jut6hEw&usqp=CAU"
                alt=""
              />
              <h3>كيفية استخدام ميل شامب</h3>
              <p>Coursera Project Network</p>
              <br />
              <h5>GUIDED PROJECT</h5>
            </div>
          </div>
          <div className="projects">
            <div className="phover">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2Sw3XvaGzmorTHpsFxd2xmn6rjd3jut6hEw&usqp=CAU"
                alt=""
              />
              <h3>Créer du contenu de sensibilisation pour Instagram sur</h3>
              <p>Coursera Project Network</p>
              <br />
              <h5>GUIDED PROJECT</h5>
            </div>
          </div>
          <div className="projects">
            <div className="phover">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2Sw3XvaGzmorTHpsFxd2xmn6rjd3jut6hEw&usqp=CAU"
                alt=""
              />
              <h3>Computer Science: Programming with a Purpose</h3>
              <p>Coursera Project Network</p>
              <br />
              <h5>GUIDED PROJECT</h5>
            </div>
          </div>
          <div className="projects">
            <div className="phover">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2Sw3XvaGzmorTHpsFxd2xmn6rjd3jut6hEw&usqp=CAU"
                alt=""
              />
              <h3>Create a digital Wireframe with Figma</h3>
              <p>Coursera Project Network</p>
              <br />
              <h5>GUIDED PROJECT</h5>
            </div>
          </div>{" "}
          <div className="projects">
            <div className="phover">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2Sw3XvaGzmorTHpsFxd2xmn6rjd3jut6hEw&usqp=CAU"
                alt=""
              />
              <h3>Computer Science: Programming with a Purpose</h3>
              <p>Coursera Project Network</p>
              <br />
              <h5>GUIDED PROJECT</h5>
            </div>
          </div>{" "}
          <div className="projects">
            <div className="phover">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2Sw3XvaGzmorTHpsFxd2xmn6rjd3jut6hEw&usqp=CAU"
                alt=""
              />
              <h3>Computer Science: Programming with a Purpose</h3>
              <p>Coursera Project Network</p>
              <br />
              <h5>GUIDED PROJECT</h5>
            </div>
          </div>{" "}
          <div className="projects">
            <div className="phover">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2Sw3XvaGzmorTHpsFxd2xmn6rjd3jut6hEw&usqp=CAU"
                alt=""
              />
              <h3>Computer Science: Programming with a Purpose</h3>
              <p>Coursera Project Network</p>
              <br />
              <h5>GUIDED PROJECT</h5>
            </div>
          </div>{" "}
          <div className="projects">
            <div className="phover">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2Sw3XvaGzmorTHpsFxd2xmn6rjd3jut6hEw&usqp=CAU"
                alt=""
              />
              <h3>Computer Science: Programming with a Purpose</h3>
              <p>Coursera Project Network</p>
              <br />
              <h5>GUIDED PROJECT</h5>
            </div>
          </div>{" "}
          <div className="projects">
            <div className="phover">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2Sw3XvaGzmorTHpsFxd2xmn6rjd3jut6hEw&usqp=CAU"
                alt=""
              />
              <h3>Computer Science: Programming with a Purpose</h3>
              <p>Coursera Project Network</p>
              <br />
              <h5>GUIDED PROJECT</h5>
            </div>
          </div>{" "}
          <div className="projects">
            <div className="phover">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2Sw3XvaGzmorTHpsFxd2xmn6rjd3jut6hEw&usqp=CAU"
                alt=""
              />
              <h3>Computer Science: Programming with a Purpose</h3>
              <p>Coursera Project Network</p>
              <br />
              <h5>GUIDED PROJECT</h5>
            </div>
          </div>{" "}
          <div className="projects">
            <div className="phover">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2Sw3XvaGzmorTHpsFxd2xmn6rjd3jut6hEw&usqp=CAU"
                alt=""
              />
              <h3>Computer Science: Programming with a Purpose</h3>
              <p>Coursera Project Network</p>
              <br />
              <h5>GUIDED PROJECT</h5>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
