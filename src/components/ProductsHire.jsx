import React, { useState } from "react";
import Tent from "./Hire/Tent";
import Decor from "./Hire/Decor";
import LedScreen from "./Hire/LedScreen";
import MobileToilets from "./Hire/MobileToilets";
import ChairTables from "./Hire/ChairTables";
import StageLights from "./Hire/StageLights";
import Barricades from "./Hire/Barricades";
import StageSetup from "./Hire/StageSetup";
import Photography from "./Hire/Photography";
import PhotoBooth from "./Hire/PhotoBooth";

const ProductsHire = () => {
  const [activeTab, setActiveTab] = useState("Decor");

  const content = {
    tents: <Tent />,
    Decor: <Decor />,
    "led screens": <LedScreen />,
    "Mobile Toilets": <MobileToilets />,
    "chair & tables": <ChairTables />,
    "Stage Setup": <StageSetup />,
    " barricades": <Barricades />,
    "Stage Lights": <StageLights />,
    "photo booth": <PhotoBooth />,
    photography: <Photography />,
  };

  return (
    <div className="">
      <div className="bg-[#f0fff9] py-10 flex flex-col md:flex-row">
        {" "}
        <div className="flex flex-col">
          <div className="text-center pt-4 text-3xl font-medium capitalize">
            Hire the best events tools from us
          </div>
          <div className="p-6 max-w-2xl mx-5 my-5">
            {/* Buttons */}
            <div className="grid grid-cols-2 md:grid-cols-4 justify-center items-center gap-4 mb-4 ">
              {Object.keys(content).map((tab) => (
                <div
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-lg hover:bg-[#002e1d] ${
                    activeTab === tab
                      ? "bg-[#002e1d] text-white"
                      : "bg-gray-300 text-black"
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

export default ProductsHire;
