import React from "react";

const LandingPage = () => {
  return (
    <div className="flex items-center bg-customBlue text-customLight h-[100vh]">
      <div className="flex flex-col px-[20vw] gap-8">
        <div className="font-mono text-customGreen text-lg">
          <span>Hi, my name is</span>
        </div>
        <div className="text-5xl font-bold flex flex-col gap-4">
          <h1>Md. Rasel Bishwas.</h1>
          <h1 className="text-customSlate">I build things for the web.</h1>
        </div>
        <div className="text-customSlate text-lg">
          <p className="text-justify">
            I’m a software engineer specializing in building (and occasionally
            designing) exceptional digital experiences. I love programming.
          </p>
        </div>
        <div className="w-52">
          {/* osthir button start*/}
          <div className=" transition-transform transform translate-y-0 translate-x-0 bg-customGreen rounded">
            <button className="font-mono px-6 py-4 text-customGreen bg-customBlue outline outline-1 rounded transform hover:-translate-y-1 hover:-translate-x-1">
              Check out my work!
            </button>
          </div>
          {/* osthir button end*/}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
