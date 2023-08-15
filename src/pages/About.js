import React from "react";
import pp from "../assets/images/rasel.jpg";

const About = () => {
  return (
    <div className="px-[10vw] bg-customBlue lg:px-[12vw] xl:px-[18vw]">
      <div className="flex items-center px-0 py-10 ">
        <span className="text-customGreen text-lg sm:text-2xl font-mono">01.</span>
        <div className="flex items-center">
          <span className="px-4 text-xl sm:text-3xl font-bold text-customLight">
            About Me
          </span>
          <div className="h-0.5 w-[15vw] bg-customSlate"></div>
        </div>
      </div>
      <div className="flex flex-col text-customSlate gap-12 text-sm md:text-base lg:flex-row">
        <div className="flex flex-col gap-3 ">
          <div className="text-justify ">
            <p>
              Hello! My name is Rasel and I enjoy creating things that live on
              the internet. My interest in web development started back in 2012
              when I decided to try editing custom Tumblr themes — turns out
              hacking together a custom reblog button taught me a lot about HTML
              & CSS!
            </p>
          </div>
          <div className="text-justify">
            <p>
              Fast-forward to today, and I’ve had the privilege of working at an
              advertising agency, a start-up, a huge corporation, and a
              student-led design studio. My main focus these days is building
              accessible, inclusive products and digital experiences at
              Upstatement for a variety of clients.
            </p>
          </div>
          <div className="text-justify">
            <p>
              I also recently launched a course that covers everything you need
              to build a web app with the Spotify API using Node & React.
            </p>
          </div>
          <div>
            <p className="pb-3">
              Here are a few technologies I’ve been working with recently:
            </p>
            <div className="flex gap-10">
              <div>
                <li>Html</li>
                <li>Css</li>
                <li>JavaScript (ES6+)</li>
              </div>
              <div>
                <li>React</li>
                <li>Redux</li>
                <li>Node Js</li>
              </div>
            </div>
          </div>
        </div>
        {/* image div */}
        <div className="flex justify-center lg:ml-8">
          <div className="w-60 h-60 sm:w-80 sm:h-80  outline outline-2 rounded relative z-0 translate-x-3 translate-y-3 outline-customGreen"></div>
          <div className="w-60 h-60 sm:w-80 sm:h-80  absolute z-20 hover:-translate-x-1 hover:-translate-y-1">
            <img src={pp} alt="profile.jpg" className="w-60 h-60 sm:w-80 sm:h-80 rounded " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
