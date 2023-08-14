import React from "react";

const NavBar = () => {
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className="flex items-center justify-between px-16 py-5 bg-customBlue ">
        <div className="font-mono font-bold text-customLight flex justify-center">
          <a
            href="#top"
            onClick={scrollToTop}
            className=" flex items-center justify-center w-10 h-10 transform rotate-45 rounded outline outline-2 outline-customGreen"
          >
            <span className="transform -rotate-45 font-sans text-xl text-customGreen">
              RB
            </span>
          </a>
        </div>
        <div className="flex items-center justify-between font-mono font-bold">
          <div className="flex items-center justify-between text-customLight">
            <div className="px-4 hover:text-customGreen">
              <span className="text-customGreen">1.</span>
              <a href="#about" onClick={(e) => scrollToSection(e, "#about")}>
                &nbsp;About
              </a>
            </div>
            <div className="px-4 hover:text-customGreen">
              <span className="text-customGreen">2.</span>
              <a href="#experience">&nbsp;Experience</a>
            </div>
            <div className="px-4 hover:text-customGreen">
              <span className="text-customGreen">3.</span>
              <a href="#work">&nbsp;Work</a>
            </div>
            <div className="px-4 hover:text-customGreen">
              <span className="text-customGreen">4.</span>
              <a href="#about">&nbsp;Contact</a>
            </div>
          </div>
          <div className="ml-4">
            {/* osthir button start*/}
            <div className=" transition-transform transform translate-y-0 translate-x-0 bg-customGreen rounded">
              <button className="font-mono px-4 py-2 text-customGreen bg-customBlue outline outline-1 rounded transform hover:-translate-y-1 hover:-translate-x-1">
                Resume
              </button>
            </div>
            {/* osthir button end*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
