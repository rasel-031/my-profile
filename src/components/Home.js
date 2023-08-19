import React from "react";
import NavBar from "./NavBar";
import { useState, useEffect } from "react";
import LandingPage from "../pages/LandingPage";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Experience from "../pages/Experience";
import Work from "../pages/Work";
import Footer from "../pages/Footer";
import LeftSideLink from "./LeftSideLink";
import RightSideLink from "./RightSideLink";
import SocialLinkMobile from "../pages/SocialLinkMobile";

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
    <div className="bg-customBlue flex felx-row justify-between">
      <div
        className={
          showNavbar
            ? "fixed z-50 top-0 right-0 left-0 opacity-90 shadow-xl"
            : "hidden"
        }
      >
        <NavBar />
      </div>
      <div className="hidden md:flex">
        <LeftSideLink />
      </div>
      <div className="flex flex-col bg-customBlue">
        <div id="top">
          <LandingPage />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="experience">
          <Experience />
        </div>
        <div id="work">
          <Work />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <div className="visible md:hidden">
          <SocialLinkMobile/>
        </div>
        <div>
          <Footer />
        </div>
      </div>
      <div className="hidden md:flex">
        <RightSideLink/>
      </div>
    </div>
  );
};

export default Home;
