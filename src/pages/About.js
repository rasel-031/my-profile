import React from "react";
import pp from "../assets/images/rasel.jpg";
import { about } from "../utils/aboutData";
import { CiStar } from "react-icons/ci";

const About = () => {
  return (
    <div className="px-[10vw] pt-16 bg-customBlue lg:px-[12vw] xl:px-[18vw]">
      <div className="flex items-center px-0 py-10 ">
        <p className="flex-none text-customGreen text-lg sm:text-2xl font-mono">
          01.
        </p>
        <p className="flex-none px-4 truncate text-lg sm:text-3xl font-bold text-customLight">
          About Me
        </p>
        <div className="h-0.5 flex-none w-[15vw] bg-customSlate"></div>
      </div>
      <div className="flex flex-col text-customSlate gap-12 text-sm md:text-base lg:flex-row">
        <div className="flex flex-col gap-3 ">
          {about.myself.map((item, index) => (
            <div key={index} className="text-justify ">
              <p>{item}</p>
            </div>
          ))}
          <div>
            <p className="pb-3">
              Here are a few technologies I’ve been working with recently:
            </p>
            <div className="flex gap-6">
              <div>
                {about.technologies.map((item, index) => (
                  <div key={index}>
                    {index % 2 === 0 && (
                      <div className="flex items-center gap-2">
                        <p>
                          <CiStar className="text-customGreen" />
                        </p>
                        <p className="truncate">{item}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div>
                {about.technologies.map((item, index) => (
                  <div key={index}>
                    {(index + 1) % 2 === 0 && (
                      <div className="flex items-center gap-2">
                        <p>
                          <CiStar className="text-customGreen" />
                        </p>
                        <p className="truncate">{item}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* image div */}
        <div className="flex justify-center lg:ml-8">
          <div className="w-60 h-60 sm:w-80 sm:h-80  outline outline-2 rounded relative z-0 translate-x-3 translate-y-3 outline-customGreen"></div>
          <div className="w-60 h-60 sm:w-80 sm:h-80  absolute z-20 hover:-translate-x-1 hover:-translate-y-1">
            <img
              src={pp}
              alt="profile.jpg"
              className="w-60 h-60 sm:w-80 sm:h-80 rounded "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
