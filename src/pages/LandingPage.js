import React from "react";

const LandingPage = () => {

  //section code
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
  
    const targetSection = document.querySelector(sectionId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex items-center bg-customBlue text-customLight pt-20 h-[100vh]">
      <div className="flex flex-col px-[15vw] md:px-[20vw] gap-8">
        <div className="font-mono text-customGreen text-base">
          <span>Hi, my name is</span>
        </div>
        <div className="text-3xl md:text-5xl font-bold flex flex-col gap-4">
          <h1>Rasel Bishwas.</h1>
          <h1 className="text-customSlate">I build things for the web.</h1>
        </div>
        <div className="text-customSlate text-base">
          <p>
            I’m a software engineer specializing in building (and occasionally
            designing) exceptional digital experiences. I love programming.
          </p>
        </div>
        <div className="flex items-start">
          {/* osthir button start*/}
          <div className=" transition-transform transform translate-y-0 translate-x-0 bg-customGreen rounded">
            <a href="#work" onClick={(e) => scrollToSection(e, "#work")} >
              <button className="px-4 py-2 truncate md:px-6 md:py-4 font-mono  text-customGreen bg-customBlue outline outline-1 rounded transform hover:-translate-y-1 hover:-translate-x-1">
              Check out my work!
              </button>
            </a>
          </div>
          {/* osthir button end*/}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
