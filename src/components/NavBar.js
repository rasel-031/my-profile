import React, { useState } from "react";
import Navigation from "./Navigation";
import { IoIosMenu } from "react-icons/io";
import NavDrawer from "./NavDrawer";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleMenuClose = () => {
    setIsOpen(false);
  };

  const scrollToTop = () => {
    setIsOpen(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className="flex items-center justify-between px-[10vw] md:px-16 py-5 bg-customBlue ">
        <div className="font-mono font-bold text-customLight flex justify-center">
          <a
            href="#top"
            onClick={scrollToTop}
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

        {/* right drawer */}
        <div className={isOpen ? "fixed z-50 top-0 right-0 " : "hidden"}>
          <NavDrawer onChildToggleClick={toggleMenuClose} />
        </div>
        {/* for mobile screen */}

        {/* for tablet to upper screen */}
        <div className="hidden md:block">
          <Navigation />
        </div>
        {/* for tablet to upper screen */}
      </div>
    </div>
  );
};

export default NavBar;
