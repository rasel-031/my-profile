import React from "react";

const Navigation = () => {
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
          <a href="#experience" onClick={(e) => scrollToSection(e, "#experience")}>&nbsp;Experience</a>
        </div>
        <div className="px-4 hover:text-customGreen">
          <span className="text-customGreen">3.</span>
          <a href="#work" onClick={(e) => scrollToSection(e, "#work")}>&nbsp;Work</a>
        </div>
        <div className="px-4 hover:text-customGreen">
          <span className="text-customGreen">4.</span>
          <a href="#contact" onClick={(e) => scrollToSection(e, "#contact")}>&nbsp;Contact</a>
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
  );
};

export default Navigation;
