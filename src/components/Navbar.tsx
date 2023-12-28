// components/Navbar.tsx

import React from "react";
import "./Navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="profile">
        {/* Profile content goes here */}
        <img src="./assets/boy.png" alt="Profile" className="profileImage" />
        <span className="profileName">User 1</span>
      </div>
      <div className="buttons">
        {/* Home button */}
        <button className="button">Home</button>
        {/* Progress button */}
        <button className="button">Progress</button>
      </div>
    </nav>
  );
};

export default Navbar;
