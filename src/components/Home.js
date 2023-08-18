import React from "react";
import NavBar from "./NavBar";
import { useState, useEffect } from "react";
import LandingPage from "../pages/LandingPage";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Experience from "../pages/Experience";
import Work from "../pages/Work";
import Footer from "../pages/Footer";

const Home = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setShowNavbar(prevScrollPos > currentScrollPos);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div className="bg-customBlue">
      <div className={showNavbar ? "fixed z-40 right-0 left-0 opacity-90 transition transform duration-300 ease-in-out shadow-xl" : "-mt-28 opacity-10"}>
        <NavBar />
      </div>
      <div id="top">
        <LandingPage/>
      </div>
      <div id="about">
        <About/>
      </div>
      <div id="experience">
        <Experience/>
      </div>
      <div id="work">
        <Work/>
      </div>
      <div id="contact">
        <Contact/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
