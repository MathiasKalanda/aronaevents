import React, { useState } from "react";

import Question1 from "./FAQ/Question1";

const FAQ = () => {
  const [activeTab, setActiveTab] = useState("general");

  const content = {
    general: <Question1 />,

    MobileToilets: <Question1 />,
    LedScreens: <Question1 />,
    Barricades: <Question1 />,
    StageSetup: <Question1 />,
    Decor: <Question1 />,
  };

  return (
    <div className="">
      <div className="bg-[#f0fff9] py-10 flex flex-col md:flex-row">
        {" "}
        <div className="flex flex-col">
          <div className="text-center pt-4 text-3xl font-medium capitalize">
            Frequently Asked Questions
          </div>
          <div className="p-1 max-w-2xl my-5">
            {/* Buttons */}
            <div className="flex justify-center items-center">
              {Object.keys(content).map((tab) => (
                <div
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 hover:bg-gray-200  ${
                    activeTab === tab
                      ? "bg-gray-200 text-black rounded font-semibold"
                      : "bg-gray-100 text-black "
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Content Display */}
        <div className="md:p-4 rounded-lg md:w-1/2">{content[activeTab]}</div>
      </div>
    </div>
  );
};

export default FAQ;
