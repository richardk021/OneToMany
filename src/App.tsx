<<<<<<< Updated upstream
import React from 'react';
=======
import React, {} from 'react';
import { useNavigate, Route, Routes, Link } from "react-router-dom";
import {configureStore} from '@reduxjs/toolkit';
>>>>>>> Stashed changes
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

const App: React.FC = () => {
<<<<<<< Updated upstream
  return (
    <div>
      <Navbar />
      testing
      <Footer />
    </div>
=======
  // const navigate = useNavigate();

  return (
      <div>
        <Navbar />
        <HomePage/>
        <Footer />
      </div>

>>>>>>> Stashed changes
  );
}

export default App;