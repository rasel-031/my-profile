import React, { useState } from "react";
import Navigation from "./Navigation";
import { IoIosMenu } from "react-icons/io";
import NavDrawer from "./NavDrawer";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(true);
  };

  const toggleMenuClose = () => {
    setIsOpen(false);
  };

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
    <div>
      <div className="flex items-center justify-between px-[10vw] md:px-16 py-5 bg-customBlue ">
        <div className="font-mono font-bold text-customLight flex justify-center">
          <a
            href="#top"
            onClick={(e) => scrollToSection(e, "#top")}
            className=" flex items-center justify-center w-8 h-8 md:w-10 md:h-10 transform rotate-45 rounded outline outline-2 outline-customGreen"
          >
            <span className="transform -rotate-45 font-sans text-sm md:text-xl text-customGreen">
              RB
            </span>
          </a>
        </div>
        {/* for mobile screen */}
        <div className="block md:hidden">
          <button onClick={toggleMenu} className="text-customGreen text-4xl">
            <IoIosMenu />
          </button>
        </div>
        {/* for mobile screen */}

        {/* for tablet to upper screen */}
        <div className="hidden md:block">
          <Navigation />
        </div>
        {/* for tablet to upper screen */}
      </div>
      {/* right drawer */}
      <div
        className={
          isOpen
            ? "fixed z-50 top-0 right-0 bg-customNavy w-full flex justify-end visible transition ease-in-out duration-500 transform translate-x-0"
            : "fixed z-50 top-0 right-0 invisible transform translate-x-full opacity-10 transition-opacity ease-in-out duration-500"
        }
      >
        <NavDrawer onChildToggleClick={toggleMenuClose} />
      </div>
    </div>
  );
};

export default NavBar;
