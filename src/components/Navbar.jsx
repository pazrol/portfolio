import React from "react";
import "./Navbar.css"; // Don't forget to import the CSS file!

const Navbar = ({ activeTab, setActiveTab }) => {
  const tabs = ["home", "about", "portfolio", "contact"];

  return (
    <nav className="navbar">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`nav-button ${activeTab === tab ? "active" : ""}`}
        >
          {tab}
        </button>
      ))}
    </nav>
  );
};

export default Navbar;
