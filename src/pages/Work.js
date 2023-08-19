import React, { useEffect, useState } from "react";
import { CiFolderOn } from "react-icons/ci";
import { VscGithubAlt } from "react-icons/vsc";
import { BiLinkExternal } from "react-icons/bi";
import { works } from "../utils/workData";

const Work = () => {
  const [showFull, setShowFull] = useState(false);
  const [showWork, setShowWork] = useState(works.slice(0, 6));

  const handleShowButton = () => {
    setShowFull(!showFull);
  };

  useEffect(() => {
    if (showFull) {
      setShowWork(works);
    } else {
      setShowWork(works.slice(0, 6));
    }
  }, [showFull]);

  return (
    <div className="text-customSlate px-[8vw] sm:px-[2vw] md:px-[5vw] lg:px-[8vw] 2xl:px-[15vw] bg-customBlue flex flex-col items-center gap-20">
      <div className="flex items-center">
        <p className="flex-none text-customGreen text-lg sm:text-2xl font-mono">
          03.
        </p>
        <p className="flex-none px-4 truncate text-lg sm:text-3xl font-bold text-customLight">
          Some Things I’ve Built
        </p>
        <div className="h-0.5 flex-none w-[15vw] bg-customSlate"></div>
      </div>

      <div className="flex flex-wrap gap-6 justify-center">
        {showWork.map((item) => (
          <div
            key={item.id}
            className="sm:max-w-[280px] md:max-w-[300px] lg:max-w-[270px] xl:max-w-[340px] grow flex flex-col justify-between gap-6 bg-customNavy px-6 py-7 rounded hover:transition duration-300 ease-in-out  hover:-translate-y-2"
          >
            <div className="flex flex-col gap-5">
              <div className="flex items-center justify-between">
                <div>
                  <CiFolderOn className="text-5xl text-customGreen" />
                </div>
                <div className="flex items-center gap-4">
                  <div>
                    <a href={item.github_link} target="_blank" rel="noreferrer">
                      <VscGithubAlt className="text-2xl cursor-pointer hover:text-customGreen" />
                    </a>
                  </div>
                  <div>
                    <a href={item.live_link} target="_blank" rel="noreferrer">
                      <BiLinkExternal className="text-2xl cursor-pointer hover:text-customGreen" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-customLight font-sans font-bold text-lg">
                  {item.title}
                </p>
                <p className="text-justify text-sm">
                  {item.description.length > 300
                    ? `${item.description.slice(0, 300)}...`
                    : `${item.description}`}
                </p>
              </div>
            </div>
            <div className="flex font-mono gap-3 text-sm">
              {item.technologies.map((tech, index) => (
                <p key={index}>{tech}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className=" transition-transform transform translate-y-0 translate-x-0 bg-customGreen rounded">
        <button
          onClick={handleShowButton}
          className="px-4 py-2 truncate md:px-6 md:py-4 font-mono  text-customGreen bg-customBlue outline outline-1 rounded transform hover:-translate-y-1 hover:-translate-x-1"
        >
          {showFull ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
};

export default Work;
