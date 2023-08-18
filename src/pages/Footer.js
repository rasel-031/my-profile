import React from "react";
import { CiStar } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="text-customSlate text-sm sm:text-base font-mono flex justify-center py-10">
      <div>
        <a
          href="https://github.com/rasel-031/my-profile"
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center hover:text-customGreen"
        >
          <p>Designed & Built by Rasel Bishwas</p>

          <div className="flex gap-4">
            <div className="flex items-center gap-1">
              <CiStar />
              <p>React</p>
            </div>
            <div className="flex items-center gap-1">
              <CiStar />
              <p>Tailwind-CSS</p>
            </div>
            <div className="flex items-center gap-1">
              <CiStar />
              <p>2023</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Footer;
