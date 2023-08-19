import React from "react";
import { VscGithubAlt } from "react-icons/vsc";
import { FiLinkedin } from "react-icons/fi";
import { LiaCodepen } from "react-icons/lia";
import { CiTwitter } from "react-icons/ci";

const LeftSideLink = () => {
  return (
    <div className="h-[100vh] w-[10vw] flex items-end justify-center fixed z-50 bottom-0 left-0">
      <div className="text-customSlate flex flex-col items-center justify-center gap-6">
        <div className="">
          <a
            href="https://github.com/rasel-031"
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer hover:text-customGreen"
          >
            <VscGithubAlt className="text-xl transform translate-y-0 hover:-translate-y-1 transition duration-300 ease-in-out" />
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/rasel-bishwas-465483154"
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer hover:text-customGreen"
          >
            <FiLinkedin className="text-xl transform translate-y-0 hover:-translate-y-1 transition duration-300 ease-in-out" />
          </a>
        </div>
        <div>
          <a
            href="#twitter"
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer hover:text-customGreen"
          >
            <CiTwitter className="text-2xl transform translate-y-0 hover:-translate-y-1 transition duration-300 ease-in-out" />
          </a>
        </div>
        <div>
          <a
            href="#codepen"
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer hover:text-customGreen"
          >
            <LiaCodepen className="text-xl transform translate-y-0 hover:-translate-y-1 transition duration-300 ease-in-out" />
          </a>
        </div>
        <div className="w-0.5 h-24 bg-customSlate"></div>
      </div>
    </div>
  );
};

export default LeftSideLink;
