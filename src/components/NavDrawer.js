import React, { useEffect } from "react";
import { RxCross1 } from "react-icons/rx";
import OutsideClickHandler from "react-outside-click-handler";

const NavDrawer = ({ onChildToggleClick }) => {
  //scroll code
  const handleScroll = () => {
    if (window.scrollY > 0) {
      // call child component
      onChildToggleClick();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  //section code
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    // call child component
    onChildToggleClick();

    const targetSection = document.querySelector(sectionId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: "smooth",
      });
    }
  };

  //resume download
  const handleDownload = () => {
    const resumeUrl = "/resume/rasel-bishwas.pdf";
    window.open(resumeUrl, "_blank");
  };

  return (
    <div className="flex">
      <div className="w-[100vh] h-[100vh]  bg-customNavy opacity-80"></div>
      <OutsideClickHandler onOutsideClick={onChildToggleClick}>
        <div className="w-56 h-[100vh] bg-customBlue transition duration-500 ease-in-out">
          <div className="flex items-center justify-end p-4">
            <button
              onClick={onChildToggleClick}
              className="text-customGreen text-2xl"
            >
              <RxCross1 />
            </button>
          </div>

          <div className="flex flex-col items-center justify-center h-[90vh] font-mono">
            <div className="flex flex-col items-center justify-between gap-6 text-customLight">
              <div className="flex flex-col items-center px-4 hover:text-customGreen">
                <span className="text-customGreen">1.</span>
                <a href="#about" onClick={(e) => scrollToSection(e, "#about")}>
                  &nbsp;About
                </a>
              </div>
              <div className="flex flex-col items-center px-4 hover:text-customGreen">
                <span className="text-customGreen">2.</span>
                <a
                  href="#experience"
                  onClick={(e) => scrollToSection(e, "#experience")}
                >
                  &nbsp;Experience
                </a>
              </div>
              <div className="flex flex-col items-center px-4 hover:text-customGreen">
                <span className="text-customGreen">3.</span>
                <a href="#work" onClick={(e) => scrollToSection(e, "#work")}>
                  &nbsp;Work
                </a>
              </div>
              <div className="flex flex-col items-center px-4 hover:text-customGreen">
                <span className="text-customGreen">4.</span>
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, "#contact")}
                >
                  &nbsp;Contact
                </a>
              </div>
            </div>
            <div className="mt-8">
              {/* osthir button start*/}
              <div className=" transition-transform transform translate-y-0 translate-x-0 bg-customGreen rounded">
                <button
                  onClick={handleDownload}
                  className="font-mono px-4 py-2 text-customGreen bg-customBlue outline outline-1 rounded transform hover:-translate-y-1 hover:-translate-x-1"
                >
                  Resume
                </button>
              </div>
              {/* osthir button end*/}
            </div>
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default NavDrawer;
