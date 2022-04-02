import Firstbox from "./components/Firstbox/Firstbox";
import Secondbox from "./components/Secondbox/Secondbox";
import Degree from "./components/Degree/Degree";
import Projects from "./components/Projects/Projects";
import Coursera from "./components/Coursera/Coursera";
import Ad from "./components/Ad/Ad";
import Popular from "./components/Popular/Popular";
import Skill from "./components/Skill/Skill"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import React from "react";
// import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <Firstbox />
        <Secondbox />
        <br />
        <Degree />
        <br />
        <Projects /> <br />
        <Coursera />
        <br />
        <br />
        <Ad />
        <Popular />
        <br />
        <Skill/>
      </div>
    </div>
  );
}

export default App;
