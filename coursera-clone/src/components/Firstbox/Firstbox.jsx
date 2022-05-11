import React from "react";
import "./firstbox.css";

function Firstbox() {
  return (
    <div id="Firstbox1">
      <h1 className="h1">Welcome!</h1>
      <div className=" right1">
        <div className="yourself">
          <h5>Tell us about yourself</h5>
          <p>
            I am currently a
            <input id="self" type="text" placeholder="software developer" />
          </p>
          <a style={{color:"blue" }}
            href=""
            onClick={() => {
              alert("Profile saved succesfully..!");
              document.getElementById("self").innerHTML = null;
            }}
          >
            save to profile
          </a>
        </div>
              <div className="goals1">
                  
          <h5> <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ5iSVqQm3PR_FHkDG7KbDf5xWqJlzHak8-CYKp__MvHkFdw0Wf" alt="" />SET YOUR LEARNING GOALS</h5>
          <p>Change my career</p>
          <p>Level up my skills</p>
<a href="" style={{color:"blue" }}>Update My learning goal</a>
        </div>
      </div>
    </div>
  );
}
export default Firstbox;
