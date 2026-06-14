import React from "react";

const Navbar = ({ activeTab, setActiveTab }) => {
  const tabs = ["home", "about", "portfolio", "contact"];

  return (
    <nav className="flex space-x-6">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`capitalize font-medium transition-colors duration-200 ${
            activeTab === tab
              ? "text-white border-b-2 border-white"
              : "text-gray-400 hover:text-white"
          }`}
        >
          {tab}
        </button>
      ))}
    </nav>
  );
};

export default Navbar;
