import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/home');
  };

  const goToProgress = () => {
    navigate('/progress');
  };

  return (
    <nav className="navbar">
      <div className="profile">
        <img src="/images/boy.png" alt="Profile" className="profileImage" />
        <span className="profileName">User 1</span>
      </div>
      <div className="buttons">
        <button className="button" onClick={goToHome}>
          Home
        </button>
        <button className="button" onClick={goToProgress}>
          Progress
        </button>
      </div>
    </nav>
  );
};

export default Navbar;