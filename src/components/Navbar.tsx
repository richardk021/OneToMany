

import React from "react";
import "./Navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="profile">
        {/* Use the correct relative path to the image */}
        <img src="/images/boy.png" alt="Profile" className="profileImage" />
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
