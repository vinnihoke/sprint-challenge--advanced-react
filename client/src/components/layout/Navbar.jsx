import React, { useState, useEffect } from "react";
import { useDarkMode } from "../../hooks/useDarkMode";
import "./Navbar.css";

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useDarkMode(false);

  return (
    <nav className="navbar">
      <h1>Womens World Cup Players</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleDarkMode}
          className={darkMode ? "toggle toggled" : "toggle"}
        />
      </div>
    </nav>
  );
};

export default Navbar;
