import React from "react";
import "./firstbox.css";

function Firstbox() {
  return (
    <div className="Firstbox">
      <h1 className="h1">Welcome!</h1>
      <div className=" right">
        <div className="yourself">
          <h5>Tell us about yourself</h5>
          <p>
            I am currently a{" "}
            <input id="self" type="text" placeholder="software developer" />
          </p>
          <a
            href=""
            onClick={() => {
              alert("Profile saved succesfully..!");
              document.getElementById("self").innerHTML = null;
            }}
          >
            save to profile
          </a>
        </div>
              <div className="goals">
                  
          <h5> <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ5iSVqQm3PR_FHkDG7KbDf5xWqJlzHak8-CYKp__MvHkFdw0Wf" alt="" />SET YOUR LEARNING GOALS</h5>
          <a href="">Change my career</a>
          <br />
          <a href="">Level up my skills</a>
        </div>
      </div>
    </div>
  );
}
export default Firstbox;
