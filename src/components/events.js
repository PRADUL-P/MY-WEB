import React, { useState } from "react";
import Day1 from "./day1";
import Day2 from "./day2";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div id='Events'>
      <div className="flex justify-center">
        <button
          className={`px-10 m-2 py-2 rounded btn btn-sm ${
            activeTab === 0 ? "btn btn-lg" : "bg-gray-400"
          }`}
          onClick={() => handleTabClick(0)}
        >
          experience
        </button>
        <button
          className={`px-10 m-3 py-2 rounded btn btn-sm ${
            activeTab === 1 ? "btn btn-lg" : "bg-gray-400"
          }`}
          onClick={() => handleTabClick(1)}
        >
          education
        </button>
      </div>
      <div className="flex flex-row">
        {activeTab === 0 && <Day1 />}
        {activeTab === 1 && <Day2 />}
      </div>
    </div>
  );
};

export default Tabs;
