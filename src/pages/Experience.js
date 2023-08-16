import React, { useEffect, useState } from "react";
import { works } from "../utils/workData";

const Experience = () => {
  const [activeTab, setActiveTab] = useState(works[0].name);
  const [activeTabData, setActiveTabData] = useState(works[0]);

  const handleTabClick = (activeTabName) => {
    setActiveTab(activeTabName);
  };

  useEffect(() => {
    setActiveTabData(works.find((item) => item.name === activeTab));
  }, [activeTab]);

  return (
    <div className="px-[8vw] md:px-[12vw] lg:px-[18vw] xl:px-[23vw] py-32 bg-customBlue text-customSlate">
      <div className="flex items-center">
        <p className="flex-none text-customGreen text-lg sm:text-2xl font-mono">02.</p>
        <p className="flex-none px-4 truncate text-lg sm:text-3xl font-bold text-customLight">
          Where I’ve Worked
        </p>
        <div className="h-0.5 flex-none w-[15vw] bg-customSlate"></div>
      </div>
      <div className="pt-16 flex flex-col gap-10 sm:flex sm:flex-row sm:gap-6 sm:justify-start">
        <div className="flex overflow-x-auto sm:flex sm:flex-col sm:overflow-x-hidden">
          {works.map((items) => (
            <div
              key={items.id}
              className={`flex flex-col sm:flex-row cursor-pointer hover:bg-customNavy hover:text-customGreen  ${
                activeTab === items.name ? "text-customGreen bg-customNavy" : ""
              }`}
              onClick={() => handleTabClick(items.name)}
            >
              {/* tablet or upper screen */}
              <div
                className={`hidden sm:flex sm:w-0.5 sm:h-full ${
                  activeTab === items.name ? "bg-customGreen" : "bg-customSlate"
                }`}
              ></div>
              <div className="flex-auto pl-4 pr-7 py-2 truncate">
                <p className="font-mono text-sm">{items.name}</p>
              </div>
              {/* mobile screen */}
              <div
                className={`flex-none h-0.5 sm:hidden  ${
                  activeTab === items.name ? "bg-customGreen" : "bg-customSlate"
                }`}
              ></div>
            </div>
          ))}
        </div>

        <div className="">
          {activeTabData && (
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <div className="text-base md:text-xl">
                  <span className="text-customLight">
                    {activeTabData.position}
                  </span>
                  <span className="text-customGreen">&nbsp;@&nbsp;</span>
                  <a
                    href={activeTabData.link}
                    target="blank"
                    className="text-customGreen hover:underline"
                  >
                    {activeTabData.name}
                  </a>
                </div>
                <div className="font-mono text-sm">
                  <span>{activeTabData.date}</span>
                </div>
              </div>
              <div className="flex flex-col gap-3 text-sm sm:text-base">
                {activeTabData.works.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Experience;
