import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";

import { FooterComponent } from "./Components/FooterComponent";
import { SearchPage } from "./Components/SearchPage";
import { SubFooterComponent } from "./Components/Subfooter";
import { SingleProductPage } from "./Components/SingleCoursePage";

//

import Firstbox from "./Components/Firstbox/Firstbox";
import Secondbox from "./Components/Secondbox/Secondbox";
import Degree from "./Components/Degree/Degree";
import Projects from "./Components/Projects/Projects";
import Coursera from "./Components/Coursera/Coursera";
import Ad from "./Components/Ad/Ad";
import Popular from "./Components/Popular/Popular";
import Skill from "./Components/Skill/Skill";
import Explore from "./Components/Explore/Explore";
import Checkout from "./Components/Checkout/Chekout";

//
import CarrerAcademy from "./Components/CarrerAcademy/CarrerAcademy";
import Payment from "./Components/PayementPage/Payment";
//
import Signup from "./Components/Signup/Signup";
import Login from "./Components/Login/Login";
//

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <div>
              <Firstbox />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
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
              <Explore />
              <br />
              <Skill />
              {/* <Checkout/> */}
            </div>
            <SubFooterComponent />
            <FooterComponent />
          </>
        }
      ></Route>
      <Route
        path="/search/:name"
        element={
          <>
            <Navbar />
            <SearchPage />
            <SubFooterComponent />
            <FooterComponent />
          </>
        }
      ></Route>
      <Route
        path="/:id"
        element={
          <>
            <Navbar />
            <SingleProductPage />
            <SubFooterComponent />
            <FooterComponent />
          </>
        }
      ></Route>
      <Route
        path="/career_acadamy"
        element={
          <>
            <Navbar />
            <CarrerAcademy />
            <SubFooterComponent />
            <FooterComponent />
          </>
        }
      ></Route>
      <Route
        path="/payment"
        element={
          <>
            <Navbar />
            <Payment />
            <SubFooterComponent />
            <FooterComponent />
          </>
        }
      ></Route>
      <Route
        path="/checkout"
        element={
          <>
            <Checkout />
          </>
        }
      ></Route>
      <Route
        path="/login"
        element={
          <>
            <Login />
          </>
        }
      ></Route>
      <Route
        path="/signup"
        element={
          <>
            <Signup />
          </>
        }
      ></Route>
    </Routes>
  );
}

export default App;

// import Firstbox from "./Components/Firstbox/Firstbox";
// import Secondbox from "./Components/Secondbox/Secondbox";
// import Degree from "./Components/Degree/Degree";
// import Projects from "./Components/Projects/Projects";
// import Coursera from "./Components/Coursera/Coursera";
// import Ad from "./Components/Ad/Ad";
// import Popular from "./Components/Popular/Popular";
// import Skill from "./Components/Skill/Skill";
// import Explore from "./Components/Explore/Explore"

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// // import React from "react";
// // import './App.css';

// function App() {
//   return (
//     <div className="App">
// <div>
//   <Firstbox />
//   <Secondbox />
//   <br />
//   <Degree />
//   <br />
//   <Projects /> <br />
//   <Coursera />
//   <br />
//   <br />
//   <Ad />
//   <Popular />
//   <br />
//   <Explore/>
//   <br />
//   <Skill/>
// </div>
//     </div>
//   );
// }

// export default App;
