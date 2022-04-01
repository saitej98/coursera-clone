import React, { Component } from "react";
import Slider from "react-slick";
import "./degree.css";

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
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="main">
        <h2>Earn Your Degree</h2>
        <Slider {...settings}>
          <div className="degree">
            <div className="dhover">
              <img
                src="https://images.unsplash.com/photo-1543373014-cfe4f4bc1cdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGlnaCUyMHJlcyUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80"
                alt=""
              />
              <h5>Bachelor of Applied Arts and Sciences</h5>
              <p>University of North Texas</p>
              <h5 style={{"background-color":"green",color:"white",width:"119%",height:"20px","margin-left":"-20px",padding:"5px 0px"}}>100% ONLINE</h5>
            </div>
          </div>
          <div className="degree">
            <div className="dhover">
              <img
                src="https://images.unsplash.com/photo-1543373014-cfe4f4bc1cdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGlnaCUyMHJlcyUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80"
                alt=""
              />
              <h5>Bachelor of Applied Arts and Sciences</h5>
              <p>University of North Texas</p>
              <h5 style={{"background-color":"green",color:"white",width:"119%",height:"20px","margin-left":"-20px",padding:"5px 0px"}}>100% ONLINE</h5>
            </div>
          </div>
          <div className="degree">
            <div className="dhover">
              <img
                src="https://images.unsplash.com/photo-1543373014-cfe4f4bc1cdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGlnaCUyMHJlcyUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80"
                alt=""
              />
              <h5>Bachelor of Applied Arts and Sciences</h5>
              <p>University of North Texas</p>
              <h5 style={{"background-color":"green",color:"white",width:"119%",height:"20px","margin-left":"-20px",padding:"5px 0px"}}>100% ONLINE</h5>
            </div>
          </div>
          <div className="degree">
            <div className="dhover">
              <img
                src="https://images.unsplash.com/photo-1543373014-cfe4f4bc1cdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGlnaCUyMHJlcyUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80"
                alt=""
              />
              <h5>Bachelor of Applied Arts and Sciences</h5>
              <p>University of North Texas</p>
              <h5 style={{"background-color":"green",color:"white",width:"119%",height:"20px","margin-left":"-20px",padding:"5px 0px"}}>100% ONLINE</h5>
            </div>
          </div>
          <div className="degree">
            <div className="dhover">
              <img
                src="https://images.unsplash.com/photo-1543373014-cfe4f4bc1cdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGlnaCUyMHJlcyUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80"
                alt=""
              />
              <h5>Bachelor of Applied Arts and Sciences</h5>
              <p>University of North Texas</p>
              <h5 style={{"background-color":"green",color:"white",width:"119%",height:"20px","margin-left":"-20px",padding:"5px 0px"}}>100% ONLINE</h5>
            </div>
          </div>
          <div className="degree">
            <div className="dhover">
              <img
                src="https://images.unsplash.com/photo-1543373014-cfe4f4bc1cdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGlnaCUyMHJlcyUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80"
                alt=""
              />
              <h5>Bachelor of Applied Arts and Sciences</h5>
              <p>University of North Texas</p>
              <h5 style={{"background-color":"green",color:"white",width:"119%",height:"20px","margin-left":"-20px",padding:"5px 0px"}}>100% ONLINE</h5>
            </div>
          </div>
          <div className="degree">
            <div className="dhover">
              <img
                src="https://images.unsplash.com/photo-1543373014-cfe4f4bc1cdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGlnaCUyMHJlcyUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80"
                alt=""
              />
              <h5>Bachelor of Applied Arts and Sciences</h5>
              <p>University of North Texas</p>
              <h5 style={{"background-color":"green",color:"white",width:"119%",height:"20px","margin-left":"-20px",padding:"5px 0px"}}>100% ONLINE</h5>
            </div>
          </div>
          <div className="degree">
            <div className="dhover">
              <img
                src="https://images.unsplash.com/photo-1543373014-cfe4f4bc1cdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGlnaCUyMHJlcyUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80"
                alt=""
              />
              <h5>Bachelor of Applied Arts and Sciences</h5>
              <p>University of North Texas</p>
              <h5 style={{"background-color":"green",color:"white",width:"119%",height:"20px","margin-left":"-20px",padding:"5px 0px"}}>100% ONLINE</h5>
            </div>
          </div>   <div className="degree">
            <div className="dhover">
              <img
                src="https://images.unsplash.com/photo-1543373014-cfe4f4bc1cdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGlnaCUyMHJlcyUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80"
                alt=""
              />
              <h5>Bachelor of Applied Arts and Sciences</h5>
              <p>University of North Texas</p>
              <h5 style={{"background-color":"green",color:"white",width:"119%",height:"20px","margin-left":"-20px",padding:"5px 0px"}}>100% ONLINE</h5>
            </div>
          </div>   <div className="degree">
            <div className="dhover">
              <img
                src="https://images.unsplash.com/photo-1543373014-cfe4f4bc1cdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGlnaCUyMHJlcyUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80"
                alt=""
              />
              <h5>Bachelor of Applied Arts and Sciences</h5>
              <p>University of North Texas</p>
              <h5 style={{"background-color":"green",color:"white",width:"119%",height:"20px","margin-left":"-20px",padding:"5px 0px"}}>100% ONLINE</h5>
            </div>
          </div>   <div className="degree">
            <div className="dhover">
              <img
                src="https://images.unsplash.com/photo-1543373014-cfe4f4bc1cdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGlnaCUyMHJlcyUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80"
                alt=""
              />
              <h5>Bachelor of Applied Arts and Sciences</h5>
              <p>University of North Texas</p>
              <h5 style={{"background-color":"green",color:"white",width:"119%",height:"20px","margin-left":"-20px",padding:"5px 0px"}}>100% ONLINE</h5>
            </div>
          </div>   <div className="degree">
            <div className="dhover">
              <img
                src="https://images.unsplash.com/photo-1543373014-cfe4f4bc1cdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGlnaCUyMHJlcyUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80"
                alt=""
              />
              <h5>Bachelor of Applied Arts and Sciences</h5>
              <p>University of North Texas</p>
              <h5 style={{"background-color":"green",color:"white",width:"119%",height:"20px","margin-left":"-20px",padding:"5px 0px"}}>100% ONLINE</h5>
            </div>
          </div>   <div className="degree">
            <div className="dhover">
              <img
                src="https://images.unsplash.com/photo-1543373014-cfe4f4bc1cdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGlnaCUyMHJlcyUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80"
                alt=""
              />
              <h5>Bachelor of Applied Arts and Sciences</h5>
              <p>University of North Texas</p>
              <h5 style={{"background-color":"green",color:"white",width:"119%",height:"20px","margin-left":"-20px",padding:"5px 0px"}}>100% ONLINE</h5>
            </div>
          </div>   <div className="degree">
            <div className="dhover">
              <img
                src="https://images.unsplash.com/photo-1543373014-cfe4f4bc1cdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGlnaCUyMHJlcyUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80"
                alt=""
              />
              <h5>Bachelor of Applied Arts and Sciences</h5>
              <p>University of North Texas</p>
              <h5 style={{"background-color":"green",color:"white",width:"119%",height:"20px","margin-left":"-20px",padding:"5px 0px"}}>100% ONLINE</h5>
            </div>
          </div>   <div className="degree">
            <div className="dhover">
              <img
                src="https://images.unsplash.com/photo-1543373014-cfe4f4bc1cdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGlnaCUyMHJlcyUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80"
                alt=""
              />
              <h5>Bachelor of Applied Arts and Sciences</h5>
              <p>University of North Texas</p>
              <h5 style={{"background-color":"green",color:"white",width:"119%",height:"20px","margin-left":"-20px",padding:"5px 0px"}}>100% ONLINE</h5>
            </div>
          </div>   <div className="degree">
            <div className="dhover">
              <img
                src="https://images.unsplash.com/photo-1543373014-cfe4f4bc1cdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGlnaCUyMHJlcyUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80"
                alt=""
              />
              <h5>Bachelor of Applied Arts and Sciences</h5>
              <p>University of North Texas</p>
              <h5 style={{"background-color":"green",color:"white",width:"119%",height:"20px","margin-left":"-20px",padding:"5px 0px"}}>100% ONLINE</h5>
            </div>
          </div>   <div className="degree">
            <div className="dhover">
              <img
                src="https://images.unsplash.com/photo-1543373014-cfe4f4bc1cdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGlnaCUyMHJlcyUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80"
                alt=""
              />
              <h5>Bachelor of Applied Arts and Sciences</h5>
              <p>University of North Texas</p>
              <h5 style={{"background-color":"green",color:"white",width:"119%",height:"20px","margin-left":"-20px",padding:"5px 0px"}}>100% ONLINE</h5>
            </div>
          </div>
          
        </Slider>
      </div>
    );
  }
}
