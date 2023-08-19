import React from "react";

const LeftSideLink = () => {
  return (
    <div className="h-[100vh] w-[10vw] flex items-end justify-center fixed z-40 bottom-0 right-0">
      <div className="text-customSlate flex flex-col items-center justify-center gap-32">
        <a
          href="mailto:raselbishwas997@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="cursor-pointer font-mono hover:text-customGreen transform rotate-90 transform-origin-top-right w-[10vw]"
        >
          raselbishwas997@gmail.com
        </a>

        <div className="w-0.5 h-24 bg-customSlate"></div>
      </div>
    </div>
  );
};

export default LeftSideLink;
