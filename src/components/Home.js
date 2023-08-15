import React from "react";
import NavBar from "./NavBar";
import { useState, useEffect } from "react";
import LandingPage from "../pages/LandingPage";
import About from "../pages/About";
import Contact from "../pages/Contact";

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
    <div id="top">
      <div className={showNavbar ? "fixed z-40 right-0 left-0 opacity-90 transition transform duration-300 ease-in-out shadow-xl" : "-mt-28 opacity-10"}>
        <NavBar />
      </div>
      <div>
        <LandingPage/>
      </div>
      <div id="about">
        <About/>
      </div>
      <div id="contact">
        <Contact/>
      </div>
    </div>
  );
};

export default Home;
