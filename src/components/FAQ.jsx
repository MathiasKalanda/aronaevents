import React, { useState } from "react";

import Question1 from "./FAQ/Question1";

const FAQ = () => {
  const [activeTab, setActiveTab] = useState("general");

  const content = {
    general: <Question1 />,
    Decoration: <Question1 />,
    Hiring: <Question1 />,
    Booking: <Question1 />,
  };

  return (
    <div className="">
      <div className="bg-[#f0fff9] py-10 flex flex-col md:flex-row">
        {" "}
        <div className="flex flex-col">
          <div className="text-center pt-4 text-3xl font-medium capitalize">
            Frequently Asked Questions
          </div>
          <div className="p-1  my-5">
            {/* Buttons */}
            <div className="flex md:flex-row md:gap-0 justify-center items-center  flex-row   gap-2 md:rounded-none rounded-md">
              {Object.keys(content).map((tab) => (
                <div
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-md hover:bg-gray-200  ${
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
