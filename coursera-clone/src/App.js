import Firstbox from "./components/Firstbox/Firstbox";
import Secondbox from "./components/Secondbox/Secondbox";

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
      </div>
    </div>
  );
}

export default App;
